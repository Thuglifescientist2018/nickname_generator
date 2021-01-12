
function processed(name) {
    let name1 = name; 
    let random = Math.floor(Math.random() * letters.length);
    const randomletter = letters[random];
    name1 = name1.replace(name1[0], randomletter);
    return name1;
}

function processed2(name) {
    let name1 = name;
    return name1;
    
}