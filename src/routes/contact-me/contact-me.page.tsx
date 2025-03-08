import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HtmlSanitizer } from "../../components/common/html-sanitizer/HtmlSanitizer";
import { ContactMeForm } from "../../components/contact-me/contact-me-form/ContactMeForm";
import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { Title } from "../../components/route/content/text-content/Title";
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
            <Title title={t(CONTACTS.TITLE)}/>
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
                            { !showData && (
                                <a tabIndex={0} onClick={() => setShowData(true)}>{t("SHOW_DATA")}</a> 
                            )}
                        </li>
                    )
                })}
            </ul>
            <ContactMeForm />
        </main>
    )
}
export default ContactMe
