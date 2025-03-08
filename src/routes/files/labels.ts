import { BARTENDER_CLASS_CERTIFICATION_TITLE, JAVA_CLASS_CERTIFICATION_TITLE, RESUME_FILE_TITLE } from "./constants";

const today = new Date().toLocaleDateString().match(/([0-9]+)/g)?.join("");
export const FILES_LABELS = {
  TITLE: "TITLE",
  SUBTITLE: "SUBTITLE",
  INTRO_CODE: `const files = new Files([
  {
    title: "${RESUME_FILE_TITLE}",
    fileName: "Simone_Zambon_resume-${today}.pdf"
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