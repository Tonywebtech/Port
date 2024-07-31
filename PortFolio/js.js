document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.desktop-nav');
    const navLinks = document.querySelectorAll('.desktop-nav a');

    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        menuBtn.classList.toggle('open');
        nav.classList.toggle('open');
    }

    // Escucha el evento de clic en el botón para mostrar/ocultar el menú
    menuBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Cerrar el menú cuando se hace clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
            menuBtn.classList.remove('open');
            nav.classList.remove('open');
        }
    });
});
/*--------------FORMACION------------*/
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.querySelector('.card-inner').style.transform = 
                this.querySelector('.card-inner').style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
    });
});
/*--------------EXPERIENCIA------------*/
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            this.querySelector('.timeline-description').style.display = 
                this.querySelector('.timeline-description').style.display === 'block' ? 'none' : 'block';
        });
    });
});

/*---------------CONTACTO------------*/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí puedes añadir la lógica para enviar el formulario
        // Por ejemplo, usando fetch() para enviar los datos a un servidor
        
        console.log('Formulario enviado');
        alert('Gracias por tu mensaje. Te contactaré pronto.');
        
        // Resetear el formulario después del envío
        form.reset();
    });
});