/*function sleep(ms) {
    const startTime = new Date();
    while(new Date() - startTime < ms);//５０００より小さい場合処理をし続ける
    console.log('sleep done');
}
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log('button clicked');
});

setTimeout(function() {
    sleep(5000);
}, 2000);


const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
    console.log('task2 done');
});
function a() {
    setTimeout(function task1() {
        console.log('task1 done');
    }, 4000);
    const startTime = new Date();
    while(new Date() - startTime < 5000);
    console.log('fn a done');
}
a();

function a(){
    setTimeout(function task1(){
        console.log(`task1 done`);
    });
    console.log(`fn a done`)
}
function b(){
        console.log(`fn b done`);
    }
a();
b();

function sleep(callback,val){
    setTimeout(function(){
        console.log(val++);
        callback(val);
    },1000);
}
sleep(function(val) {
    sleep(function(val) {
        sleep(function(val) {
        },val)
    },val)
},0);

//promise
new Promise(function(resolve,reject){
    resolve(`hello`);
    reject(`bye`);
}).then(function(data){ //callback関数
    console.log(data);
}).catch(function(data){
    console.log(data)//失敗した時用の処理
}).finally(function(){
    console.log(`終了処理`);
});

new Promise(function(resolve,reject){
    console.log(`promise`);
    resolve();
}).then(function(){
    console.log(`then1`);
}).then(function(){
    console.log(`then2`);
}).then(function(){
    console.log(`then3`);
});
console.log(`global end`);

new Promise(function(resolve, reject) {
    console.log('promise');
    reject();
}).then(function() {
    console.log('then1');
}).then(function() {
    console.log('then2');
}).then(function() {
    console.log('then3');
}).catch(function(){
    console.log('catch');
});
console.log('global end');

new Promise(function(resolve,reject){
    console.log(`promise`);
    resolve();
}).then(function(){
    console.log(`than1`);
    throw new Error();
}).then(function(){
    console.log(`than2`);
}).catch(function(){
    console.log(`catch`);
});
console.log(`global end`);

new Promise(function(resolve,reject){
    console.log(`promise`);
    setTimeout(function(){
        resolve(`hello`);
    },1000);
}).then(function(data){
    console.log(`than1: `+data);
    return`bye`;
}).then(function(data){
    console.log(`then2: `+data);
}).catch(function(data){
    console.log(`catch:`+data);
}).finally(function(data){
    console.log(`finally`);
});
console.log(`global end`);

function sleep(val){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(val++);
            resolve(val);
        },val*500);
    })
}
Promise.all([sleep(2),sleep(3),sleep(4)]).then(function(){
    console.log(`end`);
})

function sleep(val){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(val++);
            resolve(val);
        },val*500);
    })
}
Promise.race([sleep(2),sleep(3),sleep(4)]).then(function(data){
    console.log(data)
})*/

function sleep(val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(val++);
            resolve(val);
        }, 1000);
    });
}
async function init() {
    let val = await sleep(0);
    console.log(val);
}
init(); // 「0, 1」と表示される