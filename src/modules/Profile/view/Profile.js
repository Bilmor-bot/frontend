class Profile {
    constructor(presenter, profile) {
        this._root = document.querySelector(".main-profile");
        this._profile = profile;

        this._presenter = presenter;

        this._elements = {
            avatar: this._root.querySelector(".main-profile__avatar .avatar__image img"),
            uploadAvatar: this._root.querySelector(".main-profile button"),
            inputAvatar: this._root.querySelector(".main-profile input"),
            email: this._root.querySelector(".main-profile__email"),
            name: this._root.querySelector(".main-profile__name"),
            logout: this._root.querySelector(".main-profile__logout")
        };
    }

    _render() {
        this._elements.avatar.src = this._profile.getAvatar();
        this._elements.email.textContent = this._profile.getEmail();
        this._elements.name.textContent = this._profile.getName();

        return this;
    }

    _addListeners() {
        this._elements.uploadAvatar.addEventListener("click", () => {
            this._presenter.uploadAvatar(
                this._elements.inputAvatar.value,
                (profile) => {
                    this._elements.avatar.src = profile.getAvatar();
                },
                () => {}
            )
        });

        this._elements.logout.addEventListener("click", () => {
            this._presenter.logout();
        });

        return this;
    }

    init() {
        this
            ._render()
            ._addListeners();
    }
}

export default Profile;
