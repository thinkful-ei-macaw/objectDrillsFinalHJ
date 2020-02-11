//This will cover even numbers from the drill

//Problem 2
function probTwo() {
    const fiveProp = {
        foo : '2',
        bar : 5,
        fum : [2,3],
        quux : true,
        spam : 2.3
    }

    for (const element in fiveProp) {
        console.log(`${element}: ${fiveProp[element]}`);
    }
}

//probTwo();

//problem 4

function probFour() {
    function Person(name, jobTitle) {
        this.name = name;
        this.jobTitle = jobTitle;
    }
    const john = new Person('John', 'Pilot');
    const tina = new Person('Tina', 'Engineer');
    const tom = new Person('Tom', 'CEO');

    const Arr = [john, tina, tom];

    Arr.forEach(element => console.log(`${element.name}: ${element.jobTitle}`));
}

probFour();

//problem 6

//problem 8