const total=document.getElementById("total");
const entrada=document.getElementById("entrada");
const qPessoas=document.getElementById("qPessoas");
const botao=document.getElementById("button");
const model1=document.getElementById("model1");
const btSim=document.getElementById("btSim");
const btNao=document.getElementById("btNao");



botao.onclick=()=>{
 if (total.value=="" || qPessoas.value==""){
alert("campo vazio")
 }else { 
model1.showModal();
 }
}

btSim.onclick=()=>{
    model1.close();
}
