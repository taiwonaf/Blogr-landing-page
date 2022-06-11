const hamBtn = document.getElementById("hambtn");
const dropdownMobile = document.querySelectorAll(".dropdown");

dropdownMobile.forEach(dropMobile => {
    dropMobile.addEventListener("click", () => {
        dropMobile.classList.toggle("activate");
    })
} )

hamBtn.addEventListener("click", () => {
    hamBtn.parentElement.classList.toggle("active");
})