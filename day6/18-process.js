process.stdin.resume();
process.stdin.setEncoding('utf8');



process.stdin.on('data',(chunk)=>{
    process.stdout.write('Data:..'+ chunk);
});

process.stdin.on('end',()=>{
    process.stdout.write('End:..');
});