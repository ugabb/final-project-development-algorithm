


const teste = () => {
    console.log('works')
}


const imc = () => {
    // let peso = Number(prompt("Digite seu peso:"));
    // let alt = Number(prompt("Digite sua altura:"));
    const peso = Number(document.getElementById('peso').value);
    const alt = Number(document.getElementById('alt').value);
    console.log(peso, alt)
    const res = peso / (alt * alt);
    const formatado = (res * 10000).toFixed(1)

    //console.log(formatado)
    const pRes = document.getElementById('res');

    if (formatado < 20.7) {
        const div = document.createElement('div');
        div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está abaixo do peso</p>`;
        pRes.appendChild(div);

    } else if (formatado >= 20.7 && formatado < 26.4) {
        const div = document.createElement('div');
        div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está no peso ideal</p>`;
        pRes.appendChild(div);
    } else if (formatado >= 26.4 && formatado < 27.9) {
        const div = document.createElement('div');
        div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está um pouco acima do peso</p>`;
        pRes.appendChild(div);
    } else if (formatado >= 27.9 && formatado < 31.1) {
        const div = document.createElement('div');
        div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está acima do peso</p>`;
        pRes.appendChild(div);
    } else if (formatado >= 31.1) {
        const div = document.createElement('div');
        div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está acima da obesidade</p>`;
        pRes.appendChild(div);
    }





    // const div = document.createElement('div');
    // div.innerHTML = `<p></p>`



}

let array = [];

const addArray = () => {
    const valores = document.getElementById('valores').value;
    const pRes = document.getElementById('list');
    
    if (valores >= 0) {
        var valor = Number(valores);
        if(array.length < 20){
           array.push(valor);
        }else{
            alert('Vetor cheio');
        }
        
        console.log(array)
        // const div = document.createElement('p');
        // div.innerHTML = `<p style="text-align:center;">${array}</p>`;
        // pRes.appendChild(div);
    } else {
        alert('Digite valores maior que 0');
    }
}

const maior = () => {
    const pRes = document.getElementById('res');
    var maior = array[0];
    for (let i = 0; i <= array.length; i++) {

        if (array[i] > maior) {
            maior = array[i];
        }
    }
    const div = document.createElement('div');
    div.innerHTML = `<p style="text-align:center;">O maior valor é ${maior}</p>`;
    pRes.appendChild(div);

    return console.log(maior);
}