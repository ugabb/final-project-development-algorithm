const teste = () => {
  console.log("works");
};

const imc = () => {
  // let peso = Number(prompt("Digite seu peso:"));
  // let alt = Number(prompt("Digite sua altura:"));
  const peso = Number(document.getElementById("peso").value);
  const alt = Number(document.getElementById("alt").value);
  console.log(peso, alt);
  const res = peso / (alt * alt);
  const formatado = (res * 10000).toFixed(1);

  //console.log(formatado)
  const pRes = document.getElementById("res");

  if (formatado < 20.7) {
    const div = document.createElement("div");
    div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está abaixo do peso</p>`;
    pRes.appendChild(div);
  } else if (formatado >= 20.7 && formatado < 26.4) {
    const div = document.createElement("div");
    div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está no peso ideal</p>`;
    pRes.appendChild(div);
  } else if (formatado >= 26.4 && formatado < 27.9) {
    const div = document.createElement("div");
    div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está um pouco acima do peso</p>`;
    pRes.appendChild(div);
  } else if (formatado >= 27.9 && formatado < 31.1) {
    const div = document.createElement("div");
    div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está acima do peso</p>`;
    pRes.appendChild(div);
  } else if (formatado >= 31.1) {
    const div = document.createElement("div");
    div.innerHTML = `<p style="text-align:center;">Seu IMC é ${formatado} <br> Você está acima da obesidade</p>`;
    pRes.appendChild(div);
  }

  // const div = document.createElement('div');
  // div.innerHTML = `<p></p>`
};

let array = [];
let count = 0;
const addArray = () => {
  const valores = document.getElementById("valores").value;

  if (valores >= 0) {
    var valor = Number(valores);
    if (array.length < 20) {
      array.push(valor);
    } else {
      alert("Vetor cheio");
    }

    console.log(array);

    // contador de numeros no array
    count += 1;
    document.getElementById("list").innerHTML = count;
  } else {
    alert("Digite valores maior que 0");
  }
};

const maior = () => {
  const pRes = document.getElementById("res");
  var maior = array[0];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  const div = document.createElement("div");
  div.innerHTML = `<p style="text-align:center;">O maior valor é ${maior}</p>`;
  pRes.appendChild(div);

  return console.log(maior);
};

const tabuada = () => {
  const pRes = document.getElementById("res");
  const tabudaValue = Number(document.getElementById("tabuada").value);

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let resposta = [];

  for (let i = 0; i < array.length; i++) {
    resposta.push(tabudaValue * i);
    document.getElementById(
      "res"
    ).innerHTML += `${tabudaValue} * ${i} = ${resposta[i]} / `;
    console.log(resposta);
    // const div = document.createElement('div');
    // div.innerHTML = `
    //         <p style="text-align:center; width:70px;">${tabudaValue} x ${i} = ${resposta[i]}</p>
    // `;
    // pRes.appendChild(div);
  }
};

let nomesArray = [];
count = 0;
const addName = () => {
  const nome = document.getElementById("names").value;
  if (nome != "" && nome != " ") {
    nomesArray.push(nome);
    count += 1;
    document.getElementById("list").innerHTML = count;
  } else {
    alert("Digite algo!");
  }

  console.log(nomesArray);
};
const nomes = () => {
  const name = document.getElementById("name").value;
  const res = document.getElementById("res");
  let existe = false;
  for (let i = 0; i < nomesArray.length; i++) {
    if (name == nomesArray[i]) {
      existe = true;
    }
  }
  if (existe == true) {
    const div = document.createElement("div");
    div.innerHTML = `
            <p style="text-align:center;">Achei</p>
        `;
    res.appendChild(div);
  } else {
    const div = document.createElement("div");
    div.innerHTML = `
            <p style="text-align:center">Não achei</p>
        `;
    res.appendChild(div);
  }
};

const ordenar = () => {
  const pRes = document.getElementById("res");
  for (let i = array.length - 1; i > 0; i--) {
    var troca = 0;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        troca = 1;
      }
    }
  }
  const div = document.createElement("div");
  div.innerHTML = `
        <p style="text-align:center;">${array}</p>
    `;
  pRes.appendChild(div);
  if (troca == 0) return;
};

const antecessor = () => {
  const pRes = document.getElementById("res");
  const valor = document.getElementById("valor").value;
  res = valor - 1;
  const div = document.createElement("div");
  div.innerHTML = `
        <p style="text-align:center;">${res}</p>
    `;
  pRes.appendChild(div);
};

const area = () => {
  const pRes = document.getElementById("res");
  const altura = document.getElementById("altura").value;
  const base = document.getElementById("base").value;

  const res = base * altura;

  const div = document.createElement("div");
  div.innerHTML = `
        <p style="text-align:center;">${res}</p>
    `;
  pRes.appendChild(div);
};

const dtNascimento = () => {
  const pRes = document.getElementById("res");
  const date = document.getElementById("dtNasc").value;
  const dateSplit = date.split("-");

  let dayn = Number(dateSplit[2]);
  let mounthn = Number(dateSplit[1]);
  let yearn = Number(dateSplit[0]);

  const d = new Date();
  const mounth = d.getMonth();
  const day = d.getDay();
  const year = d.getFullYear();

  let days = 0;
  while (yearn < year || mounthn < mounth || dayn < day) {
    days++;
    dayn++;
    if (dayn > 30) {
      dayn = 1;
      mounthn++;
      if (mounthn > 12) {
        yearn++;
        mounthn = 1;
      }
    }
  }
  const div = document.createElement("div");
  div.innerHTML = `
        <p style="text-align:center;">${days} dias</p>
    `;
  pRes.appendChild(div);
};

const votos = () => {
  const pRes = document.getElementById("res");
  const total = Number(document.getElementById("total").value);
  const brancos = Number(document.getElementById("brancos").value);
  const nulos = Number(document.getElementById("nulos").value);
  const validos = Number(document.getElementById("validos").value);

  const percValido = (validos / total) * 100;
  const percBranco = (brancos / total) * 100;
  const percNulo = (nulos / total) * 100;

  const div = document.createElement("div");
  div.innerHTML = `
        <p style="text-align:center;">Válidos:${percValido}% <br> Brancos:${percBranco}% <br> Nulos: ${percNulo}%</p>
  `;
  pRes.appendChild(div);
};

const reajuste = () => {
  const pRes = document.getElementById("res");
  const salario = Number(document.getElementById("salario").value);
  const reajuste = parseFloat(document.getElementById("reajuste").value);
  console.log(reajuste)

  const reajusteCalculo = ((salario * reajuste) / 100);
  const reajusteTotal = reajusteCalculo + salario
  
  const div = document.createElement("div");
  div.innerHTML = `
        <p style="text-align:center;">Seu salário com o reajuste:R$${reajusteTotal}</p>
  `;
  pRes.appendChild(div);
};
