//Задание 1
function checkSimpleNumber(number) {
    let simpleNumberArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    for (let i = 0; i < simpleNumberArray.length; i++){
        if (number === simpleNumberArray[i]){
            alert(number);
            return;
        }
    }

    /*let i = 0;
    iffor: if(i < 20)
    {
        //тело цикла
        i++;
    }
    else goto exitfor;
    goto iffor;
    exitfor:*/
}

function testWhile(){ //2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
    let i = 0;
    while (i < 100) {
        checkSimpleNumber(i);
        i++;
        /*switch (i){
            case 2:
            case 3:
            case 5:
            case 7:
            case 11:
            case 13:
            case 17:
            case 19:
            case 23:
            case 31:
            case 37:
            case 41:
            case 43:
            case 47:
            case 53:
            case 59:
            case 61:
            case 67:
            case 71:
            case 73:
            case 79:
            case 83:
            case 89:
            case 97:

                alert(i);
                break;
        }*/
    }
}

//Задание 2
function countBasketPrice() {
    let basket = [['Утюг', 1000, 2], ['Соковыжималка', 800, 1], ['Сковорода', 1500, 3]];
    basket[3] = ['Кружка', 150, 1];
    let sum = 0;
    let sum2 = 0;
    basket.forEach(function(item, i, arr) {
        sum = sum + basket[i][1] * basket[i][2];
        sum2 = sum2 + item[1] * item[2];
        });
    alert("sum2: " + sum2);
    alert("sum: " + sum);
    
    let sum3 = basket.reduce(function(sum, item){
        return sum + item[1] * item[2];
    }, 0);
    alert("sum3: " + sum3);
}

//Задание 3
function alertNumbers(){
    for (let i = 0; i <= 9; alert(i++)) {}
}
