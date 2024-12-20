import { ContactMeForm } from "../../components/contact-me/contact-me-form/ContactMeForm";
import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { RouteTitle } from "../../components/route/title/RouteTitle";
import { CONTACT_ME_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE } = CONTACT_ME_LABELS;

const ContactMe: React.FC = () => {
    return (
        <>
            <RouteTitle title={TITLE} subtitle={SUBTITLE}/>
            <IntroCode content={INTRO_CODE} />
            <ContactMeForm />
        </>
    )
}
export default ContactMe
