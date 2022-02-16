let a = +prompt("введите число")
for(let i = 3; i < a; i++ ){
    if(((a % i) == 0)) {
      alert(`${a} простое`)
    }
   if((a % i) !=0){
        alert(`${a} не простое`)
    }
}
