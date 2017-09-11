//Imaginary DOM
let document = {
    querySelector: (clazz)=> {
        switch (clazz){
            case '.height' : return getRandomArbitrary(1,100);
            case '.diameter' : return getRandomArbitrary(1,100);
        }
    }
};


function impureGetDimension() {
    let height = document.querySelector('.height');
    let diameter = document.querySelector('.diameter');
    if(!height || !diameter){
        return null;
    }
    return [height, diameter];
}
//Test
console.log(impureGetDimension());
console.log(impureGetDimension());//same method call different output


function pureGetDimension() {
    return (heightSel, diameterSel)=> {
        let height = document.querySelector(heightSel);
        let diameter = document.querySelector(diameterSel);
        if(!height || !diameter){
            return void (0);
        }
        return [height, diameter];
    }
}
//Test
console.log(pureGetDimension('.height','.diameter'));
console.log(pureGetDimension('.height','.diameter'));//same method call same output









function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
