
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
function learnMore() {
     const learnMoreBtn = document.querySelector("#learnMore");
    
        learnMoreBtn.addEventListener("click", learnMoreInfo);
        function learnMoreInfo() {
            
            let element = document.createElement('div');
            element.setAttribute("class", "bg-white text-dark p-4");
            element.style.position = "relative";
            element.style.transition = "1s all";    
            element.style.top = "-40vh";
            element.style.border = "2px solid black";
            element.style.height = "50vh";
            element.style.width = "50vw";
            element.style.color = "white";
        
            const htmlInfo = fetch('info.html').then(res => res.text()).then(info => {
                element.innerHTML += info;
                let close = document.createElement('i');
                close.style.position = "absolute";
                close.style.top = "20px";
                close.style.left = "50%"; 
                close.style.background = "black";
                close.style.padding = "10px";
            
                close.style.borderRadius = "50%";
                close.style.color = "white";
                close.setAttribute("class", "fas fa-times");
                element.appendChild(close);
                close.addEventListener("click", function(){
                    element.remove();
                })
            }).catch(console.error('something went wrong'));
            const lead = document.querySelector(".lead:last-child");
            element.style.position = "relative";
            element.style.margin = "0 auto";
            lead.insertBefore(element, learnMoreBtn);
            
        
     }
}

learnMore();
