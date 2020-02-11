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