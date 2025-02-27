import { useTranslation } from "react-i18next";
import { HtmlSanitizer } from "../../components/common/html-sanitizer/HtmlSanitizer";
import { ContactMeForm } from "../../components/contact-me/contact-me-form/ContactMeForm";
import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { RouteTitle } from "../../components/route/title/RouteTitle";
import { CONTACT_ME_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE, CONTACTS } = CONTACT_ME_LABELS;

const ContactMe: React.FC = () => {
    const { t } = useTranslation("contacts");
    return (
        <main>
            <RouteTitle title={t(TITLE)} subtitle={t(SUBTITLE)} />
            <IntroCode content={INTRO_CODE} />
            <h2>{t(CONTACTS.TITLE)}</h2>
            <ul>
                {CONTACTS.LIST_ITEMS.map((item, index) => (
                    <li key={index} aria-label={`${t(item.TITLE)}: ${item.VALUE}`}>
                        <HtmlSanitizer htmlString={
                            `<strong>${t(item.TITLE)}</strong>: ${item.LINK ?? item.VALUE}`
                        } />
                    </li>
                ))}
            </ul>
            <ContactMeForm />
        </main>
    )
}
export default ContactMe
