console.log("Hi THESG!");

// Counting the elements of an array
const input1=[['a','b','c'],
             ['d','e','f'],
             ['g','h','i'],];

const input2=[['a','b','c'],
             ['c','d','f'],
             ['d','f','g'],]

const count = (s) => {
    const obj={};
    for(const char of s){
        obj[char] = (obj[char] || 0) + 1;
    }
    return obj;
}

console.log(count(input2.flat()));

//High performing students
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] },
  ];

