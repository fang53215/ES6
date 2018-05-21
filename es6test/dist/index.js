'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    a = _hello2[0],
    b = _hello2[1],
    c = _hello2[2],
    d = _hello2[3],
    e = _hello2[4];

console.log(a + ',' + b + ',' + c + ',' + d + ',' + e);
