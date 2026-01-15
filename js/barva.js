// Pridobi elemente
const colorPicker = document.getElementById("colorPicker");
const tocka = document.getElementById("mojaTocka");
const logo = document.getElementById("logo");

// Open color picker when clicking the logo
tocka.addEventListener("click", () => {
colorPicker.click();
});

// Change logo color
colorPicker.addEventListener("input", () => {
logo.setAttribute("fill", colorPicker.value);
});