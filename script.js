/* =====================================
   JavaScript Form Validation
   Skill Exchange Platform
===================================== */

function validateForm() {

    // JavaScript Variables
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;
    var level = document.getElementById("level").value;

    // Check Name
    if (firstName == "" || lastName == "") {
        alert("Please enter your first name and last name.");
        return false;
    }

    // Check Email
    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    // Check Password
    if (password == "") {
        alert("Please enter your password.");
        return false;
    }

    // Arithmetic Expression
    var passwordScore = password.length * 2;

    if (passwordScore < 16) {
        alert("Password should contain at least 8 characters.");
        return false;
    }

    // Check Mobile Number
    if (mobile == "") {
        alert("Please enter your mobile number.");
        return false;
    }

    if (isNaN(mobile) || mobile.length != 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Check Gender
    var gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (gender == null) {
        alert("Please select your gender.");
        return false;
    }

    // Check Skill
    var skills = document.querySelectorAll(
        'input[name="skill"]:checked'
    );

    if (skills.length == 0) {
        alert("Please select at least one skill.");
        return false;
    }

    // Check Skill Level
    if (level == "") {
        alert("Please select your preferred skill level.");
        return false;
    }

    // Arithmetic Expression
    var totalSkills = skills.length;
    var learningScore = totalSkills * 10;

    alert(
        "Registration Successful!\n" +
        "Skills Selected: " + totalSkills +
        "\nLearning Score: " + learningScore
    );

    return false;
}