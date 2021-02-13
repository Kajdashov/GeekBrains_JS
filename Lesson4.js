//Задание 1
function convertNumber(j) {
    let CN = {
        units: null ,
        dozens: null,
        hundreds: null
    }
    if (0 < j && j <= 999) {
        let units = j % 10;
        let x = (j - units)/10;
        let dozens = x % 10;
        let hundreds = (x - dozens) / 10;
        CN.units = units;
        CN.dozens = dozens;
        CN.hundreds = hundreds;
        return CN;
    }
    else {
        console.log('Число меньше 0 или превышает 999')
        return null;
    }
}
console.log(convertNumber(-1999));

//Задание 2
function countBasketPrice2() {
    
    let basket = [{name:'Утюг', price: 1000, quantity:2}, {name:'Соковыжималка', price:800, quantity:1}, {name:'Сковорода', price:1500, quantity:3}];
    basket[3] = {name:'Кружка', price:150, quantity:1};
    let sum = 0;
    let sum2 = 0;
    basket.forEach(function(item, i, arr) {
        sum = sum + basket[i].price * basket[i].quantity;
        sum2 = sum2 + item.price * item.quantity;
        });
    alert("sum2: " + sum2);
    alert("sum: " + sum);
    
    let sum3 = basket.reduce(function(sum, item){
        return sum + item.price * item.quantity;
    }, 0);
    alert("sum3: " + sum3);
}