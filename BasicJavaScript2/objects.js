//singleton

// Object.create ;


//object literals

const JsUser = {
    name: "Devaki",
    age :18,
    location : "Pune",
    email: "devaki@google.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);

JsUser.email = "deva@google.com";

console.log(JsUser["email"]);
// Object.freeze(JsUser); // Cannot change any elment in the object
console.log(JsUser);


JsUser.greeting = function()
{
    console.log("Hello JS user");
}


JsUser.greetingTwo = function()
{
    console.log(`Hello JS user ,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());