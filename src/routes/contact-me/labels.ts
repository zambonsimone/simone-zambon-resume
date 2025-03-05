const obfuscatedMail = "&#122;&#097;&#109;&#098;&#111;&#110;&#046;&#115;&#105;&#109;&#111;&#110;&#101;&#064;&#121;&#097;&#104;&#111;&#111;&#046;&#105;&#116;";
const obfuscatedPhone = "&#43;&#51;&#57; &#51;&#52;&#48;&#49;&#49;&#55;&#54;&#57;&#48;&#56;";

export const CONTACT_ME_LABELS = {
  TITLE: "TITLE",
  SUBTITLE: "SUBTITLE",
  CONTACTS: {
    TITLE: "CONTACT_OPTIONS.TITLE",
    LIST_ITEMS: [
      {
        TITLE: "CONTACT_OPTIONS.PHONE", VALUE: obfuscatedPhone
      },
      {
        TITLE: "CONTACT_OPTIONS.EMAIL", VALUE: obfuscatedMail, LINK: `<a href='mailto:${obfuscatedMail}' target='_blank'>${obfuscatedMail}</a>`
      },
      {
        TITLE: "CONTACT_OPTIONS.SKYPE", VALUE: "zambon.simone95"
      },
      {
        TITLE: "CONTACT_OPTIONS.LINKEDIN", VALUE: "https://www.linkedin.com/in/simone-zambon-2ab164169", LINK: "<a href='https://www.linkedin.com/in/simone-zambon-2ab164169' target='_blank'>https://www.linkedin.com/in/simone-zambon-2ab164169</a>"
      },
    ]
  },
  INTRO_CODE: `const contactInfo = new ContactsDetails({
  phoneNumber: "+39 3401176908",
  email: "zambon.simone@yahoo.it",
  skype: "zambon.simone95",
  linkedIn: "https://www.linkedin.com/in/simone-zambon-2ab164169"
})`,
}