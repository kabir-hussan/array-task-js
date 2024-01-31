// Array Task Module-17.5

//1. Array Declaration

const fruits=['mango', 'apple', 'lemon', 'banana', 'orange'];
console.log(fruits);
console.log(fruits[2]);
fruits[1]='jambura';
console.log(fruits[1]);
console.log(fruits);


// 2. Add(push) or Remove(pop) Elements from array
console.log('Add Or Remove Array Item')

const touristPlace=['Jafflong', 'Coxsbazar', 'Sajek'];
console.log(touristPlace);
touristPlace.push('Niladri');
console.log(touristPlace);
touristPlace.push('Shimul Bagaan', 'Tanguar Haor');
console.log(touristPlace);
touristPlace.pop();
console.log(touristPlace);

// 3. Checking Array Membership with includes

console.log('Checking an item contains in the array');

const books=['javascript', 'python', 'css', 'c++', 'react', 'mongodb'];
console.log(books.includes('python'));
if(books.includes('python'))
{
    console.log('You can learn python');
}

else{
    console.log("You are not allowed for python");
}

// Checking if its an array or not?

console.log('Checking Array or Not');
const arrayList=['cse', 'eee', 'ce', 'me'];
const notArray=20;
const age=[20, 30, 40];
const numSet=[1, 2, 3, 4];

console.log(Array.isArray(arrayList));
if(Array.isArray(arrayList)){
    console.log('Oh! Its an array');
}
else
{
    console.log('Oh! Its not an array');
}
console.log(Array.isArray(notArray));
console.log(Array.isArray(age));
if(Array.isArray(age))
{
    console.log('Oh! Its another array');
}
else{
    console.log('Oh! Its not an array bhaiya');
}
console.log(Array.isArray(numSet));

// 5. concatenation of multiple array

console.log('Array Concatenation');
const firstArray=['meta', 'google', 'youtube'];
const secondArray=['insta', 'linkedin'];
console.log(firstArray.concat(secondArray));
