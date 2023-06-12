function exibir() {
    
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = "<h3>Nome completo: " + nome + " " + sobrenome + "</h3>";   
}