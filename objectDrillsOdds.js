'use strict';
//object intializers and methods #1
let loaf={
  flour: 300,
  water: 210,
};
console.log(loaf);
function addProperty(obj){
  return obj.hydration = obj.water / obj.flour * 100;
}
console.log(addProperty(loaf));

//arrays in objects #3
let obj={
  meals: ['breakfast', 'second breakfast', 'elevenses', 
    'lunch', 'afternoon tea', 'dinner', 'supper'],
};
console.log(obj.meals[3]);

//arrays of objects #4
let obj1={
  name: 'John',
  jobTitle: 'engineer',
};
let obj2={
  name: 'Mary',
  jobTitle: 'waitress',
};
let obj3={
  name: 'Sue',
  jobTitle: 'doctor',
};
let arr=[obj1,obj2,obj3];

for (let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

//Properties that aren't there #5
obj1.boss='Sue';
obj2.boss='Sue';

arr.forEach(arr => {
  if (arr.boss){
    console.log(`${arr.name} the ${arr.jobTitle} reports to ${arr.boss}`);
  } else {
    console.log(`${arr.name} the ${arr.jobTitle} doesn't report to anyone.`);
  }
});

//Factory Functions with LOTR #7
function createCharacter(name, nickname, race, origin, attack, defense){
  const obj = {
    name: `${name}`,
    nickname: `${nickname}`,
    race: `${race}`,
    origin: `${origin}`,
    attack: `${attack}`,
    defense: `${defense}`,
    describe: `${name} is a ${race} from ${origin}.`
    evaluateFight: 
  };
}