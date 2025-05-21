const bloco1 = document.getElementById('bloco1'); 
const bloco2 = document.getElementById('bloco2'); 
const bloco3 = document.getElementById('bloco3'); 
const bloco4 = document.getElementById('bloco4'); 

function FuncBtn1(){
    bloco1.classList.toggle('ativo1');
  }
function FuncBtn2(){
    bloco2.classList.toggle('ativo2');
  }
function FuncBtn3(){
    bloco3.classList.toggle('ativo3');
  }
function FuncBtn4(){
    bloco4.classList.toggle('ativo4');
  } 

bloco1.addEventListener('click', FuncBtn1);
bloco2.addEventListener('click', FuncBtn2);
bloco3.addEventListener('click', FuncBtn3);
bloco4.addEventListener('click', FuncBtn4);