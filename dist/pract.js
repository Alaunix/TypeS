"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Тип аннотации
let id = 5;
let company = "Corporation";
let isPublished = true;
let tags = ["TypeScript", "JavaScript"];
let x = 10;
console.log({ id, company, isPublished, tags, x });
const user = {
    id: 1,
    name: "Anna",
    greet: (message) => console.log(message),
};
console.log(user.age === undefined ? "No age of the user" : user.age);
user.greet("Hello from User.greet()");
// Типы функций: параметры и return type
function concatValues(a, b) {
    return a + " " + b;
}
console.log(concatValues("hello", "world"));
function printId(value) {
    console.log(`ID is equal to ${value}`);
}
printId("ID 123");
printId(123);
function signContract(employee) {
    console.log(`Contract signed by ${employee.name}, email: ${employee.email}, creditScore: ${employee.creditScore}`);
}
signContract({
    name: "Anna",
    creditScore: 800,
    id: 23,
    email: "anna@gmail.com",
});
// Enum
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "no_user";
    LoginError["WrongCredentials"] = "wrong_credentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
function printLoginErrorMessage(error) {
    switch (error) {
        case LoginError.Unauthorized:
            console.log("User not authorized");
            return;
        case LoginError.NoUser:
            console.log("No user was found with that username");
            return;
        case LoginError.WrongCredentials:
            console.log("Wrong credentials");
            return;
        default:
            console.log("Internal error");
            return;
    }
}
printLoginErrorMessage(LoginError.Unauthorized);
printLoginErrorMessage(LoginError.NoUser);
printLoginErrorMessage(LoginError.WrongCredentials);
printLoginErrorMessage(LoginError.Internal);
// Generics
class StorageContainer {
    contents = [];
    addItem(item) {
        this.contents.push(item);
    }
    getItem(index) {
        return this.contents[index];
    }
}
const usernames = new StorageContainer();
usernames.addItem("Anna");
usernames.addItem("Echo BR");
console.log(usernames.getItem(0));
const friendCounts = new StorageContainer();
friendCounts.addItem(23);
friendCounts.addItem(56);
console.log(friendCounts.getItem(1));
const emp = {
    employeeId: 1,
    name: "Anna",
    startDate: new Date(),
    department: "Finance",
};
emp.name = "Jessica";
// emp.employeeId = 2; // нельзя: employeeId is readonly
console.log(emp);
//# sourceMappingURL=pract.js.map