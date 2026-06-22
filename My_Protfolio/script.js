
   function sendEmail(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
     

    let valid = true;

   if (name === "") {
        document.getElementById('name-error').textContent = "Le nom est obligatoire";
        valid = false;
    } else {
        document.getElementById('name-error').textContent = "";
    }
    if (email === "" || !email.includes("@")) {
        document.getElementById('email-error').textContent = "Email invalide";
        valid = false;
    } else {
        document.getElementById('email-error').textContent = "";
    }
    if (message === "") {
        document.getElementById('message-error').textContent = "Le message est obligatoire";
        valid = false;
    } else {
        document.getElementById('message-error').textContent = "";
    }

    if(valid){
       let parms = {
            name: name,
            email: email,
            message: message
        };
     emailjs.send("service_p2esfeb","template_c5n2cfd",parms).then(function () {
            alert("Email has been sent!");
        })
        .catch(function (error) {
            alert("Failed to send email: " + JSON.stringify(error));
            console.error("EmailJS error:", error);
        });
        return false;
   }}
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("header nav");


navToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('section, article').forEach(el => {
  observer.observe(el);
});




