function on() {
  document.getElementById("settings").style.display = "block";
}

function off() {
  document.getElementById("settings").style.display = "none";
}
console.log('Made With H-API')
const HAPI={};
HAPI.varibles={}
HAPI.injectCSS=(id,css)=>{
    let _css=document.createElement('style');
    _css.innerHTML=css;
  _css.id=id
    document.body.appendChild(_css)
    delete _css
}
function lm(html){
  if(localStorage.lagmode!=="true"){
  localStorage.setItem('lagmode',true)
HAPI.injectCSS('lagmode',`
body, html {
background-image: url('https://andrey.cf/photos/lag.png');
}`)
  html.style.background="green"
} else {
    localStorage.setItem('lagmode',false)
HAPI.injectCSS('lagmode',`
body, html {
background-image: url('https://andrey.cf/photos/backround.gif');
}`)
  html.style.background="red"
}
}
if(localStorage.lagmode==="true"){
HAPI.injectCSS('lagmode',`
body, html {
background-image: url('https://andrey.cf/photos/lag.png');
}`)
}