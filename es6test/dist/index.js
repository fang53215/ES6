'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// var a = "hello"; //var 是全局声明
// console.log(a);
// window.onload = function(){
//     console.log(a);
// }
// {
//     let a = "你好"; //var 是局部声明
// }
// console.log(a);

// for(var i=0; i<10; i++){
//     console.log("循环体中：" + i);
// }
// console.log("循环体外：" + i);
// for(let j=0; j<10; j++){
//     console.log("循环体中：" + j);
// }
// console.log("循环体外：" + j);

// const a = "1234";//const声明常量
// var a = "123";
// console.log(a);


// let [a,b,c] = [1,2,3];//数组的解构赋值
// console.log(a + ',' + b + ',' + c);
// let [d,[e,f],g] = [1,[2,0],3];
// console.log(d + ',' + e + ',' + f + ',' + g);
// let [foo = true] = [];
// console.log(foo);
// let [m,n = 'hello'] = ['aa'];
// console.log(m + n);
// let [j,k = 'hello'] = ['aa',undefined];
// console.log(j + k);
// let [x,y = 'hello'] = ['aa',null];
// console.log(x + y);

// let {foo,bar} = {foo:'hello',bar:'a'};//对象的解构赋值
// console.log(foo + bar);
// let a;
// ({a} = {a:'hello'});
// console.log(a);

// const [a,b,c,d,e] = 'hello';//字符串解构
// console.log(a + ',' + b + ',' + c + ',' + d + ',' + e);


//对象扩展运算符（...）
// function aaa(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// aaa(1,2,3)
// let arr1 = ['aa'];
// // let arr2 = arr1;
// let arr2 = [...arr1]
// console.log(arr2)
// arr2.push('ddd');
// console.log(arr2)
// console.log(arr1)

//rest运算符
// function aaa(first,...arg){
//     console.log(arg.length);
//     for(let val of arg){
//         console.log(val);
//     }
// }
// aaa(1,2,3,4,5);


//字符串模板
// let text1 = 'aaa';
// let text2 = `你好 <b>${text1}</b>!!!!!!<br/>`;
// document.write(text2);
// let a = 1;
// let b = 2;
// let result = `${a+b}`;
// console.log('aaa' + (a+b) + 'bbb')
// document.write(result);

//字符串查找
// let text1 = 'aaa';
// let text2 = `你好mmmmaaa!!!!!!<br/>`;
// document.write(text2.indexOf(text1));
// document.write(text2.includes(text1));
// document.write(text2.startsWith(text1));
// document.write(text2.endsWith(text1));

//复制字符串
// document.write('aaaaaa|'.repeat(3));


//二进制声明
// let binary = 0B010101;
// console.log(binary)
//八进制声明
// let octal = 0O666;
// console.log(octal)

//数字判断和转换
// let a = 11/4;
// console.log(Number.isFinite(a));//true
// console.log(Number.isFinite('aaa'));//false
// console.log(Number.isFinite(NaN));//false
// console.log(Number.isFinite(undefined));//false
// console.log(Number.isNaN(NaN));//true
// console.log(Number.isNaN(1));//false
// let b = 4.3;
// console.log(Number.isInteger(b));//false
// console.log(Number.parseInt(b));//4
// console.log(Number.parseFloat(b));//4.3

//整数取值范围操作
// let c = Math.pow(2,53) -1;
// let d = -(Math.pow(2,53) -1);
// console.log(c)
// console.log(d)
// console.log(Number.MAX_SAFE_INTEGER)//最大安全整数
// console.log(Number.MIN_SAFE_INTEGER)//最小安全整数
// console.log(Number.isSafeInteger(c))


//JSON数组格式转换
// let json = {
//     '0' : 'aaa',
//     '1' : 'bbb',
//     '2' : 'ccc',
//     length:3
// }
// let arr = Array.from(json);//JSON代码转换成数组
// console.log(json);
// console.log(arr);

//Array.of()方法
// let arr1 = Array.of(3,4,5);//把一堆文本或者变量转换成数组
// console.log(arr1);
// let stt = '[3,4,5]';
// console.log(stt)
// console.log(eval(stt))
// console.log(Array.of(stt))
// console.log(Array.of('111','222'));
// let arr2 = '3,4,5';
// console.log(Array.of(arr2))

