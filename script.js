let num=document.getElementById('number').addEventListener('input',(e)=>{
    var number=e.target.value;
    gram=number*1000;
    console.log(gram)
    pound=number*2.205;
    console.log(pound);
    ton=number/1000;
    console.log(ton);
    document.getElementById('gramOutput').innerHTML=gram;
    document.getElementById('kgOutput').innerHTML=pound;
    document.getElementById('tonOutput').innerHTML=ton;
})