/* 
Funcao para calcular:
- Mensalidade +
- Semestralidade + 
- Semestralidade com desconto UniEURO
- Semestralidade com desconto UniEURO + ProUNI 50%
- Semestralidade com desconto UniEURO + ProUNI 100% = R$0 
*/

function calcular() {
    // Valor da mensalidade
    const valor_s = document.getElementById('valor')
    const valor = Number(valor_s.value)

    // Porcentagem
    const porcentagem_s = document.getElementById('percentual')
    const porcentagem = Number(porcentagem_s.value)

    // CheckBox: ProUNI 50% e 100%
    const prouni = document.getElementsByName('prouni')
    
    // Variavel de retorno div
    const retorno = document.getElementById('retorno')

    // formata o retorno
    retorno.innerHTML = ``

    // Tratamento do valor inicial 
    if (valor < 0) {retorno.innerHTML = `O valor da mensalidade precisa ser positivo`; return false}

    // Tratamento da porcentagem - Se % = 0 or % <> 5 a 45
    if (porcentagem === 0) {
        retorno.innerHTML = `O desconto IES(UniEURO) e obrigatorio`; return false
    } else if (porcentagem < 5 || porcentagem > 45){
        retorno.innerHTML = `O valor da porcentagem tem que estar entre 5% e 45%`; return false
    }
    if (valor == 0) {retorno.innerHTML = `Valor 0`; return false}

    if (valor && porcentagem && prouni[0].checked) {
        retorno.innerHTML = `Valor + porcentagem + ProUNI`
    } else {
        retorno.innerHTML = `Valor + porcentagem`
    }
}