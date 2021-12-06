
let amount = +prompt('Введите кол-во примеров');

function randomExam(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function randomSym() { 
    return Math.floor(Math.random() * (5 - 1) + 1)
}

for(let i = 0; i < amount; i++) {
    let examNum1 =  randomExam(1, 10);
    let examNum2 = randomExam(1, 10);
    let examSym = randomSym();
    let exam = 0;

    if(examSym == 1) {
        exam = examNum1 + examNum2;
        examSym = '+'
    }else if(examSym == 2) {
        exam = examNum1 - examNum2;
        examSym = '-'
    }else if(examSym == 3) {
        exam = examNum1 * examNum2;
        examSym = '*'
    }else if(examSym == 4){
        exam = examNum1 / examNum2;
        examSym = '/'
    }

    let answer = +prompt(examNum1 + examSym + examNum2);

    console.log(exam == answer ? ' Ваш ответ верный - ' + answer : ' Ваш ответ не верный - ' + answer + ' Верный ответ ' + exam);
}

