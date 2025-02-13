function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will cause an error because the function expects a single string argument, not an array of strings. 
