document.addEventListener("DOMContentLoaded", function () {
    fetch("../html/navbar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("nav-placeholder").innerHTML = html;
        });
});