//find()实例方法
//实例方法:并不是以Array对象开始的，而是必须有一个已经存在的数组，然后使用的方法
// let arr = [1,2,3,4,5];
// console.log(arr.find(function(value,index,arr){//value:当前查找的值
//     return value > 5;//只返回第一个符合条件的值
// }));
// let arr1 = ['aaa','bbb','ccc'];
// console.log(arr1.find(function(value,index,arr){
//     return value == 'aaa';
// }));


//fill()实例方法
// let arr = [1,2,3,4,5];
// arr.fill('web',1,3);//第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置
// console.log(arr)

//数组的遍历
// let arr1 = [1,2,3,4,'5'];
// for(let item of arr){
//     console.log(item);
// }
// console.log('-------');
// for(let item of arr1.keys()){
//     console.log(item);
// }
// console.log('-------');
// for(let item of arr1.entries()){
//     console.log(item);
// }
// console.log('-------');
// for(let [index,val] of arr1.entries()){
//     console.log(index + ':' + val);
// }
// console.log('-------');
// let list = arr1.entries();
// console.log(list)
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);


// function add(a,b){
//     'use strict'
//     return a+b;
// }
// console.log(add(1,2));
// console.log(add.length);
// function add1(a,b=1){
//     // 'use strict'//如果你使用了默认值，再使用严谨模式的话，就会有冲突
//     if(a==0){
//         throw new Error('Error');
//     }
//     return a+b;
// }
// console.log('-------');
// console.log(add1(5));
// console.log(add1.length);//它得到的是必须传入的参数的个数
// // console.log(add1(0));
// console.log('-------');

//箭头函数
//箭头函数中不可加new，也就是说箭头函数不能当构造函数进行使用
// var add2 = (a,b=1) => a+b;
// // var add2 = (a,b=1) => {return a+b;}
// console.log(add2(5));


//对象的函数解构
// let json = {
//     a:'111',
//     b:'222'
// }
// function fun({a,b='333'}){
//     console.log(a,b)
// }
// fun(json);

//数组的函数解构
// let arr = ['111','222','333'];
// function fun2(a,b,c){
//     console.log(a,b,c);
// }
// fun2(...arr);

//in的用法 用来判断对象或者数组中是否存在某个值
// let obj = {
//     a:'111',
//     b:'222'
// }
// console.log('a' in obj);//true

// let arr2 = ['111111',,,];
// console.log(arr2.length)//3
// console.log(0 in arr2)//true 这里的0指的是数组下标位置是否为空
// console.log(1 in arr2)//false

//数组的遍历
// let arr = ['111','222','333'];
// arr.forEach((val,index) => console.log(index,val));

// console.log('-------');
// arr.filter(item => console.log(item));

// console.log('-------');
// arr.some(item => console.log(item));

// console.log('-------');
// console.log(arr.map(item => 'web'));

//数组转换字符串
// let arr = ['111','222','333'];
// console.log(arr.toString());//转换时用逗号隔开
// console.log(arr.join('|'));//在数组元素中间，加一些间隔


//对象赋值
// let name = '111';
// let skill = '222';
// // let obj = {name:name,skill:skill};
// let obj = {name,skill};
// console.log(obj);

//对象Key值构建
// let key = 'skill';
// var obj = {
//     [key]:'111'
// }
// console.log(obj);

//自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));

//Object.is()对象比较
// var obj1 = {name:'111'};
// var obj2 = {name:'111'};
// console.log(obj1.name === obj2.name);//true
// console.log(Object.is(obj1.name,obj2.name));//true

//===同值相等,is严格相等
// console.log(+0 === -0);//true
// console.log(NaN === NaN);//false
// console.log(Object.is(+0,-0));//false
// console.log(Object.is(NaN,NaN));//true

//Object.assign()合并对象
// let a = {a:'111'};
// let b = {b:'222'};
// let c = {c:'333'};
// let d = Object.assign(a,b,c);
// console.log(d);


//Symbol 全局标记
var a = new String();
var b = new Number();
var c = new Boolean();
var d = new Array();
var e = new Object();

var f = Symbol();
console.log(typeof f === 'undefined' ? 'undefined' : _typeof(f));
console.log(typeof c === 'undefined' ? 'undefined' : _typeof(c));

var g = Symbol('aaa');
console.log(g);
console.log(g.toString());

var aaa = Symbol();
var obj = _defineProperty({}, aaa, '111');
console.log(obj);
