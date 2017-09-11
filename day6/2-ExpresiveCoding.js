function areaCylinder(high, diam) {
    return double(areaCircle(diam)) + circumferenceOfCircle(diam) * high;
}

function areaCircle(diam) {
    return Math.PI * square(diameterToRadials(diam));
}

function circumferenceOfCircle(diam) {
    return Math.PI * diam;
}

function diameterToRadials(diam) {
    return diam / 2;
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}


console.log(areaCylinder(10, 20));
console.log(areaCylinder(10, 20));
console.log(areaCylinder(10, 20));

