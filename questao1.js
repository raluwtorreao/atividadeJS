function q1(mensagem){
    return parseFloat(prompt(mensagem));
}
var num1 = q1("Digite um número")
var num2 = q1("Digite um número")
var num3 = q1("Digite um número")

parseInt(num1)
parseInt(num2)
parseInt(num3)

var media = (num1*num2*num3)/3
window.alert("A média é igual à: "+ media)
