let array1=[4,5,45,54,4];
let array2=[4,6,7,8,15,5];
let array3=[];
let sum;
for(let i=0;i<array2.length;i++){
   sum=array1[i]+array2[i];
   array3.push(sum);
}
console.log("Ans is:"+array3);