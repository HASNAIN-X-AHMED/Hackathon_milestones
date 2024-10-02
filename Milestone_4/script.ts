//Get References To The from And Display Area  
const form = document.getElementById("Resume-from") as HTMLFormElement
const resumeDisplayElement = document.getElementById("Resume-display")as HTMLDivElement

//Handle From Submission
form.addEventListener("submit",(event: Event)=>{
    event.preventDefault(); // prevent page reload

    //collect input values
    const name =(document.getElementById("Name")as HTMLInputElement).value
    const Email =(document.getElementById("Email")as HTMLInputElement).value
    const phone =(document.getElementById("tel")as HTMLInputElement).value
    const Education =(document.getElementById("Education")as HTMLInputElement).value
    const experience =(document.getElementById("Experience")as HTMLInputElement).value
    const skills =(document.getElementById("Skills")as HTMLInputElement).value

    //Generate the resume dynamically
    const resumeHTLM =`
    <h2><b>Editable Resume</b></h2>
     <h3>personal Information</h3>
     <p><b>Name:</b><span contenteditable="ture">${name}</span></p>
     <p><b>Name:</b><span contenteditable="ture">${Email}</span></p>
     <p><b>Name:</b><span contenteditable="ture">${phone}</span></p>

     <h3>Education</h3>
     <p contenteditable="ture">${Education}</p>

     <h3>Experience</h3>
     <p contenteditable="ture">${experience}</p>

     <h3>Skills</h3>
     <p contenteditable="ture">${skills}</p>
    `

    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML=resumeHTLM;
    }else{
        console.error('The resume display')
    }
    

})