// =========================
// features/userProfile/index.js
// =========================

import { UserProfileStore } from './userProfileStore.js';
import { UserProfileComponent } from './userProfileComponent.js';

export const UserProfileFeature = (function () {

    function init() {
        const btnSave = document.querySelector('#feat_user_save');
        if (btnSave) {
            btnSave.addEventListener('click', handleSave);
        }

        // initial render
        UserProfileComponent.render(UserProfileStore.getUser());
    }

    function handleSave() {
        const { name, email } = UserProfileComponent.getFormValues();

        if (!name || !email) {
            UserProfileComponent.showError('Gelieve naam en e-mail in te vullen.');
            return;
        }

        UserProfileStore.setUser(name, email);
        UserProfileComponent.render(UserProfileStore.getUser());
        UserProfileComponent.clearForm();
    }

    return {
        init
    };
})();
