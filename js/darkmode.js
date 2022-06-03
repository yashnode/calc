const checkbox = document.getElementById('checkbox');
const buttons = document.querySelectorAll("button");
const normalBtn = document.querySelectorAll(".normal-dark");
const footer = document.getElementById('footer')
if (localStorage.getItem("isDarkMode")) {
    darkMode()
    checkbox.checked = true
}

checkbox.addEventListener('change', () => {
    if (!localStorage.getItem("isDarkMode")) {
        darkMode()
        localStorage.setItem("isDarkMode", 1);
    } else {
        localStorage.removeItem("isDarkMode");
        darkMode()
    }
})

function darkMode() {
    document.body.classList.toggle('dark-bg')
    document.querySelector("label").classList.toggle('dark-label')
    document.querySelector(".curr-val").classList.toggle('dark-curr-val')
    buttons.forEach((el) => el.classList.toggle('dark-buttons'));
    normalBtn.forEach((el) => el.classList.toggle('dark-btn'));
    footer.classList.toggle('dark-footer')
}