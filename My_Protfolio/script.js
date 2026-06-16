
   function sendEmail(event){
     event.preventDefault();
     let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
     }
      console.log("Params:", parms); 

     emailjs.send("service_p2esfeb","template_c5n2cfd",parms).then(function () {
            alert("Email has been sent!");
        })
        .catch(function (error) {
            alert("Failed to send email: " + JSON.stringify(error));
            console.error("EmailJS error:", error);
        });
        return false;
   }

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

