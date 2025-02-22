// JavaScript for interactive button

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("alertButton");
    
    if (button) {
        button.addEventListener("click", function() {
            alert("Hello World");
        });
    }
});
