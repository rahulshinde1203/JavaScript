const user = {
  username: "Rahul",
  price: 999,

  welcomeMsg: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },

};

user.welcomeMsg()
user.username="Sam"
user.welcomeMsg()

console.log(this);

function coffee(){
    console.log(this);
}
coffee()


const chai = ()=>{
    let username = "Rahul"
    console.log(this);
}

chai()


//Arrow Function 

const addTwo = (num1, num2)=>{
    return num1 + num2
}
console.log(addTwo(23,34));

const addtwo = (num1, num2)=> num1 + num2
console.log(addtwo(2,2));

const objrtn = ()=>({username : "Rahul"})
console.log(objrtn());


