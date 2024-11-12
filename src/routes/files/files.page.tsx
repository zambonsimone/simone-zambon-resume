import React from "react";
import { FileDownload } from "../../components/files/file-download/FileDownload";
import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { SectionTitle } from "../../components/route/title/RouteTitle";
import { FILES_DATA } from "./constants";
import style from "./files.page.module.scss";
import { FILES_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE } = FILES_LABELS;

const Files: React.FC = () => { 
    return (
        <>
            <SectionTitle title={TITLE} subtitle={SUBTITLE}/>
            <IntroCode content={INTRO_CODE}/>
            <div className={style.fileList}>
                { FILES_DATA.map((file, index) => (
                    <FileDownload {...file} key={index}/> 
                ))}
            </div>     
        </>
    )
}

export default Files;