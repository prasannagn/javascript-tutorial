//Request replay

const getEven = (i, callback)=>{
    if(+i%2 ==0){
         callback(null,+i);
    }
    callback( new Error('Its Odd'));
};

getEven(10,(error,result)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log("Its even!");
    }
});

getEven(11,(error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Its even!");
    }
});
