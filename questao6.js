function q6(mensagem){
    return parseFloat(prompt(mensagem));
}

var num1 = q6("Digite o primeiro número: ")
var num2 = q6("Digite o segundo número: ")
var operacao = q6("Digite a operação desejada (1 para adição, 2 para multiplicação, 3 para divisão): ")
var resultado
 
    switch (operacao) {
      case 1: resultado = num1 + num2; break;
      case 2: resultado = num1 * num2; break;
      case 3: resultado = num1 / num2; break;
      default:window.alert("Código de seleção inválido!")
    }
 
  window.alert(`O resultado é: ${resultado}`);
