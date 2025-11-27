// =========================
// features/userProfile/userProfileComponent.js
// =========================

export const UserProfileComponent = (function () {

    function render(user) {
        const outName = document.querySelector('#feat_user_out_name');
        const outEmail = document.querySelector('#feat_user_out_email');

        if (outName) {
            outName.textContent = user.name || '-';
        }
        if (outEmail) {
            outEmail.textContent = user.email || '-';
        }
    }

    function getFormValues() {
        const nameInput = document.querySelector('#feat_user_name');
        const emailInput = document.querySelector('#feat_user_email');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';

        return { name, email };
    }

    function clearForm() {
        const nameInput = document.querySelector('#feat_user_name');
        const emailInput = document.querySelector('#feat_user_email');

        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
    }

    function showError(message) {
        alert(message);
    }

    return {
        render,
        getFormValues,
        clearForm,
        showError
    };
})();
