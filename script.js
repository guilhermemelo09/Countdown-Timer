const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector('#minutes1');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector("#days");

/*Segundo método*/
const nextYear = new Date().getFullYear()+1;
console.log(nextYear);

const newYearTime = new Date (`January 01 ${nextYear} 00:00:00`)
console.log(newYearTime.getFullYear())

const countTimer = () =>{
    const currentTime = new Date();
    const diferenca = newYearTime - currentTime;
    console.log(diferenca);

    const seconds = Math.floor(diferenca / 1000) % 60;/*faltam x secundos para o minuto acabar.*/
    console.log(seconds);
    
    const minutes = Math.floor(diferenca/1000/60) %60;/*para a hora acabar, fala x minutos*/ 
    console.log(minutes);
    
    const hours = Math.floor(diferenca / 1000/60/60) % 24;/*Faltam x horas para o dia acabar*/
    console.log(hours);
    
    const days = Math.floor(diferenca/1000/60/60/24);/*faltam x dias para o ano acabar*/
    console.log(days);

    secondsContainer.textContent = seconds < 10 ? '0'+seconds:seconds;
    minutesContainer.textContent = minutes<10?'0'+minutes:minutes;
    hoursContainer.textContent = hours<10?'0'+hours:hours;
    daysContainer.textContent = days<10?'0'+days:days;


}

countTimer()

setInterval(countTimer, 1000)/*é um método que vai invocar uma função repetidamente. a repetiçaõ da invocação irá acontecer no intervalo de tempo que especificarmos no primeiro argumento*/
