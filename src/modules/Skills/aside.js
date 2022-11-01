// todo refactor 0_0 + DOM utilities

class Aside {
    init() {
        let asides = document.querySelectorAll(".skill-page__aside");

        asides.forEach((aside) => {
            let links = aside.querySelectorAll("a");

            links.forEach((link) => {
                link.addEventListener("click", (event) => {
                    event.preventDefault();

                    if (document.getElementById(link.dataset.id)) { // todo offset mobile/desktop
                        let element = document.getElementById(link.dataset.id),
                            scrollToHeight;

                        if (window.screen.width < 768) {
                            scrollToHeight = element.offsetTop - 80;
                        } else {
                            scrollToHeight = element.offsetTop - 20;
                        }

                        window.scrollTo({
                            top: scrollToHeight,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        if (window.screen.width < 768 && document.querySelector(".header__to-menu")) {
            document
                .querySelector(".header__to-menu")
                .addEventListener("click", () => {
                    document
                        .querySelector(".skill-page__aside")
                        .classList.toggle("active");
                    document
                        .querySelector(".header__to-menu")
                        .classList.toggle("active");
                });

            document
                .querySelector(".skill-page__aside")
                .addEventListener("click", () => {
                    document
                        .querySelector(".skill-page__aside")
                        .classList.remove("active");
                    document
                        .querySelector(".header__to-menu")
                        .classList.toggle("active");
                });
        }
    }
}

export default Aside;
