// Script JavaScript pour améliorer l'expérience utilisateur avec des contrôles personnalisés
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('presentationVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const chaptersBtn = document.getElementById('chaptersBtn');
    const transcriptBtn = document.getElementById('transcriptBtn');
    const progressBar = document.getElementById('progressBar');
    const videoTime = document.getElementById('videoTime');
    const chaptersPopup = document.getElementById('chaptersPopup');
    const transcriptPopup = document.getElementById('transcriptPopup');
    const closeChapters = document.getElementById('closeChapters');
    const closeTranscript = document.getElementById('closeTranscript');
    const chaptersList = document.getElementById('chaptersList');
    const transcriptContent = document.getElementById('transcriptContent');
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackResponse = document.getElementById('feedbackResponse');
    const ratingStars = document.querySelectorAll('.star');
    const feedbackRatingValue = document.getElementById('feedbackRatingValue');
    
    // Fonction pour formater le temps en mm:ss
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Mettre à jour l'affichage du temps et de la barre de progression
    function updateTimeDisplay() {
        const currentTime = video.currentTime;
        const duration = video.duration;
        
        // Mettre à jour la barre de progression
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = progressPercent + '%';
        }
        
        // Mettre à jour l'affichage du temps
        videoTime.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
    }
    
    // Gestion du bouton play/pause
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '❚❚'; // Icône pause
            playPauseBtn.setAttribute('title', 'Pause');
        } else {
            video.pause();
            playPauseBtn.innerHTML = '▶'; // Icône play
            playPauseBtn.setAttribute('title', 'Play');
        }
    });
    
    // Gestion du bouton muet
    muteBtn.addEventListener('click', function() {
        video.muted = !video.muted;
        if (video.muted) {
            muteBtn.innerHTML = '🔇'; // Icône muet
            muteBtn.setAttribute('title', 'Activer le son');
        } else {
            muteBtn.innerHTML = '🔊'; // Icône son
            muteBtn.setAttribute('title', 'Muet');
        }
    });
    
    // Gestion du bouton plein écran
    fullscreenBtn.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            video.requestFullscreen().catch(err => {
                console.log(`Erreur lors de la tentative de plein écran: ${err.message}`);
            });
            fullscreenBtn.innerHTML = '⍉'; // Icône quitter plein écran
            fullscreenBtn.setAttribute('title', 'Quitter le plein écran');
        } else {
            document.exitFullscreen();
            fullscreenBtn.innerHTML = '⛶'; // Icône plein écran
            fullscreenBtn.setAttribute('title', 'Plein écran');
        }
    });
    
    // Gestion du bouton chapitres
    chaptersBtn.addEventListener('click', function() {
        chaptersPopup.style.display = 'flex';
        loadChapters();
    });
    
    // Gestion du bouton transcription
    transcriptBtn.addEventListener('click', function() {
        transcriptPopup.style.display = 'flex';
        loadTranscript();
    });
    
    // Fermer les popups
    closeChapters.addEventListener('click', function() {
        chaptersPopup.style.display = 'none';
    });
    
    closeTranscript.addEventListener('click', function() {
        transcriptPopup.style.display = 'none';
    });
    
    // Fermer les popups en cliquant en dehors du contenu
    chaptersPopup.addEventListener('click', function(e) {
        if (e.target === chaptersPopup) {
            chaptersPopup.style.display = 'none';
        }
    });
    
    transcriptPopup.addEventListener('click', function(e) {
        if (e.target === transcriptPopup) {
            transcriptPopup.style.display = 'none';
        }
    });
    
    // Gestion des chapitres - données d'exemple
    function loadChapters() {
        const chapters = [
            { time: 0, title: "Introduction" },
            { time: 30, title: "Analyse des besoins" },
            { time: 90, title: "Conception" },
            { time: 180, title: "Développement" },
            { time: 270, title: "Tests" },
            { time: 360, title: "Déploiement" },
            { time: 450, title: "Maintenance" }
        ];
        
        chaptersList.innerHTML = '';
        chapters.forEach(chapter => {
            const chapterItem = document.createElement('div');
            chapterItem.className = 'chapter-item';
            chapterItem.innerHTML = `
                <span class="chapter-time">${formatTime(chapter.time)}</span>
                <span class="chapter-title">${chapter.title}</span>
            `;
            chapterItem.addEventListener('click', () => {
                video.currentTime = chapter.time;
                video.play();
                chaptersPopup.style.display = 'none';
                playPauseBtn.innerHTML = '❚❚';
                playPauseBtn.setAttribute('title', 'Pause');
            });
            chaptersList.appendChild(chapterItem);
        });
    }
    
    // Gestion de la transcription - données d'exemple
    function loadTranscript() {
        transcriptContent.innerHTML = `
            <p>[00:00] Bienvenue dans cette présentation sur le cycle de vie d'une application logicielle. Aujourd'hui, nous allons explorer les différentes étapes qui constituent le développement d'un logiciel, de l'idée initiale à la maintenance en production.</p>
            <p>[00:30] La première étape est l'analyse des besoins. C'est durant cette phase que nous identifions les problèmes à résoudre, les fonctionnalités nécessaires et les attentes des utilisateurs. Cette étape est cruciale car elle définit la direction du projet tout entier.</p>
            <p>[01:30] Vient ensuite la phase de conception. Ici, nous créons l'architecture du système, définissons les technologies à utiliser et élaborons les maquettes de l'interface utilisateur. Une bonne conception permet d'éviter de nombreux problèmes durant le développement.</p>
            <p>[03:00] Le développement proprement dit commence alors. Les développeurs écrivent le code suivant les spécifications établies durant la conception. Cette phase implique souvent des revues de code, des tests unitaires et une intégration continue pour garantir la qualité.</p>
            <p>[04:30] Après le développement, nous passons aux tests. Cette étape comprend les tests fonctionnels, les tests de performance, les tests de sécurité et les tests d'acceptation utilisateur. L'objectif est de s'assurer que le logiciel répond aux exigences et fonctionne correctement dans divers scénarios.</p>
            <p>[05:30] Une fois les tests réussis, nous procédons au déploiement. Le logiciel est mis à disposition des utilisateurs, que ce soit sur des serveurs internes, dans le cloud ou via des boutiques d'applications. Cette étape nécessite une planification minutieuse pour minimiser les perturbations.</p>
            <p>[06:30] Enfin, la maintenance commence. Cette phase dure généralement toute la durée de vie du logiciel et inclut la correction de bugs, l'ajout de nouvelles fonctionnalités, l'optimisation des performances et l'adaptation aux évolutions technologiques.</p>
            <p>[07:30] En comprenant ce cycle de vie, les équipes peuvent mieux planifier leurs projets, allouer leurs ressources de manière efficace et livrer des logiciels de qualité qui répondent véritablement aux besoins des utilisateurs.</p>
            <p>[08:00] Merci d'avoir suivi cette présentation. N'hésitez pas à laisser votre feedback dans la section ci-dessous pour nous aider à améliorer nos futures présentations.</p>
        `;
    }
    
    // Mettre à jour l'affichage du temps pendant la lecture
    video.addEventListener('timeupdate', updateTimeDisplay);
    
    // Mettre à jour l'affichage du temps lorsque la vidéo est chargée
    video.addEventListener('loadedmetadata', function() {
        updateTimeDisplay();
    });
    
    // Gestion de la fin de la vidéo
    video.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '▶'; // Revenir à l'icône play
        playPauseBtn.setAttribute('title', 'Play');
        progressBar.style.width = '100%';
    });
    
    // Gestion des événements de plein écran
    document.addEventListener('fullscreenchange', function() {
        if (!document.fullscreenElement) {
            fullscreenBtn.innerHTML = '⛶'; // Icône plein écran
            fullscreenBtn.setAttribute('title', 'Plein écran');
        } else {
            fullscreenBtn.innerHTML = '⍉'; // Icône quitter plein écran
            fullscreenBtn.setAttribute('title', 'Quitter le plein écran');
        }
    });
    
    // Gestion des erreurs de vidéo
    video.addEventListener('error', function() {
        console.error('Erreur de chargement de la vidéo:', video.error);
    });
    
    // Gestion du système de notation par étoiles
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            feedbackRatingValue.value = value;
            
            // Mettre à jour l'affichage des étoiles
            ratingStars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= value) {
                    s.classList.add('active');
                    s.textContent = '★';
                } else {
                    s.classList.remove('active');
                    s.textContent = '☆';
                }
            });
        });
        
        // Effet hover pour les étoiles
        star.addEventListener('mouseover', function() {
            const value = parseInt(this.getAttribute('data-value'));
            ratingStars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= value) {
                    s.textContent = '★';
                } else {
                    s.textContent = '☆';
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            const value = parseInt(feedbackRatingValue.value);
            ratingStars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= value) {
                    s.textContent = '★';
                    s.classList.add('active');
                } else {
                    s.textContent = '☆';
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Gestion du formulaire de feedback
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = document.getElementById('feedbackName').value.trim();
        const email = document.getElementById('feedbackEmail').value.trim();
        const rating = parseInt(feedbackRatingValue.value);
        const message = document.getElementById('feedbackMessage').value.trim();
        
        // Validation simple
        if (!name || !email || !message || rating === 0) {
            showFeedbackResponse('Veuillez remplir tous les champs et sélectionner une note.', 'error');
            return;
        }
        
        // Simuler l'envoi (dans une vraie application, vous enveriez ces données à un serveur)
        setTimeout(() => {
            showFeedbackResponse('Merci pour votre feedback ! Votre avis nous est précieux.', 'success');
            feedbackForm.reset();
            feedbackRatingValue.value = 0;
            ratingStars.forEach(s => {
                s.classList.remove('active');
                s.textContent = '☆';
            });
        }, 1000);
    });
    
    function showFeedbackResponse(message, type) {
        feedbackResponse.textContent = message;
        feedbackResponse.className = `feedback-response ${type}`;
        feedbackResponse.style.display = 'block';
        
        // Masquer la réponse après 5 secondes
        setTimeout(() => {
            feedbackResponse.style.display = 'none';
        }, 5000);
    }
});