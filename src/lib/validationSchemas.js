const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const getContactFormValidation = (validation) => ({
    name: {
        required: validation.nameRequired,
    },
    email: {
        required: validation.emailRequired,
        pattern: {
            value: EMAIL_REGEX,
            message: validation.emailInvalid,
        },
    },
    message: {
        required: validation.messageRequired,
    },
    project: {
        required: validation.projectRequired,
    },
    terms: {
        required: validation.checkboxRequired,
    },
});
