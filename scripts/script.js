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
let clonado = document.querySelector('#entradabtn')
let clonadosaida = document.querySelector('#saidabtn')
const todosPopus = document.querySelector('#todos')
const entradaPopus = document.querySelector('#tdsentradas')
const despesasPopus = document.querySelector('#tdsdespesas')
let divali = document.querySelector('#tamanhoalimentação')
let divtrans = document.querySelector('#tamanhotransporte')
let divlaz = document.querySelector('#tamanholazer')
todosPopus.addEventListener('click', atualizarpopus)
entradaPopus.addEventListener('click', entrada)
despesasPopus.addEventListener('click', despesas)

btnoperacao.addEventListener('click', addnovaop)
let btnadicionar = document.querySelector('#add')
btnadicionar.addEventListener('click', adicionar)
function addnovaop(){
    popup.classList.toggle('popup')
}
let btncancelar = document.querySelector('#can')
btncancelar.addEventListener('click', ()=>{
    popup.classList.remove('popup')
})
function adicionar(){
    let descricao = document.querySelector('#labeldescrição').value
        
    let tipo = document.querySelector('#labeltipo').value
        
    let categoria = document.querySelector('#labelcate').value
        
    let valor = document.querySelector('#labelvalor').value
    
        
        
    if(valor ===''){
        return
    }
    valor = Number(valor)
    if (!isNaN(valor)) {
        operacoes.unshift({
        'descricao':descricao,
        'tipo':tipo,
        'categoria':categoria,
        'valor':valor
        })
        localStorage.setItem("operacoes", JSON.stringify(operacoes));
        if (tipo ==='entrada') {
            valorsaldo+=valor
            valorentradas+=valor
                
        } 
        else {
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
            valorsaldo-=valor
            valorsaida+=valor
        }
        console.log(valorsaldo)
        atualizardadosgrafico(alimentação, transporte, lazer)
        atualizardados(valorsaldo, valorentradas, valorsaida)
        atualizarpopus()
            
        popup.classList.remove('popup')
        document.querySelector('#labelvalor').value = ''
    
    }
     else {
        return
    }
    console.log(popup)
    console.log(operacoes)

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
    let todos = [alimentaçãoapp, trasn, laz]
    let maior = 0;
    for (let i = 0; i<todos.length; i++){
        
        if(todos[i] > maior){
            maior = todos[i]
        }
        
    }
    let graficoali = (alimentaçãoapp/ maior) * 100
    let graficotrans = (trasn/ maior) * 100
    let graficolaz = (laz/ maior) * 100
    divali.style.width = graficoali + '%'
    divtrans.style.width = graficotrans + '%'
    divlaz.style.width = graficolaz + '%'
    
}
function atualizarpopus(){
    let secao = document.querySelector('#secao4')
    secao.innerHTML = ''
    
    for(let i =0 ; operacoes.length > i ; i++){
        
        if(operacoes[i].tipo ==='entrada'){
            let clone = clonado.cloneNode(true)
            clone.querySelector('#descrição').textContent = operacoes[i].descricao
            clone.querySelector('#valorentrada').textContent = 'R$ ' + operacoes[i].valor
            clone.style.display = 'flex'
            secao.appendChild(clone)
            

        }
        else{
            let clone = clonadosaida.cloneNode(true)
            clone.querySelector('#descrição').textContent = operacoes[i].descricao
            clone.querySelector('#valorsaida').textContent = 'R$ ' + operacoes[i].valor
            clone.style.display = 'flex'
            secao.appendChild(clone)


        }

    }
}
function entrada(){
    let secao = document.querySelector('#secao4')
    secao.innerHTML = ''
    
    for(let i =0 ; operacoes.length > i ; i++){
        
        if(operacoes[i].tipo ==='entrada'){
            let clone = clonado.cloneNode(true)
            clone.querySelector('#descrição').textContent = operacoes[i].descricao
            clone.querySelector('#valorentrada').textContent = 'R$ ' + operacoes[i].valor
            clone.style.display = 'flex'
            secao.appendChild(clone)
            

        }

    }
}
function despesas(){
    let secao = document.querySelector('#secao4')
    secao.innerHTML = ''
    
    for(let i =0 ; operacoes.length > i ; i++){
        
    
        if(operacoes[i].tipo ==='saida'){
            let clone = clonadosaida.cloneNode(true)
            clone.querySelector('#descrição').textContent = operacoes[i].descricao
            clone.querySelector('#valorsaida').textContent = 'R$ ' + operacoes[i].valor
            clone.style.display = 'flex'
            secao.appendChild(clone)


        }

    }
}


window.onload = ()=>{
    let operacoesArmazenadas = localStorage.getItem('operacoes')
    console.log(operacoesArmazenadas)
    if (operacoesArmazenadas) {
        operacoes = JSON.parse(operacoesArmazenadas)
        console.log(operacoes)
        atualizarpopus()
        atualizarsaldoapos()
        atualizarentradaapos()
        atualizardespesasapos()
        atualizardadosgraficoapos()
    } 
    else {
        return
    }
};
function atualizarsaldoapos(){
    for(let i = 0; operacoes.length > i; i++){
        if(operacoes[i].tipo==='entrada'){
            valorsaldo += operacoes[i].valor
        }
        else{
            valorsaldo -= operacoes[i].valor
        }
    }
    saldo.textContent = 'R$ ' + valorsaldo
    
    
}
function atualizarentradaapos(){
    for(let i = 0; operacoes.length > i; i++){
        if(operacoes[i].tipo==='entrada'){
            valorentradas += operacoes[i].valor
        }
    }
    entradas.textContent = 'R$ ' + valorentradas
    
    
}
function atualizardespesasapos(){
    for(let i = 0; operacoes.length > i; i++){
        if(operacoes[i].tipo==='saida'){
            valorsaida += operacoes[i].valor
        }
    }
    saida.textContent = 'R$ ' + valorsaida
    
    
}
function atualizardadosgraficoapos(){
    
    let maior = 0;
    for(let i = 0; operacoes.length > i; i++){
        if(operacoes[i].tipo==='saida'){
            
            if (operacoes[i].categoria==='alimentação') {
                alimentação += operacoes[i].valor
            } 
            else if(operacoes[i].categoria==='transporte'){
                transporte += operacoes[i].valor
            }
            else if(operacoes[i].categoria==='lazer'){
                lazer += operacoes[i].valor
            }
            let todos = [alimentação, transporte, lazer]
            for (let i = 0; i<todos.length; i++){
        
                if(todos[i] > maior){
                    maior = todos[i]
                }
        
            }
        }
    }
    appali.textContent = 'R$ ' + alimentação
    apptrans.textContent = 'R$ ' + transporte
    applazer.textContent = 'R$ ' + lazer
    let graficoali = (alimentação/ maior) * 100
    
    let graficotrans = (transporte/ maior) * 100

    let graficolaz = (lazer/ maior) * 100
    console.log(graficoali, graficotrans, graficolaz)
    divali.style.width = graficoali + '%'
    divtrans.style.width = graficotrans + '%'
    divlaz.style.width = graficolaz + '%'
    
    
}