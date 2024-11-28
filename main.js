let stars1 = document.getElementById('stars1');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
    let valu = scrollY;
    stars1.style.left = valu + 'px';
    moon2.style.top = valu * 4 + 'px';
    mountains3.style.top = valu * 2 + 'px';
    mountains4.style.top = valu * 1.5 + 'px';
    river5.style.top = valu + 'px';
    boat6.style.top = valu + 'px';
    boat6.style.left = valu * 3 + 'px';
    nouvil.style.fontSize = valu + 'px';
    if(scrollY >= 67){
        nouvil.style.fontSize = 67 + 'px';
        nouvil.style.position = 'fixed';
        if(scrollY >= 478){
            nouvil.style.display = 'none';
        }else{
            nouvil.style.display = 'block';

        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #23001e)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#23001b,#23001e)'
        }
         
     
    }







}



