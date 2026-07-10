      document.getElementById("year").textContent = new Date().getFullYear();

    function sendEmail(event){
    
      event.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      
      let valid = true;

    if (name === "") {
          document.getElementById('name-error').textContent = "Le nom est obligatoire";
          valid = false;
      } else {
          document.getElementById('name-error').textContent = "";
      }
      if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

  let emailInput=document.getElementById("email");

  emailInput.addEventListener("input",function(e){
    if(e.target.value.lenght>3){
     console.log("")
    }

  })




























// const nameInput = document.getElementById("name");

// nameInput.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

// const eamilInput = document.getElementById("eamil");

// eamilInput.addEventListener("input", function(e){
//     console.log(e.target.value)
// })


