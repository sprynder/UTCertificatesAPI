
async function test () {const fetch = require('node-fetch');
var dat = [];
await fetch("http://localhost:3000/minors/natural-sciences").then(res => res.json()).then(data=>dat=data);
console.log(dat)
}

test();