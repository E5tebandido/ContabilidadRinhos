document.addEventListener (
    "DOMContentLoaded", 
    (event) => {
        createNav();
    }
);

var userPanel = () => {
    udata();
}

var monthlyPanel = () => {
   
}

var taxesPanel = () => {
    fetch("./Views/Taxes.html")
        .then(response=> response.text())
        .then(text=> document.getElementById('panel').innerHTML = text);
}

var tournamentPanel = () => {
    fetch("./Views/Tournament.html")
        .then(response=> response.text())
        .then(text=> document.getElementById('panel').innerHTML = text);
}
