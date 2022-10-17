const btnImc = document.getElementById('btnImc');
const alertBox = document.getElementById('alertbox');

btnImc.addEventListener('click', (e) => {
    e.preventDefault();

    var div = document.createElement('div');
    div.innerHTML += `
        <div id="alertbox" class="alertbox">
            <h1>Questão 1</h1>
            <label for="">Digite o Peso</label>
            <input type="number" name="" id="peso">
            <label for="">Digite a Altura(cm)</label>
            <input type="number" name="" id="alt">
            <button onclick="imc()">Calcular</button>
        </div>

    `;
    alertBox.appendChild(div);
})
