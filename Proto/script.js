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
    // Passou essa desgraca

    // Porcentagem
    const porcentagem_s = document.getElementById('percentual')
    const porcentagem = Number(porcentagem_s.value)
    // Passou tambem

    // CheckBox: ProUNI 50% e 100%
    const prouni = document.getElementsByName('percentual_radio')
    
    // Variavel de retorno div
    const retorno = document.getElementById('retorno')

    // formata o retorno
    retorno.innerHTML = ``

    // Tratamento do valor inicial 
    if (valor < 0) {retorno.innerHTML = `O valor da mensalidade precisa ser positivo`; return false}
    // Primeira condicao funcionou
    
    // Tratamento da porcentagem - Se % = 0 or % <> 5 a 45
    if (porcentagem === 0) {
        retorno.innerHTML = `O desconto IES(UniEURO) é obrigatorio`; return false
    } else if (porcentagem < 5 || porcentagem > 45){
        retorno.innerHTML = `O valor da porcentagem tem que estar entre 5% e 45%`; return false
    }
    // Segunda e Terceira condicoes tambem funcionaram 


    if (valor == 0) {retorno.innerHTML = `Valor 0`; return false}
    // Caso o valor seja 0

    if (valor && porcentagem && prouni[2].checked) {
        retorno.innerHTML = `
        Valor da mensalidade: R$0,00 <br>
        Valor do semestre: R$0,00 <br>
        Valor do semestre com desconto do IES: R$0,00 <br>
        Valor do semestre com desconto do IES e Prouni 100%: R$0,00
        `
    } else if (valor && porcentagem && prouni[1].checked) {
        let semestre = valor * 6
        retorno.innerHTML = `
        Valor da mensalidade: R$${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>
        Valor do semestre: ${semestre.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>
        Valor do semestre com desconto do IES: R$${(semestre - (porcentagem / 100 * semestre)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>
        Valor do semestre com desconto do IES e Prouni 50%: R$${((semestre - (porcentagem / 100 * semestre)) / 2).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        `
    } else {
        let semestre = valor * 6
        retorno.innerHTML = `
        Valor da mensalidade: ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br> 
        Valor do semestre: ${semestre.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>
        Valor do semestre com desconto do IES: ${(semestre - (porcentagem / 100 * semestre)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>
        `
        // Formatacao -> valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }
}