const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLogIn = false;
console.log(tinderUser);

const regularUser = {
  email: "abc@mail.com",
  fullName: {
    userFullName: {
      firstName: "Rahul",
      lastName: "Shinde",
    },
  },
};

console.log(regularUser.fullName);

const obj1 ={
    1:"a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

const obj6 = {...obj1, ...obj2}
console.log(obj6);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogIn'));


const course ={
    courseName : "JavaScript",
    price : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor} =course

console.log(courseInstructor)


