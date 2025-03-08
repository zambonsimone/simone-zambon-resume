import { useTranslation } from "react-i18next";
import { FileDownload } from "../../components/files/file-download/FileDownload";
import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { RouteTitle } from "../../components/route/title/RouteTitle";
import { FILES_DATA } from "./constants";
import style from "./files.page.module.scss";
import { FILES_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE } = FILES_LABELS;

const Files: React.FC = () => {
    const { t } = useTranslation("files");
    return (
        <main>
            <RouteTitle title={t(TITLE)} subtitle={t(SUBTITLE)} />
            <IntroCode content={INTRO_CODE} />
            <div className={style.fileList}>
                {FILES_DATA.map((file, index) => (
                    <FileDownload {...file} key={index} />
                ))}
            </div>
        </main>
    )
}

export default Files;