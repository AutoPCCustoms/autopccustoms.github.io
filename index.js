function show_details(name) {
    const arg = name + "-details"
    const details = document.getElementById(arg);
    details.style.display = "block";
}

function hide_details(name) {
    const arg = name + "-details"
    const details = document.getElementById(arg);
    details.style.display = "none";
}