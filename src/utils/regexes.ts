export const EMAIL_FORMAT_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const PHONE_NUMBER_REGEX = /^\d{6,12}$/;
export const PHONE_PREFIX_REGEX = /(?:^\d{1,3}$)|(?:^\d{1,2}\-{1}\d{3,4}$)/;
export const HTML_TAG_REGEX = /(<\w+[^>]*>)|(<\/\w+[^>]*>)/g;