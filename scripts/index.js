function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[^<>()[\]\\.,;:\s@"]+\.[^<>()[\]\\.,;:\s@"]+$/;
    return re.test(String(email).toLowerCase());
}


function validatePhone(phone) {
    const re = /^\d{0,9}$/;
    return re.test(phone);
}

if (document.getElementById("contact-form")) {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (fullName === "Ironhack") {
            alert("You cannot be Ironhack, because I am Ironhack.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }


        if (!fullName || !email || !phone || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        else alert("Form submitted successfully.");

    });
}



document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar nav ul");
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
});



