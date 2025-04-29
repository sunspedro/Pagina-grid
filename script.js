document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById('botao-benef');
    
    if (botao) {
        botao.addEventListener('click', () => {
            window.location.href = '';
        });
    }
});
