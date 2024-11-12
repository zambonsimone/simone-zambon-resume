import { IFileDownloadProps } from "../../components/files/file-download/FileDownload";

export const RESUME_FILE_TITLE = "Resume";
export const CERTIFICATE_JAVA_CLASS_TITLE = "Attendance Certification Java Programming Class";
export const FILES_DATA: IFileDownloadProps[] = [
    {
        title: RESUME_FILE_TITLE,
        href: "/Resume.png",
        withDate: true,
    },
    {
        title: CERTIFICATE_JAVA_CLASS_TITLE,
        href: "/Attendance_Certification_Java_Programming_Class.pdf"
    }
]