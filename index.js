//変数
/*const name="田中";
const age=25;
//文字列の組み立て
console.log(`名前:${name}`);
console.log(`年齢：${age}`);
//関数
function greet(name){
    return`こんにちは,${name}さん!`;
}
console.log(greet("佐藤"));

//配列
const fruits =["りんご","みかん","ぶどう"];
fruits.forEach((fruits)=>{
console.log(`フルーツ:${fruits}`);
});

//条件分岐
const score=75;
if(score>=80){
    console.log("合格")
}else{
    console.log("不合格");
}

const fn=(name)=>{
    return'helllo'+name;
}
console.log(fn3('tom1'));


const list=[10,20,30];
const [x,y,z]=list;
const [a,b]=list;
const [i,j,k,l]=list;
const [m, ,n]=list;
const [one,...rest1]=list;

const member={
    name:"Tom",
    gender:`male`,
    age:20,
};
const{name1,gender,memo=`---`}=member;
const{gender:sex}=menber;
const{name2,...rest2}=member1;

const member2={
    name:`Tom`,
    address:{
        prefecture:`東京都`,
        city:`江東区`,
    },
};
const{address,address:{city}}=member2;
console.log(address);
console.log(city);*/
/*
function sum(...nums){
    let result=0;
    for(const num of nums){
       result += num;
    }
    return result;
}
console.log(sum(10,25,5));

const nums=[10,25,5];
console.log(sum(nums));
console.log(sum(...nums))

function greet({name,age}){
    console.log(`Hello my name is ${name},${age} years old.`)
}
const member={name:`Tom`,gender:`male`,age:20};
greet(member);


const str="aaa";
//console.log(str.substring(1));
if(str !== null && str !==undefined){
    console.log(str.substring(1));
}
console.log(str?.substring(1));

let value=null;
console.log(value ?? `規定値`);

let value=null;
value ??='規定値';
console.log(value ??'規定値');

import { getTriangle as tri } from "./index.js";
console.log(tri(10,5));

let obj={
    property1:`Hello`,
    property2:function(){
        console.log(this[`property1`]+`zzz`)
    },
    property3:{
        bye:`Bye`
    }
}

const fruits1=[];
let numbers=new Array();
const colors=["Red","Green","Blue"];
const fruits2=["Apple","Banana"];
fruits1[1]="Orange";
console.log(fruits1);
fruits2.push("Melon");
console.log(fruits2);


const fruits=["Apple","Banana","Orange"];
/or(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
fruits.forEach((fruit,index) => {
    console.log(index,fruit);
});

for(const fruit of fruits){
    console.log(fruit);
}

const numburs=[1,2,3];
const doubled=numburs.map(num=>num*2);
console.log(doubled);

const numbers=[1,2,3,4,5];
const even=numbers.filter(num=>num%2===0);
console.log(even);

const numbers=[1,2,3,4];
const sum=numbers.reduce((accumulator,current)=>accumulator+current,0);
console.log(sum);

let a=2;
function fn1(){
    let a=1;
    function fn2(){
        console.log(a);
    }
    fn2();
}
fn1();

let result=(function(){
    return 3;
})(5);

function a(){
    console.log(`called`)
}
a(2);
(a)(3);

let a=(function(){
    let privateVal=0;
    let publicVal=10;
    function privateFunction(){
    console.log(`private function is called.`)
}
    function publicFunction(){
        console.log(`public function is called.`)
    }
    return{publicVal,privateFunction}
})();

function printTypeAndValue(val){
    console.log(typeof val,val);
}
let a=0;
printTypeAndValue(a);
let b=`1`+a;
printTypeAndValue(b);
let c=15-b;
printTypeAndValue(c);
let d=c-null;
printTypeAndValue(d);
let e=d-true;
printTypeAndValue(e);

let a=0;
console.log(Boolean(a));
let b=``;
console.log(Boolean(b));
let c=0n;
console.log(Boolean(c));
let d=null;
console.log(Boolean(d));
let e=parseInt("");
console.log(Boolean(e));
let f;
console.log(Boolean(f));

function fn(a=2,b=1){
    console.log(arguments);
}
fn(0);

function fn(){
    console.log(`fn!`)
}
fn.prop=0;
fn.methood=function(){
    console.log(`methoo!`);
}
fn();
fn.methood();
console.log(fn.prop);

const { callbackify } = require("node:util");

function hello(){
    console.log(`HELLO`);
}
   function fn(callback){
callback(`Tom`);
}
fn(hello);
fn(function(name){
    console.log(`Hello`+name);
});
setTimeout(hello,3000);

const person={
    name:` Tom`,
    hello:function(){
        console.log(`Hello`+this.name);
    }
}
person.hello();

window.name=`Bob`;
const person={
    name:`Tom`,
    hello:function(){
        console.log(`Hello`+this.name);
    }
}
function fn(callback){
callback();
}
fn(person.hello);

window.name= `Bob`;
const person={
    name: `Tom`,
    hello:function(){
        console.log(`Hello` + this.name);
    }
}
function fn(callback){
    callback();
}
fn(person.hello);*/




