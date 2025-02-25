import { useTranslation } from "react-i18next";
import { ContactMeForm } from "../../components/contact-me/contact-me-form/ContactMeForm";
import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { RouteTitle } from "../../components/route/title/RouteTitle";
import { CONTACT_ME_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE } = CONTACT_ME_LABELS;

const ContactMe: React.FC = () => {
    const { t } = useTranslation("contacts");
    return (
        <>
            <RouteTitle title={t(TITLE)} subtitle={t(SUBTITLE)} />
            <IntroCode content={INTRO_CODE} />
            <ContactMeForm />
        </>
    )
}
export default ContactMe
