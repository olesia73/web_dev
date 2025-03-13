function updateName() {
    const name = prompt("Enter your pet's name");
    button.textContent = `Pet 1: ${name}`;
}
const button = document.querySelector("button");
button.addEventListener("click", updateName);
