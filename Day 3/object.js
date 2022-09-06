const student = {
    name: "Riley",
    shouldBuildProjects: true,
    age: 56,
    introduce: function (){
       return 'I am $(this.name)'
    },
    motivate: function(reasonForCoding){
        return 'I am learning to Code to ${reasonForCoding}';
    },
};

const filteredWord = "name";

console.log("Dot Notation ", student.name);
console.log("Bracket Notation ", student["name"]);
console.log("Dot Notation With Variable ", student.filteredWord);
console.log("Bracket Notation With Variable ", student[filteredWord]);

console.log("Method call: ", student.introduce());

