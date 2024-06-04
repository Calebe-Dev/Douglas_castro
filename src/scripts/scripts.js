// script.js

// Adicione código JavaScript se necessário para funcionalidades extras,
// como animações ou interações com o usuário.

// Por exemplo, para ativar a animação de scroll suave para o botão "Agendar Consulta":
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const targetId = event.target.getAttribute('href'); // Pega o ID do elemento de destino
    const targetElement = document.querySelector(targetId); // Seleciona o elemento de destino
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para o elemento de destino
});å