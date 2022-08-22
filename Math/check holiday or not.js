

// find holiday using switch case

let country='usadf';
switch(country){
    case 'usa':
        console.log("this is usa");
        break;
    case 'india':
        console.log("this is india");
        break;
    case 'england':
        console.log("this is england");
    default:
    console.log("you have to write right input");
}


// check holiday or not
let days='monday';
switch (days){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log("today is not holiday");
        break;
    case 'saturday':
    case 'sunday':
        console.log("today is holiday");
}