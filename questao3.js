function q3(mensagem){
    return parseFloat(prompt(mensagem));
}

var A = q3("Digite o valor de A: ")
var B = q3("Digite o valor de B: ")

parseInt(A)
parseInt(B)

var AB = A+B
var C = A*B

if(A === B) window.alert("A + B é igual à: "+ AB); else alert("Valor de C é igual à: " + C)
