// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

let n1 = 10
let n2 = 20

n1 = prompt("Введите первое число")

n2 = prompt("Введите второе число")


function calculateAverage(n1, n2) {
 return  (n1 + n2) / 2;
}

console.log(calculateAverage(n1, n2));