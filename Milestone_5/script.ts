// Get references to the form and display area
const form = document.getElementById("Resume-form") as HTMLFormElement;

const resumeDisplayElement = document.getElementById("Resume-display") as HTMLDivElement;

const shareableLinkContainer = document.getElementById("Shareable-link-container") as HTMLDivElement;

const shareableLinkElement = document.getElementById("Shareable-link") as HTMLAnchorElement;

const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;
// Handle form submission
form.addEventListener('submit', (event: Event) => {
event.preventDefault(); // prevent page reload
// Collect input values
const username = (document.getElementById("UserName") as HTMLInputElement).value;
const name = (document.getElementById("Name") as HTMLInputElement).value;
const email = (document.getElementById("Email") as HTMLInputElement).value;
const phone = (document.getElementById("tel") as HTMLInputElement).value;
const education = (document.getElementById("Education") as HTMLTextAreaElement).value;
const experience = (document.getElementById("Experience") as HTMLTextAreaElement).value;
const skills = (document.getElementById("Skills") as HTMLTextAreaElement).value;
// Save form data in localStorage with the username as the key
const resumeData = {
name,
email,
phone,
education,
experience,
skills,
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
// Generate the resume content dynamically

const resumeHTML = `
<h2>Editable Resume</h2>
<h3>Personal Information</h3>
<p><b>Name:</b> <span contenteditable="true">${name}</span></p>
<p><b>Email:</b> <span contenteditable="true">${email}</span></p>
<p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
<h3>Education</h3>
<p contenteditable="true">${education}</p>
<h3>Experience</h3>
<p contenteditable="true">${experience}</p>
<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;
// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?UserName=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('UserName');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById("UserName") as HTMLInputElement).value =username;

(document.getElementById("Name") as HTMLInputElement).value =resumeData.Name;

(document.getElementById("Email") as HTMLInputElement).value =resumeData.Email;

(document.getElementById("tel") as HTMLInputElement).value =resumeData.phone;

(document.getElementById("Education") as HTMLTextAreaElement).value =resumeData.Education;

(document.getElementById("Experience") as HTMLTextAreaElement).value= resumeData.Experience;

(document.getElementById("Skills") as HTMLTextAreaElement).value =resumeData.Skills;
}
}
});