var select = document.getElementById("heure");//liste des créneaux

function init(){
    today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1);
    var yyyy = today.getFullYear();

    today =yyyy+'-'+mm+'-'+dd;

    
    document.getElementById("date").value=today; 
    document.getElementById("date").min=today;
    var maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 10);

    var maxDateString = maxDate.toISOString().split('T')[0];
    
    document.getElementById("date").max = maxDateString;}
            


function disableMondays() {
    var dateInput = document.getElementById('date');
    var currentDate = new Date(dateInput.value);
    
    if (currentDate.getDay() === 1) { 
        alert("Nous sommes fermés les lundis veuillez choisir une autre date s'il vous plaît.");
        dateInput.value = ''; 
    }
}
function cren() {
    var now = new Date();
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();
    for (var h = currentHour; h <= 23; h++) {
        for (var m = (h === currentHour) ? Math.ceil(currentMinute / 30) * 30 : 0; m < 60; m += 30) {
            if (!((h >= 14 && h < 18) || (h >= 23 && m>30 || h < 11) || (h === 11 && m < 30))){
                var hourString = (h < 10 ? '0' : '') + h;
                var minuteString = (m < 10 ? '0' : '') + m;
                var optionValue = hourString + ':' + minuteString;
                var optionText = hourString + ':' + minuteString;
                var option = document.createElement('option');
                option.value = optionValue;
                option.text = optionText;
                select.add(option);
            }
        }
    }
}


function newdat(){
    d=new Date();
   if(document.getElementById("date").value !=today) {
        remplirCreneaux()
   }
   else{
        select.innerHTML = "";
        cren();
   }

}

function remplirCreneaux() {
    select.innerHTML = "";
    ajouterCreneaux(select, 11, 30, 14, 0);
    ajouterCreneaux(select, 18, 30, 24, 0);
}

function ajouterCreneaux(select, heureDebut, minuteDebut, heureFin, minuteFin) {

    var dateDebut = new Date();
    var dateFin = new Date();

    dateDebut.setHours(heureDebut, minuteDebut);
    dateFin.setHours(heureFin, minuteFin);

    while (dateDebut < dateFin) {
        var option = document.createElement("option");
        var heure = dateDebut.getHours();
        var minute = dateDebut.getMinutes();

        minute = minute < 10 ? "0" + minute : minute;

        option.value = heure + ":" + minute;
        option.text = heure + ":" + minute;

        select.add(option);
        dateDebut.setMinutes(dateDebut.getMinutes() + 30);
    }
}

function istoday(){
    d=new Date();
   if(d.getHours()===23&& d.getMinutes()>29) {
        var dd = String(d.getDate()+1);
        var mm = String(d.getMonth() + 1);
        var yyyy = d.getFullYear();
        document.getElementById("date").min=yyyy+'-'+mm+'-'+dd;        
        document.getElementById("date").value=yyyy+'-'+mm+'-'+dd;     
        remplirCreneaux();   
   }
}

document.getElementById('date').addEventListener('change', disableMondays);
document.getElementById('date').addEventListener('change', newdat);
init()
cren();
istoday();


