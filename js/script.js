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