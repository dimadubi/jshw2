// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let n1 = 0;
let n2 = 0;
let n3 = 0;

n1 = +prompt("Введите первое число")
n2 = +prompt("Введите второе число")
n3 = +prompt("Введите третье число")

function findLargest(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}
console.log(findLargest(n1, n2, n3) + " наибольшее число");