// using while loop
let input='ViveKguptA';
let y=input.length-1;
let reversed = '';
do{
    reversed += input[y];
    y--;
}while(y>=0);


// using for loop
console.log(reversed);

let input1='Vivekguptaavenge';
console.log("input1",input1)
let reversedd='';
for(let i=1;input1.length-i>=0;i++){
    reversedd=reversedd+input1[input1.length-i];
   
}
console.log("this is ",reversedd);