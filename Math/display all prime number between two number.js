 // program to print prime number between the two numbers
 let Isprime=true;
 const lowerName=5;
 const higherName=15;

 console.log(`The prime numbers between ${lowerName} and ${higherName} are:`);

 // looping from lowernumber to highernumber
 for(let i=lowerName;i<=higherName;i++){

     for(let j=2;j<lowerName;j++){
         if(lowerName%j==0){
            console.log(`this number ${lowerName} is not a prime number`);
            break;

             
         }else{
             console.log(`this number ${lowerName} is a prime number`);
         }
     }

     // if(Isprime){
     //     console.log(`this ${lowerName} is prime number`);
     // }
     // else{
     //     console.log(`this ${lowerName} is not a prime number`);
     // }
 }