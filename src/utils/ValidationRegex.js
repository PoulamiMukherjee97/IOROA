export const specialCharRegEx = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
export const phoneRegex = /(^(\d{10})$)|(^([(]?\d{3}[)]?[/-]?\d{3}[/-]?\d{4})$)/;
export const onlyNumbersRegex = /^[0-9]+$/;
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const specialCharRegExWithSpace = /[!@#$%^&*()_+\-=[\]{};' :"\\|,.<>/?]/;
export const onlyAlphabets = /^[A-Za-z]+$/;
/**
 * Removal of special characters on focussing out of the field
 * value: field value with special characters
 */

export const handleBlurCapture = (value) => value && value.replace(new RegExp(specialCharRegEx, 'g'), '');
