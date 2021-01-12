
// First off lets select nameForm Id in html to select the form which takes name
const nameForm = document.getElementById('nameForm');

nameForm.addEventListener("submit", nameTaker);

function nameTaker(event) {
    let nameInput = document.getElementById('name');
    event.preventDefault();
    nameProcessor(nameInput.value);
    nameInput.value = null;
    
}

function nameProcessor(name) {
    if(name) {
      let name1 = processed(name);
       nameDisplay(name1); 
    }
}

function nameDisplay(name) {
        const nameDisplay = document.querySelector('#outputbox #nameDisplay');
        nameDisplay.innerHTML = `The funny name is 
            <em style="text-decoration: underline; color: steelblue; font-weight:bold">
            ${name} 
            </em>😂 
            `
}

   const learnMoreBtn = document.querySelector("#learnMore");
  
   learnMoreBtn.addEventListener("click", learnMoreInfo);
    function learnMoreInfo() {
        let i = 0;
        let element = document.createElement('div');
        element.setAttribute("class", "bg-dark p-4");
        element.style.height = "300px";
        element.style.width = "300px";
        element.style.color = "white";
        element.innerHTML = "<h1> hello world </h1>"
        this.appendChild(element);
        console.log(i);
        if(i > 1) {
            element.remove();
        }
        i++;
    }

