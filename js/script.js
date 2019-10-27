var century, year, month, date, dayOfweek, day;  //inputs
function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);

    function verify(){
    if(century >20){
        alert("Invalid century, enter the correct century");
        return false;
    }else if(year>100 ){
     alert("Inavlid year, enter the correct year");
     return false;
    }else if(month> 12){
        alert("Invalid month, enter the correct month");
        return false;
    }else if(date >31);{
        alert("Invalid date, enter the correct date")
    }
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
var daysOfweek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday"];
var maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames =["Akosua", "Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

//radio-gender function check
function checkGender(){
    var gender = document.getElementsByName("gender");
    if(gender[0].checked == true){
        var gender ="male";
    }else if(gender[1].checked == true){
        var gender ="female";
    }else{
        console.log("Checked");
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