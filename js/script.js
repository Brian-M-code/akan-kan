var century, year, month, date, dayOfweek, day;  //inputs
function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);

    if(century == ""){
        alert("Enter the correct century");
        return false;
    }else if(year == ""){
     alert("Enter the correct year");
     return false;
    }else if(month ==""){
        alert("Enter the correct month");
        return false;
    }else if(date == "");{
        alert("Enter the correct date")
    }
    function getDay(){
        getInput();
        dayOfweek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
        console.log(dayOfWeek);
        return (Math.floor(dayOfweek));
        if (dayOfweek < 0){
            dayOfweek = dayOfweek * -1;
        }else if (dayOfweek > 0){
            return dayOfweek;
        }
    }
    function checkDayOfweek(){
        day = calculateDay();
            checkGender();
            console.log("Runs");
    }
    

}


//function verify(){
 //if(dayOfBirth<1|| dayOfBirth>31||dayOfBirth===""){
  //    alert("Invalid day of birth!");
  //   } else if (month<1||month>12||month===""){
   //   alert("Invalid month!");
   //  } else if(year<0||year>99||year===""){
   //    alert("Invalid year!");
   //  } else{
   //    return false;