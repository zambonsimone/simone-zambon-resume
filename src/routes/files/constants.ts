import { IFileDownloadProps } from "../../components/files/file-download/FileDownload";

export const RESUME_FILE_TITLE = "Resume";
export const JAVA_CLASS_CERTIFICATION_TITLE = "Java Programming Class Attendance Certification";
export const BARTENDER_CLASS_CERTIFICATION_TITLE = "Bartender Class Certification";
export const FILES_DATA: IFileDownloadProps[] = [
    {
        title: RESUME_FILE_TITLE,
        href: "/Resume.pdf",
        withDate: true,
        preview: "/Resume.jpg"
    },
    {
        title: JAVA_CLASS_CERTIFICATION_TITLE,
        href: "/Java_Class_Certification.pdf",
        preview: "/Java_Class_Certification.jpg"
    },
    {
        title: BARTENDER_CLASS_CERTIFICATION_TITLE,
        href: "/Bartender_Class_Certification.pdf",
        preview: "/Bartender_Class_Certification.jpg",
    }
]