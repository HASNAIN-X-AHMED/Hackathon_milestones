//Get References To The from And Display Area  
var form = document.getElementById("Resume-from");
var resumeDisplayElement = document.getElementById("Resume-display");
//Handle From Submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    //collect input values
    var name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var phone = document.getElementById("tel").value;
    var Education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    //Generate the resume dynamically
    var resumeHTLM = "\n    <h2><b>Resume</b></h2>\n     <h3>personal Information</h3>\n     <p><b>Name:</b>".concat(name, "</p>\n     <p><b>Name:</b>").concat(Email, "</p>\n     <p><b>Name:</b>").concat(phone, "</p>\n\n     <h3>Education</h3>\n     <p>").concat(Education, "</p>\n\n     <h3>Experience</h3>\n     <p>").concat(experience, "</p>\n\n     <h3>Skills</h3>\n     <p>").concat(skills, "</p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTLM;
    }
    else {
        console.error('The resume display');
    }
});
