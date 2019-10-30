function getInput() {
    var century, year, month, date;  
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);

    var maleNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


    var femaleNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama",];

    var day = parseInt(((century/ 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
    day = Math.round(day);


    if (month < 1 || month > 12 || month == 2 && date > 29) {
        alert("INVALID MONTH!!!");
    }
    else if (date < 1 || date > 31) {
        alert("INVALID DAY!!!");
    }

    if (document.getElementById("male").checked) {
        alert("Your Akan name is " + maleNames[day -1]);
    }
    else if (document.getElementById("female").checked) {
        alert("Your Akan name is " + femaleNames[day -1]);
    }
}
