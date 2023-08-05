let a;
let date;
let time;

setInterval(() => {
a=new Date();
date= a.toLocaleDateString();
time = a.gethours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById('time').innerHTML = time +"on" + date;
}, 1000);