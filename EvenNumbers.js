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
function probSix() {
    function decode(message) {
        const firstLetter = message.charAt(0);
        let result = ' ';
        let checker = {
            'a' : message.charAt(1),
            'b' : message.charAt(2),
            'c' : message.charAt(3),
            'd' : message.charAt(4)
        }
    
        for (let i = 0; i < Object.values(checker).length; i++){
            if(firstLetter === Object.keys(checker)[i]) {
                return (Object.values(checker)[i]);
            }
            
        }
        return result;
    }
    
    function decodeWords(wholeMessage) {
        let decoded = '';
        let words = wholeMessage.split(' ');
    
        for(let i = 0; i <= words.length - 1; i++) {
            decoded += decode(words[i]);
        }
    
        return decoded;
    }
    
    console.log(decode('cycle'));
    
    console.log(decodeWords('craft block argon meter bells brown croon droop'));
}

probSix();

//problem 8
function probEight() {
    const HEROES = [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ];

    function findOne(arr, query) {
        if (Object.keys(query).length === 1) {
            for(let i = 0; i < Object.keys(arr).length - 1; i++) {
                for(let j = 0; j < Object.keys(arr[i]).length; j++) {
                    if(Object.values(query) == arr[i][Object.keys(arr[i])[j]]) {
                        return arr[i];
                    }
                }
            }
    
            return null;
        } else if (Object.keys(query).length > 1) {
            for(let i = 0; i < Object.keys(arr).length - 1; i++) {
                for(let j = 0; j < Object.keys(arr[i]).length; j++) {
                    for(let k = 0; k < Object.keys(query).length - 1; k++) {
                        if(Object.values(query)[k] == arr[i][Object.keys(arr[i])[j]]) {
                            return arr[i];
                        }
                    }
                }
            }
    
            return null;
        }
    }

    console.log(findOne(HEROES, { id: 10 }));
    console.log(findOne(HEROES, { id: 1 }));
    console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
}

probEight();

//Problem 8a 

function probEightA() {
    const Database = {
        store: {
          heroes: [
            { id: 1, name: 'Captain America', squad: 'Avengers' },
            { id: 2, name: 'Iron Man', squad: 'Avengers' },
            { id: 3, name: 'Spiderman', squad: 'Avengers' },
            { id: 4, name: 'Superman', squad: 'Justice League' },
            { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
            { id: 6, name: 'Aquaman', squad: 'Justice League' },
            { id: 7, name: 'Hulk', squad: 'Avengers' },
          ]
        },
        findOne : function(tol) {
            this.tol = tol;

            if (Object.keys(this.tol).length === 1) {
                for(let i = 0; i < Object.keys(this.store.heroes).length - 1; i++) {
                    for(let j = 0; j < Object.keys(this.store.heroes[i]).length; j++) {
                        if(Object.values(this.tol) == this.store.heroes[i][Object.keys(this.store.heroes[i])[j]]) {
                            return this.store.heroes[i];
                        }
                    }
                }

            } else if (Object.keys(this.tol).length > 1) {
                for(let i = 0; i < Object.keys(this.store.heroes).length - 1; i++) {
                    for(let j = 0; j < Object.keys(this.store.heroes[i]).length; j++) {
                        for(let k = 0; k < Object.keys(query).length - 1; k++) {
                            if(Object.values(query)[k] == this.store.heroes[i][Object.keys(this.store.heroes[i])[j]]) {
                                return this.store.heroes[i];
                            }
                        }
                    }
                }
        
                return null;
            }
        }
      };

    console.log(Database.findOne({ id: 2 }));

}

probEightA();


