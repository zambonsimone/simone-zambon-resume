import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HtmlSanitizer } from "../../components/common/html-sanitizer/HtmlSanitizer";
import { ContactMeForm } from "../../components/contact-me/contact-me-form/ContactMeForm";
import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { RouteTitle } from "../../components/route/title/RouteTitle";
import style from "./contact-me.module.scss";
import { CONTACT_ME_LABELS } from "./labels";


const { TITLE, SUBTITLE, INTRO_CODE, CONTACTS } = CONTACT_ME_LABELS;

const ContactMe: React.FC = () => {
    const { t } = useTranslation("contacts");
    const [showData, setShowData] = useState(false);
    return (
        <main>
            <RouteTitle title={t(TITLE)} subtitle={t(SUBTITLE)} />
            <IntroCode content={INTRO_CODE} />
            <h2>{t(CONTACTS.TITLE)}</h2>
            <ul>
                {CONTACTS.LIST_ITEMS.map((item, index) => {
                    const ariaLabel = `${t(item.TITLE)}: ${showData ? item.VALUE : "click to show data"}`;
                    return (
                        <li key={index} aria-label={ariaLabel}>
                            <HtmlSanitizer 
                                className={style.contactItem}
                                htmlString={
                                    `<strong>${t(item.TITLE)}</strong>:  ${showData ? (item.LINK ?? item.VALUE) : ""}`
                                }
                            />
                            { !showData && <a onClick={() => setShowData(true)}>show data</a> }
                        </li>
                    )
                })}
            </ul>
            <ContactMeForm />
        </main>
    )
}
export default ContactMe
