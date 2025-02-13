function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

//Solution
function greeterArray(persons: string[]): string {
    return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user));
//Another Solution
for (let i = 0; i < user.length; i++) {
    console.log(greeter(user[i]));
}