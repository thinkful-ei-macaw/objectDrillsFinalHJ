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
    nickname  : `${nickname}`,
    race  : `${race}`,
    origin  : `${origin}`,
    attack  : `${attack}`,
    defense : `${defense}`,
    describe  : `${name} is a ${race} from ${origin}.`,
    evaluateFight : function(opp) {

      let myAttack = `${this.attack}`;
      let oppDefense = `${opp.defense}`;

      let myDefense = `${this.defense}`;
      let oppAttack = `${opp.attack}`;

      let damage = myAttack > oppDefense ? myAttack - oppDefense : 0;
      let defense = myDefense < oppAttack ? oppAttack - myDefense : 0;

      

      return `Your opponent takes ${damage} damage and you receive ${defense} damage`;
    }
  };

  return obj;
}

const Gan = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const Bil = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
const Fro = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const Ara = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
const Leg = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);

const characters = [Gan, Bil, Fro, Ara, Leg];

const Arwen = createCharacter('Arwen Undomiel is a Half-Elf of Rivendell', 'arwen', 'Half-elf', 'Woodland Realm', 5, 8)

characters.push(Arwen);

console.log(characters.find(name => name.nickname === 'aragorn')); //retrive aragon from characters
console.log(characters.find(name => name.nickname === 'aragorn').describe); //calling describe method after retrieving aragon from charaters

const hobbit = characters.filter(race => race.race === 'Hobbit');

hobbit.forEach(element => console.log(element)); //two objects which contain characters with race: hobbit

const attackOverFive = characters.filter(atk => atk.attack > 5);

attackOverFive.forEach(element => console.log(element)); //three objects which contain characters with attack over 5

Gan.weapon = 'wizard staff';
Bil.weapon = 'Ring';
Fro.weapon = 'String and Barrow Blae';
Ara.weapon = 'Anduril';
Leg.weapon = 'Bow and Arrow';
Arwen.weapon = 'Hadhafang';

Gan.describe = `${Gan.name} is a ${Gan.race} from ${Gan.origin} who uses a ${Gan.weapon}`;
Bil.describe = `${Bil.name} is a ${Bil.race} from ${Bil.origin} who uses a ${Bil.weapon}`;
Fro.describe = `${Fro.name} is a ${Fro.race} from ${Fro.origin} who uses a ${Fro.weapon}`;
Ara.describe = `${Ara.name} is a ${Ara.race} from ${Ara.origin} who uses a ${Ara.weapon}`;
Leg.describe = `${Leg.name} is a ${Leg.race} from ${Leg.origin} who uses a ${Leg.weapon}`;
Arwen.describe = `${Arwen.name} is a ${Arwen.race} from ${Arwen.origin} who uses a ${Arwen.weapon}`;

console.log(Gan.describe);
console.log(Bil.describe);
console.log(Fro.describe);
console.log(Ara.describe);
console.log(Leg.describe);
console.log(Arwen.describe);