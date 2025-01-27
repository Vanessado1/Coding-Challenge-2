//Task 1: Working with Arrays 
let products = ['Blender', 'Oven', 'Microwave', 'Toaster', 'CoffeeMaker'];
console.log(products);// Output: [Blender, Oven, Microwave, Toaster, CoffeeMaker]
products.push('Juicer');
console.log(products);// Output: [Blender, Oven, Microwave, Toaster, CoffeeMaker, Juicer]
let removedProduct = products.pop();
console.log(removedProduct);// Output: Juicer
console.log(products);// Output: [Blender, Oven, Microwave, Toaster, CoffeeMaker]