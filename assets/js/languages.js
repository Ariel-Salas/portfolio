// languajes.js
 

// languajes.js
function changeLang(language, el) {
    const container = el.closest('.chooseLang');
    if (!container) return;

    const containerClassList = container.classList;
    const elClassList = el.classList;

    // Alternar la clase 'open'
    if (containerClassList.contains('open')) {
        containerClassList.remove('open');
        if (!elClassList.contains('chosen')) {
            const currentChosen = container.querySelector('.chosen');
            if (currentChosen) {
                currentChosen.classList.remove('chosen');
            }
            elClassList.add('chosen');
            console.log(language + ' chosen');
            loadLanguageData(language);
        }
        return;
    }

    containerClassList.add('open');
}

function loadLanguageData(language) {
    if (language === 'english') {
        // Volver al contenido original en inglés
        window.location.reload(); // Recarga la página para mostrar el HTML original
        return;
    }


   if (language === 'francais') {
        const langMessages = document.querySelectorAll('.lang-message');
        langMessages.forEach(message => {
            message.classList.add('show'); // Mostrar en todas las versiones
            setTimeout(() => {
                message.classList.remove('show');
            }, 3000);
        });
        return;
    }
    

    // Define el archivo JSON basado en el idioma
    let fileName;
    switch (language) {
        case 'espanol':
            fileName = 'assets/lang/sp.json';
            break;
        case 'francais':
            fileName = 'assets/lang/fr.json';
            break;
        // case 'english':
        //     fileName = 'assets/lang/en.json';
        //     break;
        default:
            return; // Si no es un idioma reconocido, salir
    }

    // Cargar el archivo JSON correspondiente
    fetch(fileName)
        .then(response => response.json())
        .then(data => {

            
            console.log(data["hero-content"].subtitle);
            
            // hamburger menu
            document.querySelector('.menu-wrap p').innerText = data.menuLabel;
            document.querySelector('.menu-wrap .scroll-to[href="#home"] span').innerText = data.menu.home;
            document.querySelector('.menu-wrap .scroll-to[href="#about"] span').innerText = data.menu.about;
            document.querySelector('.menu-wrap .scroll-to[href="#resume"] span').innerText = data.menu.resume;
            document.querySelector('.menu-wrap .scroll-to[href="#services"] span').innerText = data.menu.courses;
            document.querySelector('.menu-wrap .scroll-to[href="#skills"] span').innerText = data.menu.skills;
            document.querySelector('.menu-wrap .scroll-to[href="#portfolio"] span').innerText = data.menu.portfolio;
            document.querySelector('.menu-wrap .scroll-to[href="#contact"] span').innerText = data.menu.contact;
            document.querySelector('.sidebar-social p').innerText = data["sidebar-social"].social;

            //right menu
            document.querySelector('.menu .scroll-to[href="#home-right"] span').innerText = data.menu.home;
            document.querySelector('.menu .scroll-to[href="#about-right"] span').innerText = data.menu.about;
            document.querySelector('.menu .scroll-to[href="#resume-right"] span').innerText = data.menu.resume;
            document.querySelector('.menu .scroll-to[href="#services-right"] span').innerText = data.menu.courses;
            document.querySelector('.menu .scroll-to[href="#skills-right"] span').innerText = data.menu.skills;
            document.querySelector('.menu .scroll-to[href="#portfolio-right"] span').innerText = data.menu.portfolio;
            document.querySelector('.menu .scroll-to[href="#contact-right"] span').innerText = data.menu.contact;

            //left-sidebar large-sidebar
            document.querySelector('.large-sidebar .designation').innerText = data["large-sidebar"].designation;
            document.querySelector('.large-sidebar .email').innerText = data["large-sidebar"].name;
            document.querySelector('.large-sidebar .address').innerText = data["large-sidebar"].role;
            document.querySelector('.large-sidebar .download-cv .cv-text').innerText = data["large-sidebar"].downloadCV;
            document.querySelector('.large-sidebar .contact-me .contact-text').innerText = data["large-sidebar"].contactMe;


            //left-sidebar small-sidebar
            document.querySelector('.small-sidebar .designation').innerText = data["small-sidebar"].designation;
            document.querySelector('.small-sidebar .email').innerText = data["small-sidebar"].name;
            document.querySelector('.small-sidebar .address').innerText = data["small-sidebar"].role;
            document.querySelector('.small-sidebar .download-cv .cv-text').innerText = data["small-sidebar"].downloadCV;
            document.querySelector('.small-sidebar .contact-me .contact-text').innerText = data["small-sidebar"].contactMe;

            //Hero Section
            document.querySelector('.hero-section .section-header h4.subtitle .subtitle-text').innerText = data["hero-content"].subtitle;
            document.querySelector('.hero-section .section-header h1.scroll-animation .name').innerText = data["hero-content"].name;
            document.querySelector('.hero-section .hero-content .introduce-text').innerText = data["hero-content"].introduction;
            document.querySelector('.hero-section .facts .left h1').innerText = data["hero-content"].years;
            document.querySelector('.hero-section .facts .left p').innerHTML = data["hero-content"].yearsDescrip.replace(/\n/g, '<br>');
            document.querySelector('.hero-section .facts .right h1').innerText = data["hero-content"].proyects;
            document.querySelector('.hero-section .facts .right p').innerHTML = data["hero-content"].proyectsDescrip.replace(/\n/g, '<br>')

            //About area
            document.querySelector('.about-area .custom-container h4.subtitle .about-text').innerText = data["about-area"].aboutMe;
            document.querySelector('.about-area .custom-container .main-text').innerText = data["about-area"].historyTitle;
            document.querySelector('.about-area .custom-container .better-story').innerText =data["about-area"].historyTitleGreen;
            document.querySelector('.about-area .custom-container .about-me-presentation').innerText =data["about-area"].aboutMePresentation;

            //Resumen area
            document.querySelector('.resume-area .custom-container h4.subtitle .resume-title').innerText = data["resume-area"].resume;
            document.querySelector('.resume-area .custom-container h1.scroll-animation .professional-title').innerText = data["resume-area"].profesionalTitle;
            document.querySelector('.resume-area .custom-container h1.scroll-animation .education-title').innerText = data["resume-area"].educationTitle;
            
            document.querySelector('[data-item="1"] .date').innerText = data["resume-area"].dateThird;
            document.querySelector('[data-title="1"]').innerText = data["resume-area"].dateThirdText;
            document.querySelector('[data-subtitle="1"]').innerText = data["resume-area"].dateThirdTextSub;
            
            document.querySelector('[data-item="2"] .date').innerText = data["resume-area"].dateSecond;
            document.querySelector('[data-title="2"]').innerText = data["resume-area"].dateSecondText;
            document.querySelector('[data-subtitle="2"]').innerText = data["resume-area"].dateSecondTextSub;
            
            document.querySelector('[data-item="3"] .date').innerText = data["resume-area"].dateFirst;
            document.querySelector('[data-title="3"]').innerText = data["resume-area"].dateFirstText;
            document.querySelector('[data-subtitle="3"]').innerText = data["resume-area"].dateFirstTextSub;
            

            //Resumen section
            document.querySelector('.services-area .custom-container h4.subtitle .services-text').innerText = data["services-area"].services;
            document.querySelector('.services-area .custom-container h1.scroll-animation .courses-title').innerText = data["services-area"].coursesTitle;
            document.querySelector('.services-area .custom-container h1.scroll-animation .certification-title').innerText = data["services-area"].certificationTitle;
                      
            document.querySelector('.services-area .custom-container .services-items h2[data-title="1"]').innerText = data["services-area"].ThirdTitle;
            document.querySelector('.services-area .custom-container .services-items p[data-title="1"]').innerText = data["services-area"].ThirdSubTitle;
            document.querySelector('.services-area .custom-container .service-item[data-item="1"] .projects').innerText = data["services-area"].ThirdYear;

            document.querySelector('.services-area .custom-container .services-items h2[data-title="2"]').innerText = data["services-area"].SecondTitle;
            document.querySelector('.services-area .custom-container .services-items p[data-title="2"]').innerText = data["services-area"].SecondSubTitle;
            document.querySelector('.services-area .custom-container .service-item[data-item="2"] .projects').innerText = data["services-area"].SecondYear;

            document.querySelector('.services-area .custom-container .services-items h2[data-title="3"]').innerText = data["services-area"].FirstTitle;
            document.querySelector('.services-area .custom-container .services-items p[data-title="3"]').innerText = data["services-area"].FirstSubTitle;
            document.querySelector('.services-area .custom-container .service-item[data-item="3"] .projects').innerText = data["services-area"].FirstYear;


            //Skills Section
            document.querySelector('.skills-area .custom-container h4.subtitle .skills-text').innerText = data["skills-section"].skillsText;
            document.querySelector('.skills-area .custom-container h1.scroll-animation .my-title').innerText = data["skills-section"].myTitle;
            document.querySelector('.skills-area .custom-container h1.scroll-animation .advantages-title').innerText = data["skills-section"].advantagesTitle;

            //Portfolio Section
            document.querySelector('.portfolio-area .custom-container h4.subtitle .portfolio-title').innerText = data["portfolio-section"].portfolioTitle;
            document.querySelector('.portfolio-area .custom-container h1.scroll-animation .featured-title').innerText = data["portfolio-section"].featuredTitle;
            document.querySelector('.portfolio-area .custom-container h1.scroll-animation .proyect-title').innerText = data["portfolio-section"].proyectTitle;
           
            document.querySelector('.portfolio-area .custom-container .row h2[data-title="portfolio-1"] a').innerText = data["portfolio-section"].proyectOne;
            document.querySelector('.portfolio-area .custom-container .row h2[data-title="portfolio-2"] a').innerText = data["portfolio-section"].proyectTwo;
            document.querySelector('.portfolio-area .custom-container .row h2[data-title="portfolio-3"] a').innerText = data["portfolio-section"].proyectThird;
            document.querySelector('.portfolio-area .custom-container .row h2[data-title="portfolio-4"] a').innerText = data["portfolio-section"].proyectFour;

            // Section Section
            document.querySelector('.contact-area .custom-container h4.subtitle .contact-title').innerText = data["contact-area"].contact;
            document.querySelector('.contact-area .custom-container .scroll-animation .let-title').innerText = data["contact-area"].LetsWork;
            document.querySelector('.contact-area .custom-container .scroll-animation .together-title').innerText = data["contact-area"].together;
            
            document.querySelector('.contact-area .custom-container p ').innerText = data["contact-area"].together;           
            document.getElementById('required-msg').innerText = data["contact-area"].requiredMsg;

            const fullNameLabel = document.querySelector('label[for="full-name"]');
            if (fullNameLabel) {
                // Actualiza solo el contenido de texto del nodo sin afectar los elementos hijos como <sup>
                fullNameLabel.childNodes[0].nodeValue = data["contact-area"].fullNameLabel + ' ';
            }

            const emailLabel = document.querySelector('label[for="email"]');
            if (emailLabel) {
                // Actualiza solo el contenido de texto del nodo sin afectar los elementos hijos
                emailLabel.childNodes[0].nodeValue = data["contact-area"].email + ' ';
            }
                        document.querySelector('label[for="phone-number"]').innerText = data["contact-area"].phoneNumber;

           
            // document.querySelector('label[for="subject"]').innerText = data["contact-area"].subject;

            
            // Actualizar el texto del label
            const subjectLabel = document.querySelector('label[for="subject"]');
            if (subjectLabel) {
                // Actualiza solo el contenido de texto del nodo sin afectar los elementos hijos
                subjectLabel.childNodes[0].nodeValue = data["contact-area"].subjectLabel + ' ';
            }
            
            // Actualizar la opción "Select a subject"
            const selectSubject = document.querySelector('select#subject option[value=""]');
            if (selectSubject) {
                selectSubject.innerText = data["contact-area"].selectSubject;
            }

            // Actualizar la opción "subject1"
            const subject1 = document.querySelector('select#subject option[value="subject1"]');
            if (subject1) {
                subject1.innerText = data["contact-area"].subject1;
            }

            // Actualizar la opción "subject2"
            const subject2 = document.querySelector('select#subject option[value="subject2"]');
            if (subject2) {
                subject2.innerText = data["contact-area"].subject2;
            }

            // Actualizar la opción "subject3"
            const subject3 = document.querySelector('select#subject option[value="subject3"]');
            if (subject3) {
                subject3.innerText = data["contact-area"].subject3;
            }

            
            
                    // Actualizar "your budget" y "(optional)"
            const budgetLabel = document.querySelector('label[for="budget"]');
            if (budgetLabel) {
                budgetLabel.childNodes[0].nodeValue = data["contact-area"].budgetLabel + ' '; // Actualiza "your budget"
                const optionalSpan = budgetLabel.querySelector('span');
                if (optionalSpan) {
                    optionalSpan.innerText = data["contact-area"].optional; // Actualiza "(optional)"
                }
            }

            // Actualizar etiqueta de "message"
            document.querySelector('label[for="message"]').innerText = data["contact-area"].messageLabel;

            // Actualizar "add an attachment"
            const uploadAttachmentLabel = document.querySelector('.attachment-text');
            if (uploadAttachmentLabel) {
                uploadAttachmentLabel.childNodes[0].nodeValue = data["contact-area"].addAttachment; // Asegúrate de que el texto esté correcto
            }

            // Actualizar botón "send me a message"
            const sendButton = document.getElementById('submit-form'); // Usar ID del botón
            if (sendButton) {
                sendButton.innerText = data["contact-area"].sendMessage; // Actualiza el texto del botón
            }



            console.log(data["about-area"].historyTitleGreen);

            // document.querySelector('.about-area .custom-container .better-story').innerText ='aún mejor';
            // document.querySelector('.about-area .custom-container .better-story').innerHTML ='aún mejor';

        })
        .catch(error => {
            console.error('Error loading language data:', error);
        });
}


