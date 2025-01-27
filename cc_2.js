//Task 1: Working with Arrays 
let products = ['Blender', 'Oven', 'Microwave', 'Toaster', 'CoffeeMaker'];
console.log(products);// Output: [Blender, Oven, Microwave, Toaster, CoffeeMaker]
products.push('Juicer');
console.log(products);// Output: [Blender, Oven, Microwave, Toaster, CoffeeMaker, Juicer]
let removedProduct = products.pop();
console.log(removedProduct);// Output: Juicer
console.log(products);// Output: [Blender, Oven, Microwave, Toaster, CoffeeMaker]

//Task 2: Accessing and Modifying Arrays
let scores = [78, 85, 91, 87, 76];
console.log(scores);// Output: [78, 85, 91, 87, 76]
scores.splice(2,1,30);
console.log(`Updated Scores:${scores}`);// Output: Updated Scores:78,85,30,87,76
let sum = scores.reduce((acc, score) => acc + score, 0);
let average = sum / scores.length;
console.log(`Average Score: ${average}`);// Output: Average Score: 71.2

//Task 3: Working with Objects
let employee = {
    name: 'Minnie Jane',
    age: 21,
    department: 'Financee',
    isActive: true};
console.log(employee);// Output: {name: Minnie Jane, age: 21, department: Financee, isActive: true}
employee.department = 'HR';
employee.position = 'Associate';
console.log(employee);// Output: {name: Minnie Jane, age: 21, department: HR, isActive: true, position: Associate}