
async function test () {const fetch = require('node-fetch');
var dat = [];
await fetch("https://ut-minor-app.herokuapp.com/minors/natural-sciences").then(res => res.json()).then(data=>dat=data);
console.log(dat)
}

test();