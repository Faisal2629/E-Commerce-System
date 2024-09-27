//Step 1: Create the Product Base Constructor Function
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// Add a method to Product.prototype to display product details
Product.prototype.getProductDetails = function() {
    console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
};

// Method to check stock availability
Product.prototype.isInStock = function() {
    return this.quantity > 0;
};

// Method to update stock quantity
Product.prototype.updateStock = function(amount) {
    this.quantity += amount;
};

//Step 2: Create the Electronics Constructor Function
function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); // Call the Product constructor
    this.brand = brand;
    this.model = model;
}

// Set up inheritance from Product
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

// Add specific methods for Electronics
Electronics.prototype.powerOn = function() {
    console.log(`${this.brand} ${this.model} is now powered on.`);
};

Electronics.prototype.powerOff = function() {
    console.log(`${this.brand} ${this.model} is now powered off.`);
};

// Override getProductDetails to include brand and model
Electronics.prototype.getProductDetails = function() {
    console.log(`Electronics: ${this.name}, Brand: ${this.brand}, Model: ${this.model}, Price: $${this.price}, Quantity: ${this.quantity}`);
};

//Step 3: Create the Clothing Constructor Function
function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity); // Call the Product constructor
    this.size = size;
    this.material = material;
}

// Set up inheritance from Product
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Add specific methods for Clothing
Clothing.prototype.tryOn = function() {
    console.log(`Trying on ${this.name} in size ${this.size}.`);
};

// Override getProductDetails to include size and material
Clothing.prototype.getProductDetails = function() {
    console.log(`Clothing: ${this.name}, Size: ${this.size}, Material: ${this.material}, Price: $${this.price}, Quantity: ${this.quantity}`);
};

//Step 4: Create the Book Constructor Function
function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); // Call the Product constructor
    this.author = author;
    this.genre = genre;
}

// Set up inheritance from Product
Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

// Add specific methods for Book
Book.prototype.read = function() {
    console.log(`Reading "${this.name}" by ${this.author}.`);
};

// Override getProductDetails to include author and genre
Book.prototype.getProductDetails = function() {
    console.log(`Book: ${this.name}, Author: ${this.author}, Genre: ${this.genre}, Price: $${this.price}, Quantity: ${this.quantity}`);
};

//Step 5: Demonstrate the Functionality
// Create instances of different products
const laptop = new Electronics("Laptop", 1200, 10, "Dell", "XPS 13");
const tshirt = new Clothing("T-Shirt", 20, 50, "L", "Cotton");
const novel = new Book("The Great Gatsby", 10, 30, "F. Scott Fitzgerald", "Classic Fiction");

// Display product details
laptop.getProductDetails(); // Electronics: Laptop, Brand: Dell, Model: XPS 13, Price: $1200, Quantity: 10
tshirt.getProductDetails(); // Clothing: T-Shirt, Size: L, Material: Cotton, Price: $20, Quantity: 50
novel.getProductDetails(); // Book: The Great Gatsby, Author: F. Scott Fitzgerald, Genre: Classic Fiction, Price: $10, Quantity: 30

// Check stock availability
console.log(laptop.isInStock()); // true
console.log(tshirt.isInStock()); // true

// Use specific methods
laptop.powerOn(); // Dell XPS 13 is now powered on.
tshirt.tryOn(); // Trying on T-Shirt in size L.
novel.read(); // Reading "The Great Gatsby" by F. Scott Fitzgerald.

// Update stock quantity
laptop.updateStock(-2); // Selling 2 laptops
console.log(laptop.quantity); // 8

// Check stock again after update
console.log(laptop.isInStock()); // true

