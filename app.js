let $=document;
let namaysh=$.querySelector('#namaysh');
let numbernamaysh=$.querySelector('.number-namaysh');
let boxs=$.getElementsByClassName('box');
let rest=$.querySelector('.rest');
let onoff=$.getElementById('on-off');
let sound=$.getElementById('sound-butn')
onoff.addEventListener('click',kled);
rest.addEventListener('click',clear);
let body=$.body
let karakter='';
let motagear=false

for (var i=0;i<boxs.length;i++){
    boxs[i].addEventListener('click',my)
}
    body.addEventListener('keydown',my2)
// --------------------------------------------------------
function kled(){
    if(!motagear){
        onoff.innerHTML='on';
        onoff.style.background='blue';
        namaysh.style.background='rgba(245, 222, 179, 0.603)';
        numbernamaysh.innerHTML='welcom ...'
        motagear=true;
    }
    else{
        onoff.innerHTML='off'
        onoff.style.background='rgba(255, 68, 0, 0.815)'
        namaysh.style.background='rgba(0, 0, 0, 0.623';
        numbernamaysh.innerHTML=''
        karakter=''
        motagear=false
    }
}
// --------------------------------------------------
function my(event){ 
    if(motagear){
        sound.play()
        let boxevent=event.target
        if (boxevent.getAttribute('value')=='mosavi'){
           
            if (karakter.length==0)
                numbernamaysh.innerHTML='nothing not here :'
            else{
                if(karakter.includes('-')||karakter.includes('*')||karakter.includes('+')||karakter.includes('/')||karakter.includes('.')||karakter.includes(0)){
                    namaysh.style.background='orange'
                }
                numbernamaysh.innerHTML= (eval(karakter))
                karakter=String(eval(karakter))
            }
        }
        else{
            karakter+=(boxevent.getAttribute('value'))
            numbernamaysh.innerHTML=karakter
            namaysh.style.background='rgba(245, 222, 179, 0.603)'
        }
    }
    console.log(karakter)
}
// ----------------------------------------------------
function clear(){
    if(motagear){
        sound.play()
        karakter=karakter.substring(0,karakter.length-1);
        numbernamaysh.innerHTML=karakter
        namaysh.style.background='rgba(245, 222, 179, 0.603)'
    }
}
// ----------------------------------------------------------------
function my2(event2){
    event2.preventDefault()
    let alaem=(event2.key)
    if(alaem=='a'){
        kled()
    }
    else if(alaem=='z'){
          motagear=true
            kled()
        }
    else if(motagear){
        let selectadd=Number(event2.key)
        if (selectadd){
            karakter+=selectadd
            numbernamaysh.innerHTML=karakter
        }
        else if(alaem==('-')||alaem==('*')||alaem==('+')||alaem==('/')||   alaem==('.')||alaem==('%')||alaem==(0)){
            karakter+=alaem
            numbernamaysh.innerHTML=karakter
        }
        else if (alaem==('=')||alaem=='Enter'){
            if (karakter.length==0)
                numbernamaysh.innerHTML='nothing not here :';
            else{
                if(karakter.includes('-')||karakter.includes('*')||karakter.includes('+')||karakter.includes('/')||karakter.includes('.')||karakter.includes(0)){
                    namaysh.style.background='orange'
                }
                let jamaddha=eval(karakter)
                karakter=String(jamaddha)
                numbernamaysh.innerHTML=karakter
               
            }
        }
        else {
            if(alaem==('Backspace')){
               clear()
            }
        }
    }
 }


