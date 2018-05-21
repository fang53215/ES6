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

const [a,b,c,d,e] = 'hello';//字符串解构
console.log(a + ',' + b + ',' + c + ',' + d + ',' + e);