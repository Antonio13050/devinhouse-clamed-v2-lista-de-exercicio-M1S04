function calculaMedia() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let numero3 = parseInt(document.getElementById('numero3').value);

  
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        return alert("Preencha todos os números");
      }
 
        let media = (numero1 + numero2 + numero3) / 3

        let resultado = document.getElementById('resultado')

        resultado.innerHTML = "Média: " + media;
   
  
}
  
