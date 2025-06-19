var matriz = [ ["","",""],["","",""],["","",""] ];
var conteiner = document.querySelector('#cont');
var semaforo;
var saberSeDeuVelha = 0;
function escox(){
    var contei = document.getElementById("cont");
  semaforo=1;
  contei.style.display = "block";
  const divEscolha = document.getElementById("titulo");
  divEscolha.style.display = "none";
}
function escoo(){
    var contei = document.getElementById("cont");
  semaforo=0;
  contei.style.display = "block";
  const divEscolha = document.getElementById("titulo");
  divEscolha.style.display = "none";
}
function zerozero(){
  var l=0;
  var c=0;
  var posison=0;
  jogoPrincipal(posison, l, c); 
  VerificarJogo(matriz);
}
function zeroone(){
  var l=0;
  var c=1;
  var posison=1;
  jogoPrincipal(posison, l, c);  
  VerificarJogo(matriz);
}
function zerotwo(){
  var l=0;
  var c=2;
  var posison=2;
  jogoPrincipal(posison, l, c);   
  VerificarJogo(matriz);
}
function onezero(){
  var l=1;
  var c=0;
  var posison=3;
  jogoPrincipal(posison, l, c); 
  VerificarJogo(matriz);
}
function oneone(){
  var l=1;
  var c=1;
  var posison=4;
  jogoPrincipal(posison, l, c);  
  VerificarJogo(matriz);
}
function onetwo(){
  var l=1;
  var c=2;
  var posison=5;
  jogoPrincipal(posison, l, c);  
  VerificarJogo(matriz);
}
function twozero(){
  var l=2;
  var c=0;
  var posison=6;
  jogoPrincipal(posison, l, c);  
  VerificarJogo(matriz);
}
function twoone(){
  var l=2;
  var c=1;
  var posison=7;
  jogoPrincipal(posison, l, c);
  VerificarJogo(matriz);  
}
function twotwo(){
  var l=2;
  var c=2;
  var posison=8;
  jogoPrincipal(posison, l, c);
  VerificarJogo(matriz);  
}
function jogoPrincipal(linha, l, c){
  if (saberSeDeuVelha < 8){
    if(semaforo==1 && matriz[l][c]==""){
      document.querySelectorAll("#b")[linha].src = "imgX.png";
      semaforo-=1;
    matriz[l][c]="x";
    }else if(semaforo==0 && matriz[l][c]==""){
      document.querySelectorAll("#b")[linha].src = "imgCircle.png";
      semaforo+=1;
      matriz[l][c]="o";
    }
    saberSeDeuVelha++;
  }else{
    const conteinerResultado = document.getElementById("SectionResultado");
    const messageBox = document.getElementById("messagemResultado");
    conteinerResultado.style.display = "block";
    messageBox.innerText = "Deu VEIAAAAAAA!!!";
  }
  if(saberSeDeuVelha==9){
    const conteinerResultado = document.getElementById("SectionResultado");
    const messageBox = document.getElementById("messagemResultado");
    conteinerResultado.style.display = "block";
    messageBox.innerText = "Ja Acabou Mermão!!!";
  }
}
function RegarregarPagina(){
  window.location.reload();
}
function VerificarJogo(m){
  if(saberSeDeuVelha<9){
    if ((m[0][0] == 'o' && m[0][1] == 'o' && m[0][2] == 'o') 
    || (m[1][0] == 'o' && m[1][1] == 'o' && m[1][2] == 'o')
    || (m[2][0] == 'o' && m[2][1] == 'o' && m[2][2] == 'o')
    || (m[0][0] == 'o' && m[1][0] == 'o' && m[2][0] == 'o')
    || (m[0][1] == 'o' && m[1][1] == 'o' && m[2][1] == 'o')
    || (m[0][2] == 'o' && m[1][2] == 'o' && m[2][2] == 'o')
    || (m[0][0] == 'o' && m[1][1] == 'o' && m[2][2] == 'o')
    || (m[0][2] == 'o' && m[1][1] == 'o' && m[2][0] == 'o')){
        const conteinerResultado = document.getElementById("SectionResultado");
        const messageBox = document.getElementById("messagemResultado");
        conteinerResultado.style.display = "block";
        messageBox.innerText = "O BOLA GANHOU!!!"
        saberSeDeuVelha = 9;
    }
    if ((m[0][0] == 'x' && m[0][1] == 'x' && m[0][2] == 'x')
    || (m[1][0] == 'x' && m[1][1] == 'x' && m[1][2] == 'x')
    || (m[2][0] == 'x' && m[2][1] == 'x' && m[2][2] == 'x')
    || (m[0][0] == 'x' && m[1][0] == 'x' && m[2][0] == 'x')
    || (m[0][1] == 'x' && m[1][1] == 'x' && m[2][1] == 'x')
    || (m[0][2] == 'x' && m[1][2] == 'x' && m[2][2] == 'x')
    || (m[0][0] == 'x' && m[1][1] == 'x' && m[2][2] == 'x')
    || (m[0][2] == 'x' && m[1][1] == 'x' && m[2][0] == 'x')){
      const conteinerResultado = document.getElementById("SectionResultado");
      const messageBox = document.getElementById("messagemResultado");
      conteinerResultado.style.display = "block";
      messageBox.innerText = "O CHIS (X) GANHOU!!!"
      saberSeDeuVelha = 9;
    }
  }
}
