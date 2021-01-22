// Задание 1
function ex1() {
    var a = 1, b = 1, c, d;
    c = ++a;
    alert(c);           // 2 (вычисление происходит до присваивания переменной 'c' значения)
    d = b++;
    alert(d);           // 1 (вычисление происходит после присваивания переменной 'd' значения)
    c = (2 + ++a);
    alert(c);      // 5 (сначала происходит вычисление инкремента, а потом прибавляется 2)
    d = (2 + b++);
    alert(d);      // 4 (сначала происходит вычисление переменной 'd', а потом вычисление инкремента)
    alert(a);                    // 3 (потому что во второй и четвертой строке 'а' увеличилась на 1)
    alert(b);                    // 3 (потому что в третьей и пятой строке 'b' увеличилась на 1)
}

// Задание 2
function ex2() {
    var a = 2;
    var x = 1 + (a *= 2);        //  x=1 + a =5, где а =a * 2 = 4;
}

// Задание 3
function ex3(){
    let a = prompt('Введите a =');
    let b = prompt('Введите b =');
    let result = (a >= 0 && b >=0) ? (a - b) :
                    (a < 0 && b < 0) ? (a * b) : (a + b);
    alert(result);
}

// Задание 4
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function ex4(){
    let a = randomInteger(0, 15);
    let result = 0;
    switch (a){
        case 0:
            result = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
            break;
        case 1:
            result = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
            break;
        case 2:
            result = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
            break;
        case 3:
            result = [3,4,5,6,7,8,9,10,11,12,13,14,15];
            break;
        case 4:
            result = [4,5,6,7,8,9,10,11,12,13,14,15];
            break;
        case 5:
            result = [5,6,7,8,9,10,11,12,13,14,15];
            break;
        case 6:
            result = [6,7,8,9,10,11,12,13,14,15];
            break;
        case 7:
            result = [7,8,9,10,11,12,13,14,15];
            break;
        case 8:
            result = [8,9,10,11,12,13,14,15];
            break;
        case 9:
            result = [9,10,11,12,13,14,15];
            break;
        case 10:
            result = [10,11,12,13,14,15];
            break;
        case 11:
            result = [11,12,13,14,15];
            break;
        case 12:
            result = [12,13,14,15];
            break;
        case 13:
            result = [13,14,15];
            break;
        case 14:
            result = [14,15];
            break;
        case 15:
            result = a;
            break;
    }
    alert(result)
}

//Задание 5
function plus(a, b){
    let result = a + b;
    return result;
}
function plus(a, b){
    return a + b;
}
function minus(a, b) {
    let result = a - b;
    return result;
}
function multiply(a, b) {
    let result = a * b;
    return result;
}
function div(a, b) {
    let result = a / b;
    return result;
}

//Задание 6
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case '+':
            return plus(arg1, arg2);
        case '-':
            return minus(arg1, arg2);
        case '*':
            return multiply(arg1, arg2);
        case '/':
            return div(arg1, arg2);

    }
}

//Задание 7
/*Сравнить null и 0. Попробуйте объяснить результат.
   Сравнение (>, <, >=, =<) преобразуют null  к числовому значению 0; нуль не может быть больше/меньше 0,
но может быть больше, либо равен 0/ либо меньше, или равен 0. При нестрогом равенстве null и 0 будет false потому что null
равен пустоте и не приводится к числовому значению.*/
