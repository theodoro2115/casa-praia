// Variáveis globais
let currentSlideIndex = 0;
let currentDate = new Date()
let isAdminMode = false;
let occupiedDates = new Set()// Armazena datas ocupadas
let selectedDates = new Set()// Armazena datas selecionadas pelo usuário

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel()
    initializeCalendar()
    initializeSmoothScroll()
    
    // Carregar dados salvos do localStorage
    loadCalendarData()
})

// === CARROSSEL DE FOTOS ===
function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot')
    
    if (slides.length === 0) return;
    
    // Mostrar primeiro slide
    showSlide(0);
    
    // Auto-play do carrossel
    setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }, 5000);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide')
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1
    showSlide(currentSlideIndex)
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide')
    const dots = document.querySelectorAll('.dot');
    
    // Esconder todos os slides
    slides.forEach(slide => slide.classList.remove('active'))
    dots.forEach(dot => dot.classList.remove('active'))
    
    // Mostrar slide atual
    if (slides[index]) {
        slides[index].classList.add('active')
    }
    if (dots[index]) {
        dots[index].classList.add('active')
    }
}

// === NAVEGAÇÃO SUAVE ===
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav a')
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault()
            
            const targetId = this.getAttribute('href')
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight
                const targetPosition = targetSection.offsetTop - headerHeight
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === FUNCIONALIDADES ADICIONAIS ===

// Fechar modal ao clicar fora dele
window.addEventListener('click', function(event) {
    const modal = document.getElementById('adminModal')
    if (event.target === modal) {
        closeAdminModal()
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAdminModal();
    }
});

// Atualizar calendário quando a data muda
setInterval(() => {
    const now = new Date()
    if (now.getDate() === 1 && now.getHours() === 0 && now.getMinutes() === 0) {
        updateCalendarDisplay();
    }
}, 60000); // Verificar a cada minuto

// Função para gerar mensagem do WhatsApp com datas selecionadas
function generateWhatsAppMessage() {
    if (selectedDates.size === 0) {
        return "Olá! Gostaria de saber mais sobre a casa de temporada em Itanhaém."
    }
    
    const dates = Array.from(selectedDates).sort()
    const formattedDates = dates.map(date => {
        const d = new Date(date + 'T00:00:00')
        return d.toLocaleDateString('pt-BR')
    }).join(', ');
    
    return `Olá! Gostaria de fazer uma reserva da casa em Itanhaém para as seguintes datas: ${formattedDates}`
}

// Atualizar links do WhatsApp quando datas são selecionadas
function updateWhatsAppLinks() {
    const message = generateWhatsAppMessage()
    const encodedMessage = encodeURIComponent(message)
    
    const whatsappLinks = document.querySelectorAll('.whatsapp-btn')
    whatsappLinks.forEach(link => {
        const href = link.getAttribute('href')
        const baseUrl = href.split('?')[0]
        link.setAttribute('href', `${baseUrl}?text=${encodedMessage}`)
    });
}

// Atualizar links do WhatsApp quando datas são selecionadas
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('calendar-day')) {
        setTimeout(updateWhatsAppLinks, 100);
    }
});

// Animação de entrada para elementos quando ficam visíveis
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature, .beach-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
    
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
        }
    });
}

// Inicializar animações de scroll
window.addEventListener('scroll', animateOnScroll)

// CSS para animações de entrada
const style = document.createElement('style')
style.textContent = `
    .feature, .beach-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
`;
document.head.appendChild(style)

// Executar animação inicial
setTimeout(animateOnScroll, 100)

