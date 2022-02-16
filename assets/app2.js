let flag = true;
for (let i = 3; i < 1000; i++ ){
    flag = true;
    for(let j = 2; j < i; j++){
        if((i % j) == 0){
            flag = false;
            break;
        }
    }
    if(flag) {
        console.log(`${i}`)
    }
}
a = 3/2
