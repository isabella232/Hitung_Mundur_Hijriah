const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const SaL = document.getElementById('sal');
const rl = document.getElementById('rl');

function CountDown() {
    let now = new Date();
    let fixedNow = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());

    let hijriahYearPast = 1;
    let hijriahVar;

    let ramadhan21 = new Date(2021, 4, 12);
    let ramadhanNow = new Date(ramadhan21.getTime() + 355 * 24 * 60 * 60 * 1000 * hijriahYearPast);

    let diff = ramadhanNow - fixedNow;
    let monthLeft = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
    let daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    let minutesLeft = Math.floor(diff / 1000 / 60) % 60;

    while (fixedNow.getTime() > ramadhanNow.getTime()) {
        hijriahYearPast++;
        ramadhanNow = new Date(ramadhan21.getTime() + 355 * 24 * 60 * 60 * 1000 * hijriahYearPast);
    }

    // when ramadhan
    // 1 month
    if (monthLeft < 1 && daysLeft < 31) {
        SaL.innerHTML = `tinggal ${daysLeft} hari lagi loh`;
    }
    if (monthLeft < 1 && daysLeft < 1 && hoursLeft < 24) {
        SaL.innerHTML = `tinggal ${hoursLeft} Jam lagi loh`;
    }
    if (monthLeft < 1 && daysLeft < 1 && hoursLeft < 24) {
        SaL.innerHTML = `tinggal ${hoursLeft} Jam lagi loh`;
    }
    // 2 or 3 months
    if (monthLeft <= 3) {
        SaL.innerHTML = `tinggal ${monthLeft} bulan lagi loh`;
    }
    if (monthLeft > 3) {
        SaL.innerHTML = `masih ${monthLeft} bulan lagi nih`;
    }
    if (daysLeft > 325) {
        rl.innerHTML = `Puasa kalian gimana? Lancar gak?`;
    }




    days.innerHTML = lessThan10(daysLeft, daysLeft);
    hours.innerHTML = lessThan10(hoursLeft, hoursLeft);
    minutes.innerHTML = lessThan10(minutesLeft, minutesLeft);
    seconds.innerHTML = lessThan10(Math.floor(diff / 1000) % 60, Math.floor(diff / 1000) % 60);

    setTimeout(CountDown, 1000);
}
function letter1(monthLeft, daysLeft) {
}

function dayInMonth(year, month) {
    var leapYearCheck = year % 4;
    var maxDay;
    if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)) {
        maxDay = 31;
    } else if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
        maxDay = 31;
    } else if ((leapYearCheck = 0) && (month = 2)) {
        maxDay = 29;
    } else if ((leapYearCheck != 0) && (month = 2)) {
        maxDay = 28;
    }
    return maxDay;
}

function lessThan10(variable, variableOut) {
    if (Math.abs(variable) < 10) {
        variableOut = `0${variable}`;
    } else {
        variableOut = Math.abs(variable);
    }
    return variableOut;
}

CountDown();