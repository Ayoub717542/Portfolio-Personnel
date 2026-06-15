
const themeBtn = document.querySelector(".theme-toggle");
const icon = document.querySelector(".theme-toggle i");

themeBtn.addEventListener("click", function (e) {
    e.preventDefault();

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");
    }
});


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

