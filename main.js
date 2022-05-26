const checkbox = document.getElementById('checkbox');
const buttons = document.querySelectorAll("button");
const normalBtn = document.querySelectorAll(".normal-dark");

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-bg')
    document.querySelector("label").classList.toggle('dark-label')
    document.querySelector(".curr-val").classList.toggle('dark-curr-val')
    buttons.forEach((el) => el.classList.toggle('dark-buttons'));
    normalBtn.forEach((el) => el.classList.toggle('dark-btn'));
})