//1
const user = {
  name: 'John',
  age: 30,
  hobby: 'reading',
  premium: true,
};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}




//2
const countProps = obj => {
  return Object.keys(obj).length;
};

const exampleObj = {
  name: 'Alice',
  age: 25,
  city: 'New York',
};

console.log(countProps(exampleObj));




//3
сonst findBestEmployee = employees => {
  let maxTasks = 0;
  let bestEmployee = '';

  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }

  return bestEmployee;
};

const employees = {
  John: 5,
  Sarah: 8,
  Bob: 3,
};

console.log(findBestEmployee(employees));





//4
const countTotalSalary = employees => {
  let totalSalary = 0;
  for (const employee in employees) {
    totalSalary += employees[employee];
  }

  return totalSalary;
};

const salaries = {
  John: 1000,
  Sarah: 1200,
  Bob: 800,
};

console.log(countTotalSalary(salaries));




//5
const getAllPropValues = (arr, prop) => {
  return arr.map(obj => obj[prop]);
};

const users = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 35 },
];

console.log(getAllPropValues(users, 'name'));
console.log(getAllPropValues(users, 'age'));




//6
const calculateTotalPrice = (allProducts, productName) => {
  const product = allProducts.find(item => item.name === productName);
  return product ? product.price * product.quantity : 0;
};

const products = [
  { name: 'apple', price: 2, quantity: 10 },
  { name: 'banana', price: 1, quantity: 20 },
  { name: 'orange', price: 3, quantity: 5 },
];

console.log(calculateTotalPrice(products, 'apple'));
console.log(calculateTotalPrice(products, 'banana'));



