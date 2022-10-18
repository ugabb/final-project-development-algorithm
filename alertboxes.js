const btnImc = document.getElementById('btnImc');
const btnMaior = document.getElementById('btnMaior');
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












// Botão para voltar
const voltar = () => {
    const res = document.getElementById('alertbox');

    res.remove();
}