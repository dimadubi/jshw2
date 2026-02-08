// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

let num = 0

num = +prompt("Введите число")

function isEven(num) {
    if (num%2===0){
        console.log(num + " чётное число")
    } else {
        console.log(num + " нечётное число")
    }
    return num%2 === 0
}
isEven(num);
