const products = [
    { name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true },
    { name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true },
    { name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false },
    { name: "Book", category: "Books", price: 20, quantity: 100, available: true }
];


// 1.Filter products by category
const electronicsProducts = products.filter(product => product.category === "Electronics");

console.log(electronicsProducts)

// 2.Sort products by price in ascending order
const sortedByPrice = products.slice().sort((a, b) => a.price - b.price);

console.log(sortedByPrice )

// 3.Products with Total Value
const productsWithTotalValue = products.map(product => ({
    ...product,
    totalValue: product.price * product.quantity
}));
console.log(productsWithTotalValue);

// 4. Inventory Report
const totalProducts = products.length;

const totalValue = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

const avgPrice = totalValue / totalProducts;

const categoryDistribution = products.reduce((dist, product) => {
    dist[product.category] = (dist[product.category] || 0) + 1;
    return dist;
}, {});

const inventoryReport = {
    totalProducts,
    totalValue,
    avgPrice,
    categoryDistribution
};

console.log(inventoryReport);


