const hamBtn = document.getElementById("hambtn");

hamBtn.addEventListener("click", () => {
    hamBtn.parentElement.classList.toggle("active");
})