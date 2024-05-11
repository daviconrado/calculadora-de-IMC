function main(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    function recebeEventoForm(evento){
        evento.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const resultadoFinal = (peso.value / altura.value**2).toFixed(2);
        if (resultadoFinal<18.5){
            resultado.innerHTML = `<p>Seu IMC é ${resultadoFinal} (Abaixo do peso)</p>`
            resultado.classList.add('verde');
        }
        else if (resultadoFinal>=18.5 && resultadoFinal<=24.9){
            resultado.innerHTML = `<p>Seu IMC é ${resultadoFinal} (Peso Normal)</p>`
            resultado.classList.add('verde');
        }
        else if (resultadoFinal>=25 && resultadoFinal<=29.9){
            resultado.innerHTML = `<p>Seu IMC é ${resultadoFinal} (Sobrepeso)</p>`
            resultado.classList.add('verde');
        }
        else if (resultadoFinal>=30 && resultadoFinal<=34.9){
            resultado.innerHTML = `<p>Seu IMC é ${resultadoFinal} (Obesidade Grau 1)</p>`
            resultado.classList.add('verde');
        }
        else if (resultadoFinal>=35 && resultadoFinal<=39.9){
            resultado.innerHTML = `<p>Seu IMC é ${resultadoFinal} (Obesidade Grau 2)</p>`
            resultado.classList.add('verde');
        }
        else if (resultadoFinal>=40){
            resultado.innerHTML = `<p>Seu IMC é ${resultadoFinal} (Obesidade Grau 3)</p>`
            resultado.classList.add('verde');
        }
        else{
            resultado.innerHTML = `<p>Dados inválidos</p>`
            resultado.classList.replace('verde', 'vermelho');
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}
main();