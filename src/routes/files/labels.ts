import { today } from "../../utils/date";
import { CERTIFICATE_JAVA_CLASS_TITLE, RESUME_FILE_TITLE } from "./constants";

const fileDate = today.match(/([0-9]+)/g)?.join("");
export const FILES_LABELS = {
    TITLE: "Files",
    SUBTITLE: "",
    INTRO_CODE: `const files = new Files([
    {
        title: "${RESUME_FILE_TITLE}",
        fileName: "Simone_Zambon_resume-${fileDate}.png"
    },
    {
        title: "${CERTIFICATE_JAVA_CLASS_TITLE}",
        fileName: "Attendance_Certification_Java_Programming_Class.pdf"
    }    
])`,
}