const colorPicker = document.getElementById("colorPicker");
const tocka = document.getElementById("mojaTocka");
const logo = document.getElementById("logo");


tocka.addEventListener("click", () => {
colorPicker.click();
});


colorPicker.addEventListener("input", () => {
logo.setAttribute("fill", colorPicker.value);

});
