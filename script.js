
function random(min, max) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min);
    return num;
}
function random(min, max) {
    let sum = Math.floor(Math.random() * (max + 1 - min) + min);
    return sum;
}

let amount = +prompt('Введите количество примеров');

let maxNum = +prompt('Введите наибольшее число');

let minNum = +prompt('Введите наименьшее число');

for (let i = 1; i <= amount; i++) {
    let randomNum1 = random(maxNum, minNum);
    let randomNum2 = random(maxNum, minNum);
    let num = +prompt(randomNum1 + ' + ' + randomNum2);
    let numResult = randomNum1 + randomNum2
    if (num === numResult) {
        alert(num + ' You are doing fine! ');
    } else if (num != numResult) {
        alert(num + ' is wrong answer ' + ' Right answer is = ' + numResult);
    }
}
for (let i = 1; i <= amount; i++){
    let randomNum1 = random(maxNum, minNum);
  let randomNum2 = random(maxNum, minNum);
  let sum = +prompt(randomNum1 + ' - ' + randomNum2);
  let numResults = randomNum1 - randomNum2
   if (sum === numResults) {
            alert(sum + ' You are doing fine! ');
        } else if (sum != numResults) {
            alert(sum + ' is wrong answer ' + ' Right answer is = ' + numResults);
        }
}


