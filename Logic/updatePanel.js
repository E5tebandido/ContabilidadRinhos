document.addEventListener (
    "DOMContentLoaded", 
    (event) => {
        createNav();
    }
);

var userPanel = () => {
    udata("rdata","athletes");
}

var assistancePanel = () => {
    udata("rdata","asistencias");
}

var classesPanel = () => {
    udata("rdata","clases");
}

var plafieldPanel = () => {
    udata("rdata","cancha");
}

var monthlyPanel = () => {
    udata("rdata","mensualidad");
}

var lfpPanel = () => {
    udata("rdata","lfp");
}