//What vs How
//First class function, Higher Order function, Returning functions, Curring, Pure Functions, Function Composition
//Side effect, Immutability
const users = [
    {
        id: 10,
        name: 'Prasanna',
        active:true
    },
    {
        id: 11,
        name: 'Nagabhushana',
        active:true
    },
    {
        id: 12,
        name: 'Gundmi',
        active:false
    }

];

//find user with id 11
console.log(users.find((user)=>user.id===11));

//OR
const byId = (id)=>{
    return (item)=>{
        return item.id === id;
    }
};
//Curring
console.log(users.find(byId(11)));

console.log(users.find(i=>byId(11)(i)));

const isActive = (user)=> user.active === true;
const selectName = (user) => user.name;
console.log(users.filter(isActive).map(selectName));