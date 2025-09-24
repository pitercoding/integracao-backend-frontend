// Requests the GET endpoint and displays the returned message
async function buscarMensagem() {
    try {
        const response = await fetch('/api/mensagem'); // Ensure the URL is correct
        const data = await response.text(); // Use .text() for plain text response
        document.getElementById('resultado-get').innerText = data; // Display the response in the div
    } catch (error) {
        alert('Erro ao buscar mensagem: ' + error.message);
    }
}

// Sends data to the POST endpoint and displays the response
async function enviarDados() {
    const dados = document.getElementById('dados-input').value;
    if (!dados) return alert("Por favor, insira algum dado antes de enviar.");

    try {
        const response = await fetch('/api/dados', { // Ensure the URL is correct
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain' // Set content type to plain text
            },
            body: input
        });
        const data = await response.text();
        document.getElementById('resultado-post').innerText = data; // Display the response in the div
    } catch (error) {
        alert('Erro ao enviar dados: ' + error.message);
    }
}