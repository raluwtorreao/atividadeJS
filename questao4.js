function q4(mensagem){
    return parseFloat(prompt(mensagem));
}

var preço = q4("Digite o valor do produto: ")
var parcela = q4("Digite a quantidade de parcelas desejadas: ")

parseInt(preço)
parseInt(parcela)

var parcelas_3 = preço + (preço*10/100)
var parcelas_5 = preço + (preço*20/100)

var valor_parcela3 = parcelas_3/parcela
var valor_parcela5 = parcelas_5/parcela
var valor_parcela = preço/parcela

if(parcela === 3) window.alert("O valor total à pagar será de R$" + parcelas_3 + " e o valor das parcelas será de R$" + valor_parcela3);
else if(parcela === 5) window.alert("O valor total à pagar será de R$" + parcelas_5 + " e o valor das parcelas será de R$" + valor_parcela5);
else window.alert("O valor total à pagar será de R$" + preço + " e o valor das parcelas será de: " + valor_parcela)
