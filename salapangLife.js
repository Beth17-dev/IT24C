// Variables

console.log("My Activity in Life JavaScript");

let fullname = "April Beth P. Salapang";
let course = "Bachelor of Science in Information Technology";
let yearlevel = "2nd year";

console.log("Student Name: " + fullname + "\nCourse: " + course + "\nYear Level: " + yearlevel);

// Operators

console.log("My Operators Daily Routine");

let hoursofsleep = 7;
let hoursofstudy = 3;

console.log("Total Hours of Sleep: " + hoursofsleep + "\nTotal Hours of Study: " + hoursofstudy);

// Conditions

let studyhours = 3;

if(studyhours > 2){
    console.log("Great! You studied enough today.");
}else{
    console.log("You need to study more.");


// Loops

let mysubjectthissem = [
    "Data Structures & Algorithm", 
    "OOP", 
    "Fundamentals of Networking", 
    "Elective 1", 
    "Event-Driven", 
    "Multimedia System", 
    "Contemporary World", 
    "Dance", 
    "Critical Literacy", 
    "RSS"
];

console.log("List of my Subject in this Sem:");

for (let i=0;i<mysubjectthissem.length;i++){
    console.log(mysubjectthissem[i]);
}

//Functions

function studentSummary(){
    let name = "April Beth Salapang";
    let yearlevel = "2nd year";
    let course = "Bachelor of Science in Information Technology";

    console.log("Hello, My name is " + name + "," + yearlevel + " from " + course);
    

}
 
studentSummary();

}
