/*console.log(window);//浏览器打印window对象
window.alert(1);//不需要写window,一切皆window对象
alert(1);*/



//Single element 单元素选择器
//console.log (document.getElementById('my-form'));
/*const form = document.getElementById('my-form');//存储到form
console.log(form);//打印到控制台*/
/*console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));*/
/*getXXXByXXX 获取的是动态集合，querySelector获取的是静态集合。
简单的说就是，动态就是选出的元素会随文档改变，静态的不会，
取出来之后就和文档的改变无关了。*/


// Multiple element 多元素选择器
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

/* const items = document.querySelectorAll('.item');//新建变量items
items.forEach((item) => console.log(item));//遍历items中的item，并打印
 */

const ul = document.querySelector('.items');
// ul.remove();//删除全部ul
// ul.lastElementChild.remove();//删除最后一个
 







