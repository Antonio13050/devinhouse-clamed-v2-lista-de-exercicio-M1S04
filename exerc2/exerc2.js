function calculaImc() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

  
    if (isNaN(peso) || isNaN(altura)) {
        return alert("Preencha todos os campos");
      }
      
        let imc = peso / (altura * altura);

        let resultado = document.getElementById('resultado')

        resultado.innerHTML = "Seu IMC: " + imc.toFixed(1);
   
}
  