export const validateUserLoginForm = (values) => {
    const errors = {};
    const { username, password } = values;

    if (!username) {
        errors.username = 'Required';
    } else if (username.length < 6) {
        errors.username = 'Must be at least 6 characters.';
    } else if (username.length > 15) {
        errors.username = 'Cannot be more than 15 characters.';
    }

    if (!password) {
        errors.password = 'Required';
    } else if (password.length < 8) {
        errors.password = 'Must be at least 8 characters.';
    }

    return errors;
};
