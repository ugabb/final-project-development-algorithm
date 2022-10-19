const btnImc = document.getElementById('btnImc');
const btnMaior = document.getElementById('btnMaior');
const btnTabuada = document.getElementById('btnTabuada');
const btnNomes = document.getElementById('btnNomes');
const alertBox = document.getElementById('alertboxContainer');

//AlertBox para a função IMC
btnImc.addEventListener('click', (e) => {
    e.preventDefault();

    var div = document.createElement('div');
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
})


btnMaior.addEventListener('click', e => {
    e.preventDefault();

    var div = document.createElement('div');
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
})


btnTabuada.addEventListener('click', e => {
    e.preventDefault();

    var div = document.createElement('div');
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
})



btnNomes.addEventListener("click", (e) => {
    e.preventDefault();

    var div = document.createElement('div');
    div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 4 - Nomes</h1>
            <label for="">Digite 10 nomes para conferir se existe</label>
            <div class="inputContainer">
                <input type="text" id="nomes">
                <button id="addName" class="add" onclick="addName()">+</button>
            </div>
            <div id="list"></div>
            <button class="btn" id="btnRes" onclick="nomes()">Calcular</button>
            <div id="res"></div>
            <button class="btn" id="voltar" onclick="voltar()">Voltar</button>
        </div>
    `;
    alertBox.appendChild(div);
})






// Botão para voltar
const voltar = () => {
    const res = document.getElementById('alertbox');

    res.remove();
}