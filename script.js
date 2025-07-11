// Inicialização dos ícones Lucide
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa os ícones Lucide
    lucide.createIcons();
    
    // Configuração de scroll suave para links de navegação
    setupSmoothScrolling();
    
    // Configuração do menu mobile (se necessário no futuro)
    setupMobileMenu();
});




// Função para validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para mostrar mensagem de sucesso
function showSuccessMessage(name) {
    const modal = document.getElementById('modal');
    const modalCard = modal.querySelector('.modal-card');
    
    // Salva o conteúdo original
    const originalContent = modalCard.innerHTML;
    
    // Mostra mensagem de sucesso
    modalCard.innerHTML = `
        <div style="text-align: center; padding: 2rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
            <h3 style="font-size: 1.5rem; font-weight: 800; color: #111827; margin-bottom: 1rem;">
                Obrigada, ${name}!
            </h3>
            <p style="color: #6b7280; margin-bottom: 1.5rem;">
                Você será avisada assim que as inscrições do Curso Filhos Seguros Online abrirem.
            </p>
            <p style="color: #9333ea; font-weight: 600;">
                Fique de olho no seu e-mail! 📧
            </p>
        </div>
    `;
    
    // Restaura o conteúdo original após 3 segundos
    setTimeout(() => {
        modalCard.innerHTML = originalContent;
    }, 5000);
}

// Configuração de scroll suave para links de navegação
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Configuração do menu mobile (para futuras implementações)
function setupMobileMenu() {
    // Esta função pode ser expandida no futuro para incluir um menu hambúrguer
    // Por enquanto, mantemos a estrutura básica
    
    // Detecta cliques fora do modal para fechá-lo
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Fecha modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Função para animar elementos quando entram na viewport (opcional)
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos que devem ser animados
    const animatedElements = document.querySelectorAll('.feature-card, .stat-card, .method-card, .final-quote');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(30px)';
        el.style.transition = 'opacity 0.9s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Função para tracking de eventos (Google Analytics, Facebook Pixel, etc.)
function trackEvent(eventName, eventData = {}) {
    // Exemplo de implementação para Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Exemplo de implementação para Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    // Log para desenvolvimento
    console.log('Event tracked:', eventName, eventData);
}

// Função para lidar com cliques nos botões CTA
function handleCTAClick(buttonText) {
    trackEvent('cta_click', {
        button_text: buttonText,
        page_location: window.location.href
    });
    
    openModal();
}

// Função para lidar com cliques em links externos
function handleExternalLink(url, linkText) {
    trackEvent('external_link_click', {
        link_url: url,
        link_text: linkText
    });
    
    // Abre link em nova aba
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Adiciona event listeners para tracking quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Tracking de cliques nos botões CTA
    const ctaButtons = document.querySelectorAll('button[onclick="openModal()"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                section: this.closest('section')?.className || 'unknown'
            });
        });
    });
    
    // Tracking de cliques em links sociais
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            const text = this.textContent.trim();
            
            trackEvent('social_link_click', {
                platform: 'instagram',
                url: url
            });
            
            handleExternalLink(url, text);
        });
    });
    
    // Tracking de envio de formulário
    const form = document.querySelector('.modal-form');
    if (form) {
        form.addEventListener('submit', function() {
            trackEvent('form_submit', {
                form_type: 'newsletter_signup'
            });
        });
    }
});

// Função para lazy loading de imagens (se necessário no futuro)
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Função para otimização de performance
function optimizePerformance() {
    // Preload de recursos críticos
    const criticalResources = [
        'styles.css',
        'logo_marjorie_fonseca.png'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'image';
        document.head.appendChild(link);
    });
}

// Inicialização adicional quando a página estiver totalmente carregada
window.addEventListener('load', function() {
    // Ativa animações de scroll se suportado
    if ('IntersectionObserver' in window) {
        setupScrollAnimations();
    }
    
    // Configura lazy loading se necessário
    setupLazyLoading();
    
    // Otimizações de performance
    optimizePerformance();
    
    // Tracking de page view
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
});

