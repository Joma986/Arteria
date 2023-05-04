document.addEventListener("DOMContentLoaded", function() {
    var referrer = document.referrer;
    var cssLink = document.getElementById("dynamic-css");

    if (referrer.includes("Teste1.html")) {
        cssLink.href = "teste1.css";
    } else if (referrer.includes("Teste2.html")) {
        cssLink.href = "teste2.css";
    }
});