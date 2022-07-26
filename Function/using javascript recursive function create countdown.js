
// Recursion=>it is a  process of calling itself.A function that calls itself is called a recursive function

// function recurse(){
    //function code
    // recurse();
    // function code
// }



function countdown(number){

    console.log(number);

    let NewNumber=number-1;

   if(NewNumber >0){
    countdown(NewNumber);
   }
}

countdown(8);