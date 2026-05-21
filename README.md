# Site de Présentation Vidéo - Cycle de Vie Logiciel

Un site web responsive présentant une vidéo éducative sur le cycle de vie d'une application logicielle, avec des fonctionnalités améliorées pour une meilleure expérience utilisateur.

## ✨ Fonctionnalités

### Interface Utilisateur Améliorée
- Design moderne et responsive avec dégradés, ombres et animations
- Adaptation optimisée pour tous les appareils (mobile, tablette, desktop)
- Interface claire avec hiérarchie visuelle bien définie

### Contrôles Vidéo Personnalisés
- Bouton play/pause personnalisé avec icônes dynamiques
- Contrôle du volume (muet/son) avec retour visuel
- Bouton plein écran avec gestion des états
- Barre de progression en temps réel
- Affichage du temps actuel / durée totale

### Navigation Avancée
- **Chapitres/Timestamps** : Navigation directe vers les différentes étapes du cycle de vie logiciel
- **Transcription intégrée** : Texte complet de la présentation accessible pour l'accessibilité et la référence

### Interaction Utilisateur
- **Section feedback** : Formulaire permettant aux spectateurs de laisser leur avis
- Système de notation par étoiles (1-5)
- Collecte d'email via Formspree pour recevoir les réponses directement dans votre boîte de réception
- Confirmation de soumission avec messages de succès/erreur

### Accessibilité
- Contraste amélioré pour une meilleure lisibilité
- Tailles de police adaptatives
- Navigation clavier implicitement soutenue
- Structure sémantique HTML

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Animations, gradients, responsive design, variables CSS
- **JavaScript Vanilla** : Logique interactive sans dépendances externes
- **Formspree** : Service de collecte de formulaire sans backend

## 📱 Responsive Design

Le site s'adapte automatiquement à différentes tailles d'écran :
- **Mobile (< 480px)** : Layout simplifié, contrôles réduits en taille
- **Tablette (480px - 768px)** : Espacement optimisé, polices légèrement réduites
- **Desktop (> 768px)** : Layout complet avec tous les éléments visibles

## 🚀 Fonctionnalités Détaillées

### Contrôles Vidéo
- Play/Pause avec icône qui change selon l'état
- Muet/Son avec indicateur visuel
- Plein écran avec gestion des événements de changement d'état
- Barre de progression qui se remplit en temps réel
- Affichage du temps formaté (MM:SS)

### Chapitres
Accessible via le bouton "📑 Chapitres" :
- Introduction (0:00)
- Analyse des besoins (0:30)
- Conception (1:30)
- Développement (3:00)
- Tests (4:30)
- Déploiement (5:30)
- Maintenance (6:30)
Cliquer sur un chapitre saute directement à ce moment dans la vidéo.

### Transcription
Accessible via le bouton "📝 Transcription" :
- Texte complet de la présentation avec timestamps
- Facilement copiable pour référence ou prise de notes
- Accessible pour les utilisateurs malvoyants ou préférant la lecture

### Feedback Formulaire
- Collecte de nom, email (pour réponse), notation (1-5 étoiles) et message
- Validation côté client avant envoi
- Intégration avec Formspree pour réception directe des emails
- Messages de confirmation de succès/erreur
- Reset automatique du formulaire après envoi réussi

## 📁 Structure du Projet

```
video-presentation-site/
├── index.html          # Structure principale de la page
├── style.css           # Styles et animations
├── script.js           # Logique interactive
├── Debut.jpeg          # Image de poster pour la vidéo
├── koffi_levis_akalete_cycle_vie_logiciel.mp4  # Vidéo de présentation
└── README.md           # Ce fichier
```

## 🔧 Installation & Utilisation

1. Clonez ou téléchargez ce dépôt
2. Assurez-vous d'avoir les fichiers média :
   - `Debut.jpeg` (image de poster)
   - `koffi_levis_akalete_cycle_vie_logiciel.mp4` (vidéo principale)
3. Ouvrez `index.html` dans votre navigateur préféré
4. Aucun serveur local requis pour le fonctionnement de base

> **Note** : Pour que la collecte de feedback fonctionne, vous devrez valider votre formulaire sur Formspree après le premier envoi.

## 🎯 Objectif Pédagogique

Ce site présente de manière visuelle et interactive le cycle de vie complet d'une application logicielle :
1. Analyse des besoins
2. Conception
3. Développement
4. Tests
5. Déploiement
6. Maintenance

Chaque étape est clairement définie dans la vidéo et accessible directement via les chapitres pour un apprentissage efficace et ciblé.

## 📧 Collecte de Feedback

Les réponses au formulaire de feedback sont envoyées directement à l'adresse email configurée via Formspree. Aucune configuration backend n'est requise de votre part.

Pour configurer la réception des emails :
1. Soumettez une première fois le formulaire
2. Vérifiez votre email (koffilevis21@gmail.com) pour le message de confirmation de Formspree
3. Cliquez sur le lien de confirmation dans l'email
4. Toutes les futures soumissions seront reçues directement dans votre boîte de réception

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le dépôt
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Commit vos changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

*Développé avec ❤️ pour présenter de manière engaging le cycle de vie logiciel*