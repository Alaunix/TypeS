// 1. ПРОСТЫЕ ТИПЫ
// Тут мы просто говорим компилятору, что в переменной будет только число, строка или массив
let id: number = 5;
let company: string = "Corporation";
let isPublished: boolean = true;
let tags: string[] = ["TypeScript", "JavaScript"];

// any — это "затычка", сюда можно засунуть вообще что угодно (как в обычном JS)
let x: any = 10;

console.log({ id, company, isPublished, tags, x });

// 2. ИНТЕРФЕЙСЫ (ШАБЛОНЫ ОБЪЕКТОВ)
// Создаем правило: как должен выглядеть объект User
interface User {
  id: number;
  name: string;
  age?: number; // Знак вопроса значит, что возраст можно не указывать
  greet: (message: string) => void; // void — значит функция ничего не возвращает
}

const user: User = {
  id: 1,
  name: "Anna",
  greet: (message: string) => console.log(message),
};

// Проверяем, написали мы возраст или нет
console.log(user.age === undefined ? "No age of the user" : user.age);
user.greet("Hello from User.greet()");

// 3. ФУНКЦИИ
// Указываем, что на входе две строки, и на выходе тоже должна быть строка
function concatValues(a: string, b: string): string {
  return a + " " + b;
}

console.log(concatValues("hello", "world"));

// 4. ТИП "ИЛИ" (UNION)
// Создаем свой тип: ID может быть либо строчкой, либо числом
type Id = string | number;

function printId(value: Id): void {
  console.log(`ID is equal to ${value}`);
}

printId("ID 123");
printId(123);

// 5. СКЛЕЙКА ТИПОВ (INTERSECTION)
// Соединяем два интерфейса в один общий тип Employee
interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: number;
  email: string;
}

// Теперь Employee обязан иметь поля из обоих списков сразу
type Employee = BusinessPartner & UserIdentity;

function signContract(employee: Employee): void {
  console.log(
    `Contract signed by ${employee.name}, email: ${employee.email}, creditScore: ${employee.creditScore}`
  );
}

signContract({
  name: "Anna",
  creditScore: 800,
  id: 23,
  email: "anna@gmail.com",
});

// 6. ПЕРЕЧИСЛЕНИЯ (ENUM)
// Чтобы не писать ошибки вручную буквами, создаем список понятных названий
enum LoginError {
  Unauthorized = "unauthorized",
  NoUser = "no_user",
  WrongCredentials = "wrong_credentials",
  Internal = "internal",
}

function printLoginErrorMessage(error: LoginError): void {
  switch (error) {
    case LoginError.Unauthorized:
      console.log("User not authorized");
      return;
    case LoginError.NoUser:
      console.log("No user was found with that username");
      return;
    default:
      console.log("Internal error");
      return;
  }
}

printLoginErrorMessage(LoginError.Unauthorized);

// 7. ДЖЕНЕРИКИ (УНИВЕРСАЛЬНЫЕ КЛАССЫ)
// Буква <T> — это как пустая коробка. Какой тип вставим при создании, с таким и будет работать.
class StorageContainer<T> {
  private contents: T[] = []; // Массив с типом, который мы выберем позже

  addItem(item: T): void {
    this.contents.push(item);
  }

  getItem(index: number): T | undefined {
    return this.contents[index];
  }
}

// Делаем контейнер для имен (строки)
const usernames = new StorageContainer<string>();
usernames.addItem("Anna");
console.log(usernames.getItem(0));

// Делаем контейнер для цифр
const friendCounts = new StorageContainer<number>();
friendCounts.addItem(23);
console.log(friendCounts.getItem(0));

// 8. ЗАПРЕТ НА ИЗМЕНЕНИЕ (READONLY)
interface EmployeeReadOnly {
  readonly employeeId: number; // Это поле менять нельзя после создания
  name: string;
  readonly startDate: Date;
  department: string;
}

const emp: EmployeeReadOnly = {
  employeeId: 1,
  name: "Anna",
  startDate: new Date(),
  department: "Finance",
};

emp.name = "Jessica"; // Имя менять можно
// emp.employeeId = 2; // А тут будет ошибка, потому что поле только для чтения
console.log(emp);
