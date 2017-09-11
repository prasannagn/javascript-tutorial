//Generator

daysOfWeek = function *() {
    yield 'Sunday';
    yield 'Monday';
    yield 'Tuesday';
    yield 'Wednesday';
    yield 'Thursday';
    yield 'Friday';
    yield 'Saturday';
};


let daysOfWeekItr = daysOfWeek();

for(let day of daysOfWeekItr){
    console.log(day);
}

daysOfWeekItr = daysOfWeek();

print(daysOfWeekItr);

function print(iterable) {
    const next = iterable.next();
    if (!next.done) {
        console.log(next.value);
        print(iterable);
    }
}
