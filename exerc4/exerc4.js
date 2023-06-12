function exibir() {
    let aluno = {};
    
    aluno.nome = document.getElementById('nome').value;
    aluno.idade = document.getElementById('idade').value;

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<h3>Nome: ${aluno.nome}</h3> <h3>Idade: ${aluno.idade}</h3>`;
   
}
