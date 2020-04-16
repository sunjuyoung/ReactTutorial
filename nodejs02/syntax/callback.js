

var a = function(){
    console.log('A');

}


slowFunc=(callback)=>{
    return callback();
}

slowFunc(a);