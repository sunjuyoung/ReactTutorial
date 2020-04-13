var myArgs = process.argv;

console.log(myArgs[2]);

if(myArgs[2] === '1'){
    console.log("실패");
}else{
    console.log("성공");
}

console.log("끝");