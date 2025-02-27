export const CONTACT_ME_LABELS = {
  TITLE: "TITLE",
  SUBTITLE: "SUBTITLE",
  CONTACTS: {
    TITLE: "CONTACT_OPTIONS.TITLE",
    LIST_ITEMS: [
      {
        TITLE: "CONTACT_OPTIONS.PHONE", VALUE: "+39 3401176908"
      },
      {
        TITLE: "CONTACT_OPTIONS.EMAIL", VALUE: "zambon.simone@yahoo.it", LINK: "<a href='mailto:zambon-simone@yahoo.it' target='_blank'>zambon.simone@yahoo.it</a>"
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