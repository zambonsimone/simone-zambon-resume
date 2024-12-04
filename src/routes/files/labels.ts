import { today } from "../../utils/date";
import { BARTENDER_CLASS_CERTIFICATION_TITLE, JAVA_CLASS_CERTIFICATION_TITLE, RESUME_FILE_TITLE } from "./constants";

const fileDate = today.match(/([0-9]+)/g)?.join("");
export const FILES_LABELS = {
  TITLE: "Files",
  SUBTITLE: "In questa sezione è possibile scaricare documenti riguardanti la mia professione",
  INTRO_CODE: `const files = new Files([
  {
    title: "${RESUME_FILE_TITLE}",
    fileName: "Simone_Zambon_resume-${fileDate}.pdf"
  },
  {
    title: "${JAVA_CLASS_CERTIFICATION_TITLE}",
    fileName: "Java_Class_Certification.pdf"
  },
  {
    title: "${BARTENDER_CLASS_CERTIFICATION_TITLE}",
    fileName: "Bartender_Class_Certification.pdf"
  }   
])`,
}