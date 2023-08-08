function definecampos(){
  let entrada1 = Number(document.getElementById("entrada1"))
  let entrada2 = Number(document.getElementById("entrada2"))
  let entrada3 = Number(document.getElementById("entrada3"))




}
 

function Media(){
  definecampos()
  let nota1 = entrada1.value;
  let nota2 = entrada2.value;
  let nota3 = entrada3.value;
  let media =   parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
  let total = (media / 3);
  if(total < 7) {
     alert("Reprovado")
    
    }
  if(total >= 7){
    alert("Aprovado")

  }
  
    
}