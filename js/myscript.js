function mybirthday(){

    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    var date = document.getElementById("date");
    var date = new Date(document.getElementById("date").value);
    var dateday = date.getDay();

    var gender = document.akannames.gender;
    var day = weekdays[dateday];
    var valid = false; 

    if(date.value==""){
        alert("Please enter a valid date");
    }else{
        for(var i = 0;i<gender.length;i++){
            if(gender[i].checked){
                valid = true;
                break;
            }
        }
        if(valid){
            if(gender[i].value == "male"){
                alert("You were born on a "+day +" "+"Your Akan Name is " + maleName[dateday]);
            }else{
            if(gender[i].value == "female"){ 
                alert("You were born on a "+day+" "+"Your Akan Name is " + femaleName[dateday]);
            }
            }
        }else{
        alert("Please select gender");
    }    
}
}
