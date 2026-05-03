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
