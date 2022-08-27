let date = new Date();
//Date 객체 생성 (밀리초 정수 값까지 담아둠)

/* 캘린더 생성 함수 */
const renderCalendar = () => {
    const viewYear = date.getFullYear();
    //현지시간 기준 연도
    const viewMonth = date.getMonth();
    //현지시간 기준 (월은 0부터 시작하는 것 주의!)

    document.querySelector('.year').textContent = `${viewYear}`;
    document.querySelector('.month').textContent = `${viewMonth + 1}`;

    //파라미터 = year, month, date, hours, minutes, seconds, ms (year, month만 생략가능)
    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);
    //해당 월의 마지막 날짜

    const PrevDate = prevLast.getDate();
    console.log(PrevDate)
    const PrevDay = prevLast.getDay();
   //일요일 = 0

    const ThisDate = thisLast.getDate();
    const ThisDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(ThisDate + 1).keys()].slice(1);
    // keys() 배열의 각 인덱스를 키 값으로 가지는 새로운 Array Iterator 객체를 반환
    // slice(begin, end) 매개변수는 optional, 기본은 0, begin~end까지 얕은 복사본 (end제외)
    const nextDates = [];

    /* 기본 규격으로 이루어진 칸 중 지난달과 연결된 남은 칸 */

    //if 조건문 = 지난달 마지막날이 '월요일'이 아니면 ) 
    if (PrevDate !== 6){
        for (let i=0; i < PrevDay + 1; i++){
            prevDates.unshift(PrevDate - i)
        }
    }

    /* 기본 규격으로 이루어진 칸 중 다음달과 연결된 칸 */
    for (let i=1; i < 7 - ThisDay; i++){
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);
    // 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환 (남은 지난 달 날짜들 + 이번 달 날짜들 + 남은 다음 달 날짜들)
  
    const firstDateIndex = dates.indexOf(1);
    // '1'일이 시작되는 게 몇 번째인지 (지난 달 + 이번 달 + 다음 달) 합쳐둔 날짜 배열에서
    // indexOf니까 제일 처음 나오는 '1'을 찾음 = 이번 달 기준의 '1'
    const lastDateIndex = dates.lastIndexOf(ThisDate);
    // 이번 달의 '31일 또는 30일' = 마지막날이 몇 번째인지
    // lastIndexOf니까 지난 달의 마지막 날짜를 건너뛰고 이번 달의 마지막 날만 찾음



    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1 ?'this':'other';
        //이번달이면 this, 아니면 other의 문자열을 채움
        // date this 또는 date other이라는 클래스를 갖는 div태그를 생성 - 내용은 date
        dates[i] = `<div class="date ${condition}">${date}</div>`;
    });

    // dates.forEach((date, i)=>{
    //     const condition = i>= firstDateIndex && i < lastDateIndex + 1 ? 
    //     'this':
    //     'other';
    //     dates[i] = `
    //         <div class="date ${condition}">
    //             <div class="date-itm">
    //                 ${date}
    //             <div>
                
    //             <div class="date_event">
    //                 <div class="event-itm">EVENT</div>
    //             </div>
    //         </div>
    //     `;
    // });

    
    document.querySelector('.dates').innerHTML = dates.join('');
    //배열의 모든 요소를 연결하여 하나의 문자열을 만듦, 매개변수 = seperator

    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()){
        for (let date of document.querySelectorAll('.date-itm')){
            if (+date.innerText === today.getDate()){
                date.parentNode.classList.add('today')
                break;
            }
        }
    }
};

renderCalendar();
const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}
const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}
const goToday = () => {
    date = new Date();
    renderCalendar();
}