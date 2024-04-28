const total=document.getElementById("total");
const entrada=document.getElementById("entrada");
const qPessoas=document.getElementById("qPessoas");
const botao=document.getElementById("button");
const model1=document.getElementById("model1");
const model2=document.getElementById("model2");
const btSim=document.getElementById("btSim");
const btNao=document.getElementById("btNao");
const btConcluir=document.getElementById("btConcluir");
const v1=document.getElementById("v1");
const v2=document.getElementById("v2");
const v3=document.getElementById("v3");




botao.onclick=()=>{
 if (total.value=="" || qPessoas.value==""){
alert("campo vazio")
 }else { 
model1.showModal();
 }
}

btSim.onclick=()=>{
    let a = calcular(qPessoas.value, total.value, 10);
    if (entrada.value == 'sim') {
        a = a + (5 / qPessoas.value);
        let b = total.value - ((10 * total.value) / 100);
        imprimir(a,b, 5);
        model1.close();
        model2.showModal();
    } else {

        let b = total.value - ((10 * total.value) / 100);
        imprimir(a,b, 0);
        model1.close();
        model2.showModal();

    }
}

btNao.onclick = () => {

    let a = calcular(qPessoas.value, total.value, 0);
    if (entrada.value == 'sim') {
        a = a + (5 / qPessoas.value);
        let b = total.value;
        imprimir(a,b,5)
        model1.close();
        model2.showModal();
    } else {

        let b = total.value;
        imprimir(a,b,0)
        model1.close();
        model2.showModal();
        
    }
    
}


btConcluir.onclick = () => {
    model2.close();
    qPessoas.value = '';
    total.value = '';
    
}

function imprimir(a, b, c){
    v1.innerHTML = `Total do consumo: ${b.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
    v2.innerHTML = `Taxa de serviço: ${c.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
    v3.innerHTML =`Total por pessoa: ${a.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} R$`;
}

function calcular(pessoas, valorConta, porcentagem) {

    if(porcentagem == 0){
        return valorConta  / pessoas; 
    }else {
        return (valorConta - ((porcentagem * valorConta) / 100)) / pessoas; 
    }
}