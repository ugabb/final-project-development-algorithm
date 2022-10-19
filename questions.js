


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
let count = 0;
const addArray = () => {
    const valores = document.getElementById('valores').value;

    if (valores >= 0) {
        var valor = Number(valores);
        if (array.length < 20) {
            array.push(valor);
        } else {
            alert('Vetor cheio');
        }

        console.log(array)

        // contador de numeros no array
        count += 1;
        document.getElementById('list').innerHTML = count

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

const tabuada = () => {
    const pRes = document.getElementById('res');
    const tabudaValue = Number(document.getElementById('tabuada').value);

    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let resposta = [];



    for (let i = 0; i < array.length; i++) {
        resposta.push(tabudaValue * i);
        document.getElementById('res').innerHTML += `${tabudaValue} * ${i} = ${resposta[i]} / `;
        console.log(resposta)
        // const div = document.createElement('div');
        // div.innerHTML = `
        //         <p style="text-align:center; width:70px;">${tabudaValue} x ${i} = ${resposta[i]}</p>
        // `;
        // pRes.appendChild(div);
    }



}


let nomesArray = [];
count = 0;
const addName = () => {
    const nome = getElementById('nomes').value;
    if (nome != '' && nome != ' ') {
        nomesArray.push(nome);
    } else {
        alert('Digite algo!');
    }
    
    count += 1;
    document.getElementById('list').innerHTML = count

}
const nomes = () => {

console.log('nomes')

}