let saldo = document.querySelector('#dinsaldo')
let entradas = document.querySelector('#dinentradas')
let saida = document.querySelector('#dinsaida')
let btnoperacao = document.querySelector('#btn')
let popup = document.querySelector('.fundo-escuro')
let operacoes = []
let valorsaldo = 0;




btnoperacao.addEventListener('click', addnovaop)

function addnovaop(){
    popup.classList.toggle('popup')
    let btnadicionar = document.querySelector('#add')
    btnadicionar.addEventListener('click', ()=>{
        let descricao = document.querySelector('#labeldescrição').value
        
        let tipo = document.querySelector('#labeltipo').value
        
        let categoria = document.querySelector('#labelcate').value
        
        let valor = document.querySelector('#labelvalor').value
        
        valor =Number(valor)

        
        if (!isNaN(valor)) {
            if (tipo ==='entrada') {
                valorsaldo+=valor
            } else {
                valorsaldo-=valor
            }
            console.log(valorsaldo)
            atualizardados(valorsaldo)
            popup.classList.remove('popup')
            document.querySelector('#labelvalor').value = ''
        } else {
            return
        }
        console.log(popup)

    })
    let btncancelar = document.querySelector('#can')
    btncancelar.addEventListener('click', ()=>{
        popup.classList.remove('popup')
    })

    
}
function atualizardados(saldovalor, entradas, despesas){
    saldo.textContent = 'R$ ' + saldovalor
}