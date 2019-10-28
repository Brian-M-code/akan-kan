function getInput() {
    var century, year, month, date;  //inputs
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);

    if((month <1 || month >12) || (month == 2 &&date>29)){
        alert("Inavlid Month");
    } else if(date <1 || date >31){
        alert("Inavlid Date !!");
    } else{
        var dayOfweek = Math.trunc(((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7) - 1);
    }
    //var daysOfweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   

    //radio-gender function check


    if (document.getElementById("male").checked == true) {
        if (dayOfweek == 0) {
            alert("The day is on a sunday. Your akan name is " + maleNames[0]);
        }
        else if (dayOfweek == 1) {
            alert("The day is on a monday. Your akan name is " + maleNames[1]);
        }
        else if (dayOfweek == 2) {
            alert("The day is on a tuesday." + " " + "Your akan name is " + maleNames[2]);
        }
        else if (dayOfweek == 3) {
            alert("The day is on a wednesday. Your akan name is " + maleNames[3]);
        }
        else if (dayOfweek == 4) {
            alert("The day is on a thursday. Your akan name is " + maleNames[4]);
        }
        else if (dayOfweek == 5) {
            alert("The day is on a friday. Your akan name is " + maleNames[5]);
        }
        else if (dayOfweek == 6) {
            alert("The day is on a saturday. Your akan name is " + maleNames[6]);
        }
        else {
            alert("Start a fresh");
        }
    }

    if (document.getElementById("female").checked == true) {
        if (dayOfweek == 0) {
            alert("The day is on a sunday.Your akan name is" + femaleNames[0]);
        }
        else if (dayOfweek == 1) {
            alert("The day is on a monday.Your akan name is" + femaleNames[1]);
        }
        else if (dayOfweek == 2) {
            alert("The day is on a tuesday.Your akan name is" + femaleNames[2]);
        }
        else if (dayOfweek == 3) {
            alert("The day is on a wednesday.Your akan name is" + femaleNames[3]);
        }
        else if (dayOfweek == 4) {
            alert("The day is on a thursday. Your akan name is" + femaleNames[4]);
        }
        else if (dayOfweek == 5) {
            alert("The day is on a friday. Your akan name is" + femaleNames[5]);
        }
        else if (dayOfweek == 6) {
            alert("The day is on a saturday. Your akan name" + femaleNames[6]);
        }
        else {
            alert("Try filling the form again");
        }
    }
}




