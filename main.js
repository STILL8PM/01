/*
alert('this is an alert')//弹窗
console.log('hello world');//提示  console-控制台
console.error('this is an error')//错误
console.warn('this is an warn')//警告
*/

/* 
变量声明关键字：
var（相同变量名字冲突慢慢不用）
let(可以重新赋值)
const(不可以重新赋值)
*/

/*
let age = 30;
age=31;
console.log(age);
*/

/*
const age = 30;
age=31;
console.log(age);
*/

//数据类型：string,numbers,boolean,null,undefined
/*
const name = 'John';//string
const age  = 22;//numbers
const rating = 4.5;//numbers,js不区分浮点数
const iscool = true;//boolean
const x = null;//定义x，什么都没有
const y = undefined;
let z;
console.log(typeof y)
*/

/*
const name = 'Jhon';
const age = 22;
//concatenation
console.log('my name is '+name+ ' and i an '+ age);
//Template String
console.log(`my name is ${name} and i am ${age}`);//注意`模板字符串`

const hello = `my name is ${name} and i am ${age}`;
console.log(hello);
*/
/*
const s = 'Hello World!';
console.log(s.length);//输出s的长度,length后面没有括号，方法才有
console.log(s.toUpperCase());//输出全大写
console.log(s.toLowerCase());//输出全小写
console.log(s.substring(0,5).toUpperCase());//截取字符串0到5,并输出全大写
console.log(s.split(''));//字符串分割到数组["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]
*/
/*
const s ='technology, computers, it, code';//字符串分割到数组 ["technology", "computers", "it", "code"]
console.log(s.split(', '));*/

//Arrays 数组 具有多个值的变量
/*
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apples','oranges','pears'];//数组可保持不同类型的数据：数字，布尔，字符串
console.log(fruits);
console.log(fruits[1]);
fruits[2]='grapes';//替换或添加grapes在指定位置
fruits.push('mangos');//不知道位置添加mangos在最后
fruits.unshift('strawberries');//添加strawberries在最前面
fruits.pop();//去掉最后一个
console.log(Array.isArray(fruits));//判断fruits是不是数组，是ture 否false
console.log(fruits.indexOf('oranges'));//查询oranges的索引值
console.log(fruits);*/

//对象语法
const person ={
    firstName: 'Jhon',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies','sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
//{firstName: "Jhon", lastName: "Doe", age: 30, hobbies: Array(3), address: {…}}
console.log(person.firstName,person.lastName);//输出多个值，逗号隔开

//https://www.bilibili.com/video/BV1jE411T7ya?from=search&seid=3875009973904582287
//31:57