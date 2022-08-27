const touchedTab = document.querySelector('.touched-wrapper');
const exitBtn = document.querySelector('touched-close');

const selectDate = [];

const dateFunc = () => {
    const dates = document.querySelectorAll('.date');
    const year = document.querySelector('.year');
    const month = document.querySelector('.month');
    dates.forEach((element)=>{
        element.addEventListener('click', ()=>{
            if(element.classList.contains('other') || element.classList('selected')){
                dates.forEach((item)=>{ item.classList.remove('selected');});
                element.classList.remove('selected');
                selectDate.length = 0;
            }else if(selectDate.length > 0){
                dates.forEach((item)=>{item.classList.remove('selected');});
                selectDate.push([year.innerHTML, month.innerHTML, element.innerHTML]);
                touchedTab.classList.add('open');
            }else {
                element.classList.add('selected');
                selectDate.push([year.innerHTML, month.innerHTML, element.innerHTML]);
                touchedTab.classList.add('open');
            }
        });
    });
};

/* 달력 초기화 함수 */
const reset = () => {
    selectDate.length = 0;
    dateFunc();
}

window.onload = () => {
    const navBtn = document.querySelectorAll('.nav-btn');
    navBtn.forEach(info => {
        if(info.classList.contains('month-prev')){
            info.addEventListener('click', ()=>{prevMonth(); reset();})
        }else if(info.classList.contains('go-today')){
            info.addEventListener('click', ()=>{goToday(); reset();})
        }else if(info.classList.contains('month-next')){
            info.addEventListener('click', ()=>{nextMonth(); reset();})
        }
    });
    reset();
}