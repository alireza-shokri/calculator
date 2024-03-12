let $=document;
let numbernamaysh=$.querySelector('.number-namaysh');
let boxs=$.getElementsByClassName('box');
let rest=$.querySelector('.rest');
let onoff=$.getElementById('on-off');
onoff.addEventListener('click',kled);
rest.addEventListener('click',clear);
// let body=$.body
let karakter='';
let motagear=false

for (var i=0;i<boxs.length;i++){
    boxs[i].addEventListener('click',my)
    // body.addEventListener('keydown',my2)
}
// --------------------------------------------------------

function kled(){
    if(! motagear){
        onoff.innerHTML='on'
        onoff.style.background='blue'
        motagear=true
    }
    else{
        onoff.innerHTML='off'
        numbernamaysh.innerHTML=''
        karakter=''
        onoff.style.background='rgba(255, 68, 0, 0.815)'
        motagear=false
    }
}
// --------------------------------------------------
function my(event){ 
    if(motagear){
        let boxevent=event.target
        if (boxevent.getAttribute('value')=='mosavi'){

            if (karakter.length==0)
                numbernamaysh.innerHTML='nothing not here'
            else{

                numbernamaysh.innerHTML= (eval(karakter))
                karakter=String(eval(karakter))
            }
        }
        else{
            karakter+=(boxevent.getAttribute('value'))
            numbernamaysh.innerHTML=karakter
        }
    }
}
// ----------------------------------------------------
function clear(){
    karakter=(karakter.slice(0,-1))
    numbernamaysh.innerHTML=karakter
}

// function my2(event2){
//     let alaem=(event2.key)
  
//     if(alaem==('-')||alaem==('*')||alaem==('+')||alaem==('/')||alaem==('.')||alaem==('%')){

//         t+=alaem
//         number.innerHTML=t

//     }
//     if (alaem==('=')||alaem==('Enter')){
//         let nv=eval(t)
//         t=nv
//         number.innerHTML=nv
//     }
//     if(alaem=='Backspace'){
//         clear()
//     }
//     let p=Number(event2.key)
//     if (p){
//         t+=p
//         number.innerHTML=t
//         console.log(p)
//     }
    

// }
 


