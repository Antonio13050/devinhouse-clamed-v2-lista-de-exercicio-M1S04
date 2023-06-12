function exibir() {
 
    
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let peso1 = parseFloat(document.getElementById('peso1').value);

    let nota2 = parseFloat(document.getElementById('nota2').value);
    let peso2 = parseFloat(document.getElementById('peso2').value);

    let nota3 = parseFloat(document.getElementById('nota3').value);
    let peso3 = parseFloat(document.getElementById('peso3').value);

    let somaNotas = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    let somaPesos = peso1 + peso2 + peso3;

    let media = somaNotas / somaPesos;

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<h3>Media: ${media.toFixed(2)}</h3>`;
   
}