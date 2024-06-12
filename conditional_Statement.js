
let temp = 1;

if(temp < 0){
    console.log('Its Freezing');
 } else if(0< temp< 15){
    console.log('Its cold');
} else if(16< temp< 25){
    console.log('Its mild');
}else if(temp>25){
    console.log('Its warm');
}
    
// switch Statement

let temp2 = -1;
switch(temp2 !== undefined){
    case temp2< 0:
      console.log('Its Freezing');
    break;

    case 0< temp< 15:
        console.log('Its cold');
    break;

    case 16< temp< 25:
        console.log('Its mild');
    break;

    default :
        console.log('Its warm');
    break;

}

// Divisibility check

let num = 7;

if( num % 2 === 0 && num %3 === 0){
    console.log('Divisable by both');
}else if(num % 2 === 0){
    console.log('Divisable by 2');
}else if( num %3 ===0){
    console.log('Divisable by 3');
}else {
    console.log('Number is not divisable by 2 or 3');
}

let dnum = 0;

switch(dnum !== 0){
    case dnum % 2 === 0 && dnum %3 === 0:
        console.log('divisible by both ')
    break;
    
    case dnum % 2 === 0:
        console.log('Divisable by 2')
    break;
    
    case dnum %3 ===0:
        console.log('Divisable by 3')
    break;
    default:
        console.log('Number not divisable by 2 or 3')    
}

// For loops

for( i = 0; i <= 10; i++){
    console.log(i);
}

for(i = 0; i <= 20; i++){
    if(i %2=== 0){
        console.log(i);
    }
}

let summ = 0;
for(i = 0; i <= 100; i++){
     summ += i;
     console.log(summ);
}

const numbers = [1,2,3,4,5];

for(i = 1; i< numbers.length; i++){
    console.log(i);
}

const nummber = [3,7,2,5,10,6];
let max = Math.max(...nummber);
console.log(''+max+' Is a maximum number in the Array ' + nummber)
