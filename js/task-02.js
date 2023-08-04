const total = 100;
let ordered = Number.parseInt(prompt());

if (total <= ordered) {
    alert("На складі недостатня кількість товару!");
} else{
    alert("Замовлення оформлено.");
}