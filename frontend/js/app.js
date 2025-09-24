// URL do backend no Render
const BACKEND_URL = 'https://integracao-backend-frontend.onrender.com';

// Requests the GET endpoint and displays the returned message
async function buscarMensagem() {
    const hero = document.getElementById("hero");

    try {
        const response = await fetch(`${BACKEND_URL}/api/mensagem`);
        const data = await response.text();
        document.getElementById('resultado-get').innerText = data;
        hero.style.opacity = 1;
    } catch (error) {
        alert('Erro ao buscar mensagem: ' + error.message);
    }
}

// Sends data to the POST endpoint and displays the response
async function enviarDados() {
    const dados = document.getElementById('dados-input').value;
    if (!dados) return alert("Por favor, insira algum dado antes de enviar.");

    try {
        const response = await fetch(`${BACKEND_URL}/api/dados`, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: dados
        });
        const data = await response.text();
        document.getElementById('resultado-post').innerText = data;
    } catch (error) {
        alert('Erro ao enviar dados: ' + error.message);
    }
}

// Limpa campos e resultados
function limparCampos() {
    document.getElementById('resultado-get').innerText = '';
    document.getElementById('resultado-post').innerText = '';
    document.getElementById('dados-input').value = '';
}