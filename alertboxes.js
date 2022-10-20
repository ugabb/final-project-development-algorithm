const btnImc = document.getElementById("btnImc");
const btnMaior = document.getElementById("btnMaior");
const btnTabuada = document.getElementById("btnTabuada");
const btnNomes = document.getElementById("btnNomes");
const btnOrdenar = document.getElementById("btnOrdenar");
const btnAntecessor = document.getElementById("btnAntecessor");
const btnRetangulo = document.getElementById("btnRetangulo");
const btnDias = document.getElementById("btnDias");
const btnVotos = document.getElementById("btnVotos");
const btnSalario = document.getElementById("btnSalario");
const btnFabrica = document.getElementById("btnFabrica");

const alertBox = document.getElementById("alertboxContainer");

//AlertBox para a função IMC
btnImc.addEventListener("click", (e) => {
  e.preventDefault();

  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 1</h1>
            <label for="">Digite o Peso(kg)</label>
            <input type="number" name="" id="peso">
            <label for="">Digite a Altura(cm)</label>
            <input type="number" name="" id="alt">
            <button class="btn" id="btnRes" onclick="imc()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>

    `;
  alertBox.appendChild(div);
});

btnMaior.addEventListener("click", (e) => {
  e.preventDefault();

  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 2 - Maior Valor</h1>
            <label for="">Digite 20 valores positivos</label>
            <div class="inputContainer">
                <input type="number" name="" id="valores">
                <button id="addValor" class="add" onclick="addArray()">+</button>
            </div>
            <div id="list"></div>
            <button class="btn" id="btnRes" onclick="maior()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>

    `;
  alertBox.appendChild(div);
});

btnTabuada.addEventListener("click", (e) => {
  e.preventDefault();

  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 3 - Tabuada</h1>
            <label for="">Digite um valor para calcular a sua tabuada:</label>
            <input type="number" id="tabuada">
            <button class="btn" id="btnRes" onclick="tabuada()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
  alertBox.appendChild(div);
});

btnNomes.addEventListener("click", (e) => {
  e.preventDefault();

  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 4 - Nomes</h1>
            <label for="">Digite 10 nomes para conferir se existe</label>
            <div class="inputContainer">
                <input type="text" id="names">
                <button id="addName" class="add" onclick="addName()">+</button>
            </div>
            <label for="">Digite o nome para procurar</label>
            <input type="text" id="name">
            <div id="list"></div>
            <button class="btn" id="btnRes" onclick="nomes()">Procurar</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
  alertBox.appendChild(div);
});

btnOrdenar.addEventListener("click", (e) => {
  e.preventDefault();

  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 5 - Ordenar</h1>
            <label for="">Digite 10 números para ordenar crescentemente:</label>
            <div class="inputContainer">
                <input type="text" id="valores">
                <button id="addName" class="add" onclick="addArray()">+</button>
            </div>
            <div id="list"></div>
            <button class="btn" id="btnRes" onclick="ordenar()">Ordenar</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
  alertBox.appendChild(div);
});

btnAntecessor.addEventListener("click", (e) => {
  e.preventDefault();

  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 6 - Antecessor</h1>
            <label for="">Digite um número para calcular seu antecessor</label>
            <input type="text" id="valores">
            <button class="btn" id="btnRes" onclick="ordenar()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
  alertBox.appendChild(div);
});

btnRetangulo.addEventListener("click", (e) => {
  e.preventDefault();
  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 7 - Área do retângulo</h1>
            <label for="">Digite a altura</label>
            <input type="text" id="altura">
            <label for="">Digite a base</label>
            <input type="text" id="base">
            <button class="btn" id="btnRes" onclick="()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
  alertBox.appendChild(div);
});

btnDias.addEventListener("click", (e) => {
  e.preventDefault();
  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 8 - Dias vividos</h1>
            <label for="">Digite sua data de nascimento:</label>
            <input type="text" id="dtNasc">
            <button class="btn" id="btnRes" onclick="()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
  alertBox.appendChild(div);
});

btnVotos.addEventListener("click", (e) => {
  e.preventDefault();
  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 9 - Percentual de Votos</h1>
            <label for="">número total de eleitores</label>
            <input type="text" id="valores">
            <label for="">número de votos brancos</label>
            <input type="text" id="valores">
            <label for="">número de votos nulos</label>
            <input type="text" id="valores">
            <label for="">número de votos válidos</label>
            <input type="text" id="valores">

            <button class="btn" id="btnRes" onclick="()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
  alertBox.appendChild(div);
});

btnSalario.addEventListener("click", (e) => {
  e.preventDefault();
  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 10 - Reajuste de Salário</h1>
            <label for="">Digite seu salário:</label>
            <input type="text" id="salario">
            <label for="">Digite o reajuste:</label>
            <input type="text" id="reajuste">

            <button class="btn" id="btnRes" onclick="()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
  alertBox.appendChild(div);
});
btnFabrica.addEventListener("click", (e) => {
  e.preventDefault();
  var div = document.createElement("div");
  div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 11 - Custo da Fábrica</h1>
            <label for="">Digite seu salário:</label>
            <input type="text" id="salario">
            <label for="">Digite o reajuste:</label>
            <input type="text" id="reajuste">

            <button class="btn" id="btnRes" onclick="()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
  alertBox.appendChild(div);
});

// Botão para voltar
const voltar = () => {
  const res = document.getElementById("alertbox");

  res.remove();
};
