/*const number = 2;
//number = 25;
console.log("Переменная" + number);

var num;
num = false;

var num_1 = ;
var num_2 = ;
*/

/*var num_0 = 5;
var num_1 = 15;

var res = num_0 - num_1;

//console.log("Вычитание:" + res);
console.log ("Вычитание" + (num_0 - num_1));

var num_2 = 5;
num_2--;

console.log ("Результат" + num_2);

var str_1 = "13";
var str_2 = "2";
console.log("сложение строк" + (str_1 + str_2));

var str_1 = Number ("13");
var str_2 = Number ("2");
console.log("сложение строк" + (str_1 + str_2));


console.log("math:" + Math.PI);
console.log("math:" + Math.min(1,1,5,9,2,6,5,3,5,8,9,7,9,3));*/
// || это изнак или (это или другое без разницы), && это знак и то и другое должно быть в условии.

/*var number = 15;
var ishashous = true;

if(number <= 5 || ishashous == true){
    
    console.log("ok");

}else if(number == 5){
    console.log ("dolabaeb2")
} else if (number < 10){
    console.log ("conch")
} else if (number >= 15){
    console.log ("322")
}else{
    console.log ("Dolbaeb")

}*/

/*var sroka = "word";

switch(sroka){
    case "4": 
    console.log("переменная со значением 4");
    break;
    case "45": 
    console.log("переменная со значением 45");
    break;
    case "2": 
    console.log("переменная со значением 2");
    break;
    case "word": 
    console.log("переменная со значением word!");
    break;
    default:
        console.log("ne verno");
        break;
}*/

/*
let arr = [0,1,2,3,4,5,6,7];
arr[0] = 1;
console.log (arr [0]);

let matrix = [ [1,3,5],[2,6,8],[ 10,12,15] ];

matrix[1][0] = 90;
console.log (matrix);*/

/*for(var i = 1000; i > 5; i /=2){
    console.log(i);
} */

/*var j = 1000;
while(j > 100){
console.log(j);
j-=10;

}*/

/*var x = 100;
do {
    console.log(x);
    x /=2;
}while (x >= 50);
*/

/*for(var i = 10; i < 20; i+=2){
if( i > 15)
break;
console.log(i);
}*/

// for(var i = 10; i <= 20; i++){
// if(i % 2 == 0 )
// continue;
// console.log(i);
// }

// var arr = [1,2,3,4,5,6,21];

// for(var i = 0; i < arr.length; i++) {
//     arr[i] *=2;
//     console.log("Элемент" + (i + 1) + ":" + arr[i])
// }

// alert("Кааааа");
// confirm('ssdsad') with cancel

//  var data = confirm('dsd');
//  if (data){
//      alert('222')
//  }
//  console.log(data);

// var data = prompt("Сколько вам лет", 18);
// console.log(data);


// // var person = null;
// // if(confirm("Вас есть 18 лет?")){
// //     person = prompt("Введите ваш паспорт");
// //     alert ("привет," + person);


// // }else{
// // alert("Вы не прошли првоерку");
// // }


// function yet(word) {
// console.log(word + "!");

// }

// function plus(a,b){
//     var res = a + b;
//     console.log(res);
// }


// plus(10,1000);

function summa(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
    sum += arr[i];
    
    return sum;
}
var arr = [6,8,1];
var res = summa (arr);
console.log("resultats:" + res);














