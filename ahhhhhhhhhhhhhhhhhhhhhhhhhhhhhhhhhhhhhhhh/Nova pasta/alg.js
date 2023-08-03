function defineCampos(){
    entrada1 = document.getElementById("entrada1")
    entrada2 = document.getElementById("entrada2")
    entrada3 = document.getElementById("entrada3")
}
function Media(){
    defineCampos()
    var nota1 = entrada1.value
    var nota2 = entrada2.value
    var nota3 = entrada3.value
    var media =  (nota1 + nota2 + nota3) /3
   
    if(media >= 7 ){
      alert("Aprovado") 
    }
    if(media < 7 ){ 
     alert("Reprovado") 


     
    }
}