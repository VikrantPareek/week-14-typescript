// To define type of an object
let user: {
  name: string;
  age: number;
} = {
  name: "Vinay",
  age: 20,
};

// To define type of object in an function
function abc(user: { name: string; age: number }): void {
  console.log("Hello " + user.name);
}

// To define type of a function which returns nothing
function random(): void {
  console.log("random");
}

// To define type of a function which returns a function which returns nothing
function random2(): () => void {
  return () => {
    console.log("Random2");
  };
}

// This is how we can define interfaces
interface demoInterface {
    name: string,
    age: number,
    occupation: string
}

// Union in Types
type unionType = string | number

let a: unionType = 5
let b: unionType = "String"

// Intersection in Types
interface Employee {
    name: string,
    joiningDate: string
}

interface Manager {
    name: string,
    department: string
}

type TeamLead = Manager & Employee

let teamLead: TeamLead = {
    name: "Vinay",
    joiningDate: "02 May",
    department: "Random"
}