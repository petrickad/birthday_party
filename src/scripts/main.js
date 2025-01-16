AOS.init();

const birthdayDate = new Date("Sep 19, 2025 00:00:00");
const timeStampBirthday = birthdayDate.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const actualTimeStemp = now.getTime();

    const distanceBirthday = timeStampBirthday - actualTimeStemp;

    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minuteMs = 1000 * 60;

    const daysBirthday = Math.floor(distanceBirthday / daysMs);
    const hoursBirthday = Math.floor((distanceBirthday % daysMs) / hoursMs);
    const minutesBirthday = Math.floor((distanceBirthday % hoursMs) / minuteMs);
    const secondsBirthday = Math.floor((distanceBirthday % minuteMs) / 1000);

    console.log(daysBirthday);
    console.log(hoursBirthday);
    console.log(minutesBirthday);
    console.log(secondsBirthday);

    document.getElementById('timeCount').innerHTML = `Faltam <br> ${daysBirthday}d ${hoursBirthday}h ${minutesBirthday}m ${secondsBirthday}s`;

    if (distanceBirthday < 0) {
        clearInterval(countHours);
        document.getElementById('timeCount').innerHTML = 'Já começou, ou finalizou! <br> Nos vemos ano que vem.';
    }
}, 1000);