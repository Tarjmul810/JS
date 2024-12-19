const formatSwitchBtn = document.querySelector('.format-switch-button');

formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    const formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        formatSwitchBtn.setAttribute("data-format", "24");
    }else{
        formatSwitchBtn.setAttribute("data-format", "12");
    }
});

function clock() {
    var today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let periods = 'AM';

    if (hours >= 12) {
        periods = 'PM';
    }
    const formatValue = formatSwitchBtn.getAttribute("data-format");
    if(formatValue === "12"){
        hours = hours > 12 ? hours % 12 : hours;}
    

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }


    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.period').innerHTML = periods;



}

var updateClock = setInterval(clock, 1000)

var today = new Date();
let dayNumber = today.getDate();
let year = today.getFullYear();
let dayName = today.toLocaleString('default', { weekday: "long" });
let monthName = today.toLocaleString('default', { month: "short" });
document.querySelector('.day-number').innerHTML = dayNumber;
document.querySelector('.day-name').innerHTML = dayName;
document.querySelector('.year').innerHTML = year;
document.querySelector('.month-name').innerHTML = monthName;

let dotmenuBtn = document.querySelector('.dot-menu-btn')
let dotMenu = document.querySelector('.dot-menu')

dotmenuBtn.addEventListener('click',()=>{
    dotMenu.classList.toggle('active') 
})

document.addEventListener("click", (e)=>{
    if(e.target.id !== "active-menu"){
        dotMenu.classList.remove('active')}
})



