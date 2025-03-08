import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../../common/icons/Icon";
import style from "./FileDownload.module.scss";
import { buildFileNameFromHref, getFileInfo } from "./utils";

export interface IFileDownloadProps {
    href: HTMLAnchorElement["href"];
    title: HTMLAnchorElement["title"];
    withDate?: boolean;
    preview?: string;
}

interface FileInfo {
    size: string;
    type: string;
}

export const FileDownload: React.FC<IFileDownloadProps> = ({
    href,
    title,
    withDate,
    preview
}) => {
    const [fileInfo, setFileInfo] = useState<FileInfo>();
    const { t } = useTranslation("global");
    useEffect(() => {
        getFileInfo(href)
            .then(fileInfo => setFileInfo(fileInfo))
    }, [href])

    if (fileInfo == null) return null;
    return (
        <a
            href={href}
            download={buildFileNameFromHref(href, withDate)}
            title={title}
            className={style.fileDownload}
            aria-label={`${t("DOWNLOAD_FILE", { title })}`}
        >
            <h3 id="file-title">{title}</h3>
            <div className={style.file}>
                <div className={style.fileInfo}>
                    <p>{buildFileNameFromHref(href, withDate)}</p>
                    <p>{fileInfo?.size}</p>
                    <p><code>{fileInfo?.type}</code></p>
                </div>
                <div className={style.filePreview}>
                    <img src={preview} />
                </div>
                <Icon className={style.downloadBtn} icon="download" />
            </div>
        </a>
    )
}