document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-subtext', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-button', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    // Section title animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        });
    });
    
    // About cards animation
    gsap.utils.toArray('.about-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });
    
    // How to apply steps animation
    gsap.utils.toArray('.step').forEach((step, i) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            x: i % 2 === 0 ? -50 : 50,
            opacity: 0,
            ease: 'power2.out'
        });
        
        gsap.from(step.querySelector('.step-dot'), {
            scrollTrigger: {
                trigger: step,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            scale: 0,
            opacity: 0,
            ease: 'elastic.out(1, 0.5)'
        });
    });
    
    // Selection cards animation
    gsap.utils.toArray('.selection-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });
    
    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                    const answer = i.querySelector('.faq-answer');
                    answer.style.maxHeight = '0';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            
            if (!isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
    
    
        
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Apply button scroll to form
    const applyBtn = document.getElementById('apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const formSection = document.getElementById('application');
            if (formSection) {
                window.scrollTo({
                    top: formSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    // Remove these lines if they exist:
    if (applyButton) {
        applyButton.style.display = 'none';
        // OR
        applyButton.remove();
}
    
    // Mobile menu toggle (would need additional HTML/CSS for full implementation)
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            // This would toggle a mobile menu - implementation depends on your design
            console.log('Mobile menu clicked');
        });
    }
});
