import React, { useEffect, useState } from "react";
import { Icon } from "../../common/icons/Icon";
import style from "./FileDownload.module.scss";
import { buildFileNameFromHref, getFileInfo } from "./utils";

export interface IFileDownloadProps {
    href: HTMLAnchorElement["href"];
    title: HTMLAnchorElement["title"];
    withDate?: boolean;
}

interface FileInfo { 
    size: string;
    type: string;
}

export const FileDownload: React.FC<IFileDownloadProps> = ({
    href,
    title,
    withDate
}) => {
    const [fileInfo, setFileInfo] = useState<FileInfo>();
    useEffect(() => {
        getFileInfo(href)
            .then(fileInfo => setFileInfo(fileInfo))
    },[href])

    if (fileInfo == null) return null;
    return (
        <a 
            href={href} 
            download={buildFileNameFromHref(href, withDate)} 
            title={title} 
            className={style.fileDownload}
        >
            <h3>{title}</h3>
            <div className={style.file}>
                <div className={style.fileInfo}>
                    <p>{buildFileNameFromHref(href, withDate)}</p>
                    <p>{fileInfo?.size}</p>
                    <p>{fileInfo?.type}</p>
                </div>
                <div className={style.filePreview}>
                    <img src={href}/>
                </div>
                <Icon className={style.downloadBtn} icon="download"/>
            </div>   
        </a>
    )
}