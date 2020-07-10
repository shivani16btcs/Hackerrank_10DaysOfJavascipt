function getDayName(dateString) {
    let dayName;
    // Write your code here
  let date= new Date(dateString)
    let day=date.getDay();
    switch(day){
        case 0:
        dayName="Sunday"
        break;
        case 1:
        dayName="Monday"
        break;
        case 2:
       dayName="Tuesday"
        break;
        case 3:
          dayName="Wednesday"
        break;
        case 4:
        dayName="Thursday"
        break;
        case 5:
        dayName="Friday"
        break;
        case 6:
        dayName="Saturday"
        break;
       
       
    }




//     if((date_seprated[2]%4==0)&&((date_seprated[2]%100==0)?date_seprated[2]%400==0:true)){      (date_seprated[2]/4)

// }
    return dayName;
}

