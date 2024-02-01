
/*
--------------for loop---------------
for(variable declaration; condition; increment/decrement)
{
    statement;
}
*/

// show the number from 1 to 10
for(let i=1; i<=10; i++)
{
    console.log(i);
}

//show the even number and odd number from 0 to 20

console.log("Show Even Number: ");
for(let i=0; i<=20; i=i+2)
{
    console.log(i);
}

console.log("Show Odd Number: ");

for(let i=1; i<=20; i=i+2)
{
    console.log(i);
}

// Another Process
console.log("\n");
console.log("Even Number");

for(let i=0; i<=20; i++)
{

    if(i%2==0)
    {
        // console.log('Even number: ', i);
        console.log(i);
    }

}
console.log("\n");
console.log("Odd Number");

for(let i=1; i<=20; i++)
{

    if(i%2!=0)
    {
        console.log(i);
    }

}

/*
*
** 100+200+300+400+500 find the sum using for loop

*/

console.log("\n");

let sum=0;

for(let i=100; i<=500; i=i+100)

{

    sum=sum+i;
  
}

console.log("The Sum Is: ", sum);