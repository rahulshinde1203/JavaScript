//Singleton

//object literals

const mySum = Symbol("key1")
const JsUser = {
    name: "Rahul",
    age : 23,
    email : "rahul@gmail.com",
    [mySum]: "mykey1",
    isLogin : false,
    lastLogIn : ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["name"]);

JsUser.email = "rahul@mail.com"
Object.freeze(JsUser)