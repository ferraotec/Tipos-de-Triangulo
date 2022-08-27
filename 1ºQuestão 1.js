//Selecionar os elementos da Tele
const a = document.querySelector("#lado1");
const b = document.querySelector("#lado2");
const c = document.querySelector("#lado3");
const res = document.querySelector("#Resultado");
const btn = document.querySelector("#verificar");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
//Mostrar ao usuário que o campo não foi atendido
a.onblur = () =>{
    if(a.value == ""){
    l1.style = "color: #aa0044";
    a.style = "border-color: #aa0044";
    }else{
        l1.style = "color: black";
        a.style = "color: black";
    }
}
b.onblur = () =>{
    if(b.value == ""){
    l2.style = "color: #aa0044";
    b.style = "border-color: #aa0044";
    }else{
        l2.style = "color: black";
        b.style = "color: black";
    }
}
c.onblur = () =>{
    if(c.value == ""){
    l3.style = "color: #aa0044";
    c.style = "border-color: #aa0044";
    }else{
        l3.style = "color: black";
        c.style = "color: black";
    }
}
btn.onclick = () => {
    if(a.value ==""){
        a.focus();
    }else if(b.value ==""){
        b.focus();
    }else if(c.value ==""){
        c.focus();
    }else{
        res.value = triangulo(a.value, b.value, c.value);
    }
}

//Fazendo a veriificação 
const triangulo = (a, b, c) => {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
      if (a == b && b == c) {
        return"Triângulo equilátero";
      }
      else if (a == b || a == c || c == b) {
        return"Triângulo isóceles";
      }
      else 
        return"Triângulo escaleno";
      }
 else{
    return"Não é um Triângulo";
}
}
