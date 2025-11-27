// =========================
// features/userProfile/userProfileStore.js
// =========================

const UserProfileStore = (function () {
    let user = {
        name: '',
        email: ''
    };

    function setUser(name, email) {
        user = { name, email };
    }

    function getUser() {
        return { ...user };
    }

    return {
        setUser,
        getUser
    };
})();

export { UserProfileStore };
