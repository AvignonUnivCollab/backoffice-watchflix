# 🎬 WatchFilx — Plateforme collaborative de visionnage en ligne

## 📖 Présentation du projet

Le projet **WatchFilx** a pour objectif de concevoir et développer une **plateforme web** permettant à plusieurs utilisateurs de **regarder des vidéos ensemble en temps réel**, **échanger via un chat intégré**, et **gérer une playlist collaborative**.  
L’ambition du client est de créer un **concurrent de WatchTogether** ([https://w2g.tv](https://w2g.tv)) en reprenant ses fonctionnalités principales tout en proposant une interface moderne et fluide.

---

## 🧱 Fonctionnalités principales (MVP)

- 🔗 **Visionnage synchronisé** : plusieurs utilisateurs regardent la même vidéo en temps réel.  
- 💬 **Chat en direct** : communication instantanée entre les participants.  
- 🎶 **Playlist collaborative** : ajout, suppression et gestion de vidéos par plusieurs utilisateurs.  
- 👥 **Gestion des utilisateurs** : création de compte, connexion, profils, etc.  
- 🌐 **Interface responsive** et mode sombre.  

---

## ⚙️ Stack technique

### Frontend
- **Angular** — Framework principal de l’application web  
- **Tailwind CSS** — Pour une mise en page moderne et réactive  
- **TypeScript**, **HTML**, **SCSS**

### Backend
- **Java / Spring Boot** — API REST pour la gestion des utilisateurs, vidéos, et synchronisation  
- **MySQL / PostgreSQL** — Base de données relationnelle  

### Outils de gestion
- **GitHub** — Suivi du code source et gestion des branches  
- **Trello** — Suivi des tâches et du planning  
- **WhatsApp / Teams** — Communication et réunions de groupe  

---

## 🧩 Méthodologie

Le projet suit le **modèle en cascade**, découpé en plusieurs phases :
1. **Analyse des besoins**
2. **Conception (UML, maquettes, schéma BD)**
3. **Implémentation du MVP**
4. **Tests et validation**
5. **Améliorations et ajout de fonctionnalités (S2)**

Chaque phase donnera lieu à des **artefacts de travail** (rapports, comptes rendus, diagrammes, maquettes…).

---

## 👨‍💻 Équipe de développement

| Nom | Rôle | Responsabilités principales |
|------|------|-----------------------------|
| NKEOUA Lionel  | Développeur Frontend  | Chef de projet, Planification, coordination, suivi Trello |
| Dalia bensaid  | Développeur Backend   | API Java Spring Boot       |
| Lina Ould Amer | Développeur Backend   | Intégration API Backoffice |
| Ines Chegroun  | Développeur Backend   | Intégration API Backoffice |

---

## 🚀 Installation et lancement (Angular)

```bash
# Cloner le projet
git clone https://github.com/AvignonUnivCollab/backoffice-watchflix.git
cd watchfilx

# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve
