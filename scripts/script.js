let saldo = document.querySelector('#dinsaldo')
let entradas = document.querySelector('#dinentradas')
let saida = document.querySelector('#dinsaida')
let btnoperacao = document.querySelector('#btn')
let popup = document.querySelector('.fundo-escuro')
let operacoes = []
let valorsaldo = 0;
let valorentradas = 0;
let valorsaida = 0;
let alimentação = 0
let transporte = 0
let lazer = 0
let appali = document.querySelector('#valorali')
let apptrans = document.querySelector('#valortrans')
let applazer = document.querySelector('#valorlazer')



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
                valorentradas+=valor
                if (categoria === 'alimentação') {
                    alimentação+=valor
                    console.log('aq')
                }
                else if(categoria  ==='transporte'){
                    transporte+=valor
                }
                else{
                    lazer+=valor
                }
            } 
            else {
                valorsaldo-=valor
                valorsaida+=valor
            }
            console.log(valorsaldo)
            atualizardadosgrafico(alimentação, transporte, lazer)
            atualizardados(valorsaldo, valorentradas, valorsaida)
            
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
function atualizardados(saldovalor, entradasvalor, despesas){
    saldo.textContent = 'R$ ' + saldovalor
    entradas.textContent = 'R$ ' + entradasvalor
    saida.textContent = 'R$ ' + despesas
}
function atualizardadosgrafico(alimentaçãoapp, trasn, laz){
    appali.textContent = 'R$ ' + alimentaçãoapp
    apptrans.textContent = 'R$ ' + trasn
    applazer.textContent = 'R$ ' + laz
}