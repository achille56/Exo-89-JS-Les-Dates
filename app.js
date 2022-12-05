// 1
let timesTamp2 = document.getElementById("timestamp");
let todayDate = Date.now();
    console.log(" date du jour en TimeStamp " + todayDate);
    timesTamp2.innerHTML = todayDate.toString();

// 2
let localDate2 = document.getElementById("localDate");
let todayDate2 = new Date();
    console.log(" date du jour " + todayDate2);
    localDate2.innerHTML = todayDate2.toLocaleDateString();

// 3
let localTime2 = document.getElementById("localTime");
let todayHour = new Date();
    localTime2.innerHTML = todayHour.toLocaleTimeString();

// 4
let newDate2 = document.getElementById("newDate");
let today = new Date();
let tomorrow = new Date();
    tomorrow.setDate(today.getDate() +2 );
    tomorrow.setHours(today.getHours() +6 );
    newDate2.innerHTML = tomorrow.toLocaleString();

// 5 Les différents intervalles de temps
let dateAjout = document.getElementById("dateAvecAjout");
let interval = today.getTime() - tomorrow.getTime();

let days = Math.floor(interval/ 1000 / 60 / 60 /24);
let hours = Math.floor(interval /1000 / 60 / 60);
let minutes = Math.floor(interval /1000 / 60 );
let seconds = Math.floor(interval /1000 );

dateAjout.innerHTML = "Il y a une différence de : <br>";
dateAjout.innerHTML += days + " jours ou ";
dateAjout.innerHTML += hours + " heurs ou ";
dateAjout.innerHTML += minutes + " minutes ou ";
dateAjout.innerHTML += seconds + " secondes ";








