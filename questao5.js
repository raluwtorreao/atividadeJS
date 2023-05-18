function q5(mensagem){
    return parseFloat(prompt(mensagem));
}
var nome = window.prompt("Digite o nome do aluno: ")
var nota1 = q5("Digite a nota: ")
var nota2 = q5("Digite a nota: ")
var nota3 = q5("Digite a nota: ")

parseInt(nota1)
parseInt(nota2)
parseInt(nota3)

var media = ((nota1 + nota2 + nota3)/3)

if(media => 8) window.alert("Estudante " + nome + " FOI APROVADO com nota " + media); else alert("Estudante " + nome + " NÃO FOI APROVADO com nota " + media)
