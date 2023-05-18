function q2(mensagem){
    return parseFloat(prompt(mensagem));
}

var nome_funcionário = q2("Digite o nome do contribuinte: ")
var salario = q2("Digite o valor do salário: ")

parseInt(salario)

var novo_salario = salario + ((salario*10)/100)

window.alert("O valor do novo salário é: "+ novo_salario + " reais")
