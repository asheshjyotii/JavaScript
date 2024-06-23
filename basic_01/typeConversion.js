let score = "33";
console.log(typeof score);
score = Number(score);
console.log(typeof score);


// javascript common pitfall
scoreError = "33sge" ;
typeOfScoreBefore = typeof score;
score = Number(score);
typeOfScoreAfter = typeof score;
contentOfScoreAfter = score;
console.table ([typeOfScoreBefore,typeOfScoreAfter]);

// integer to string
name = 5;
console.log(typeof name);
name = String(name);
console.log(typeof name);
console.log(name);

// Boolean to integer
boolean = true;
console.log(typeof boolean)
boolean = Number(boolean)
console.log(typeof boolean)
console.log(boolean)

//
console.log(2+true)