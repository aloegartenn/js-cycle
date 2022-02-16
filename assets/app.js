let a = +prompt("введите число");
let flag = true;
for(let i = 2; i < a/2; i++ ){
    if(a % i == 0)   {
      
      flag = false;
      break;
    }
   
}
if (flag){
  alert(`${a} простое `);
}
else {
  alert(`${a}  составное  `);
}
