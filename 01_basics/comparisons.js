console.log("2" > 3)  // JS convert string into number itself


console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)


console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)



console.log("2" === 2)   // it checks for value and datatype too

/* 
An equality check(==) and comparisons(>=, <, >, <=) work differently
Comparisons convert null to a number treating as zero
Thats why null > 0 is false and null >= 0 is true
*/


