const hello1 = function(){
    return 'Привіт JavaScript';
}

hello1();

const hello2 = function(name){
    console.log(`Привіт ${name}`);
}

hello2('Василь');

const mul = function(n, m){
    console.log(n + m);
    console.log(n - m);
    console.log(n / m);
    console.log(n * m);
}

mul(5, 5);

const myNewArrowFunction = (...args) =>{
    console.log(args);
}

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

const myAverageScore = (array) => {
    let total = 0;
    let average = 0;
    let score;
    for (const arr of array) {
        total += arr;
        average = total / 4;
    }
    if(average >= 91){
        score = 'My average score: A'
    }
    else if(average >= 81 && average <= 90){
        score = 'My average score: B'
    }
    else if(average >= 71 && average <= 80){
        score = 'My average score: C'
    }
    else if(average <= 70){
        score = 'My average score: D'
    }
    return score;
}

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));