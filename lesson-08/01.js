/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово
  начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    let words = str.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[i] = (words[i][0].toUpperCase() + words[i].slice(1))
    }

    return words.join(" ")
}

console.log(capitalizeWords("hello world from javascript"))

