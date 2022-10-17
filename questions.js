const teste = () => {
    console.log('works')
}


const imc = () => {
    // let peso = Number(prompt("Digite seu peso:"));
    // let alt = Number(prompt("Digite sua altura:"));
    const peso = Number(document.getElementById('peso').value);
    const alt = Number(document.getElementById('alt').value);
    console.log(peso,alt)
    const res = peso / (alt * alt);
    const formatado = (res * 10000).toFixed(1)

    //console.log(formatado)

    if (formatado < 20.7) {
        alert(`seu imc é ${formatado} // Você está abaixo do peso`);
    } else if (formatado >= 20.7 && formatado < 26.4) {
         alert(`seu imc é ${formatado} // Você está no peso ideal`);
    } else if (formatado >= 26.4 && formatado < 27.9) {
        alert(`seu imc é ${formatado} // Você está um pouco acima do peso`);
    } else if (formatado >= 27.9 && formatado < 31.1) {
        alert(`seu imc é ${formatado} // Você está acima do peso`);
    } else if (formatado >= 31.1) {
        alert(`seu imc é ${formatado} // Você está acima da obesidade`);
    }
}