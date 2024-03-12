let $=document
let number1=$.querySelector('.number1')
let boxs=$.getElementsByClassName('box')
let jam=$.querySelector('.jam')
let rest=$.querySelector('.rest')
let t=''
rest.addEventListener('click',clear)
for (var i=0;i<boxs.length;i++){
    boxs[i].addEventListener('click',my)
    }
function my(event){
    let q=event.target
    if (q.getAttribute('value')=='mosavi'){
       let jam2ta=(eval(t))
       number1.innerHTML=jam2ta
        t=String(jam2ta) 
        console.log(typeof(t))
    }
    else{
        let r=(event.target) 
        let v=(r.getAttribute('value'))
        t+=(v)
        number1.innerHTML=t
        console.log(t)
    }
}
function clear(){
    t=(t.slice(0,-1))
    number1.innerHTML=t
    console.log(t)
}



