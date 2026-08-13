console.log("Javascript is connected!")

const waitListForm = document.getElementById("waitListForm");

console.log("Form:", waitListForm);

if (waitListForm) {
    waitListForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();

        if (email === "") {
            console.log("Please enter a valid email");
            return;
        }
        console.log("Email:", email);
        console.log("Ready to send email to backend");

        window.location.href = "success.html";
    });
}