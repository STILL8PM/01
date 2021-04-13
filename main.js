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
/*
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
}*/
/*
console.log(person);
//{firstName: "Jhon", lastName: "Doe", age: 30, hobbies: Array(3), address: {…}}
console.log(person.firstName,person.lastName);//输出多个值，逗号隔开
console.log(person.hobbies[1]);//输出preson中hobbies中的movies
console.log(person.address.city);//输出preson中address中的city

const{firstName,lastName,address:{city}}=person;//解构，从preson取出firstname等等
console.log(city);*/
/*
person.email = 'joho@gmail.com';//在person中添加email
console.log(person);*/
/*
const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meetiing with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    },
];
console.log(todos[1].text);//输出todos的id=2 的text

//Json数据格式，全栈开发广泛使用，用到API，当你向服务器发送数据会用到json格式，接收也是
const todoJSON = JSON.stringify(todos);//调用stringify方法，引入todos数据，赋值到todoJSON
console.log(todoJSON);//得到一个可以向服务器发送的JSON字符串数据*/
/*
//For
for(let i = 0; i < 10; i++){
    console.log(`For Loop Number:${i}`);
}
//while
let i = 0;
while(i < 10){
    console.log(`While Loop Number:${i}`);
    i++;
}*/

const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meetiing with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    },
];
/*for(let i = 0;i < todos.length;i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id);
    console.log(todo.text);
}*/

//forEach,map,filter1、map速度比foreach快 2、map会返回一个新数组,不对原数组产生影响,foreach不会产生新数组，foreach返回undefined
//3、map因为返回数组所以可以链式操作，foreach不能 4, map里可以用return ,而foreach里用return不起作用，foreach不能用break，会直接报错
/*todos.forEach(function(todo){
    console.log(todo.id,todo.text);
})*/

/*const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);*/
/*
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);*/

//条件语句
/*const x = 6;
const y = 11;

if(x > 5 || y > 10){
    console.log('x is more than 5 or y is more than 10');
}//或，其中一个true就输出

if(x > 5 && y > 10){
    console.log('x is more than 5 or y is more than 10');
}//与，两个都为true才输出
*/

//三元操作符
/*const x = 10;

const color = x >10 ? 'red' : 'bule';
//switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'bule':
        console.log('color is bule');
        break;
    default:
        console.log('color is NOT red or bule');
        break;
}*/

//function
/*
function addNums(num1,num2){
    console.log(num1+num2);//新建函数addNums，输出num1+num2
}
addNums(8,4);

function addNums(num1=1,num2=2){
    return num1 + num2;
}
console.log(addNums(8,4));//输出12*/
/*
const addNums = (num1=1,num2=2) => num1 + num2;
console.log (addNums(5,5));*/

const addNums = num1 => num1 + 5;
console.log (addNums(5));

//https://www.bilibili.com/video/BV1jE411T7ya?from=search&seid=3875009973904582287
59:25