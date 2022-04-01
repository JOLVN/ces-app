# Projet pour l'ESD

Projet dans le cadre d'un test d'amdmission en Bachelor 3ème année développement web à l'ESD Bordeaux.
Ce projet a été réalisé uniquement côté Front-end. Pour cela, le seul langage de programmation utilisé est JavaScript.


## Installation

Premier lancement du projet, faire la commande
```npm install```
/Permet d'installer les dépendances/


## Usage

Ce projet contient des modules Javascript, ce qui nécessite de lancer un serveur web local.
Pour cela, il est possible d'utiliser par exemple le "Live Server" proposé par VS Code
/Clic droit sur le fichier "index.html", puis *open with live server*/


## Organisation

### Style

Développé avec SASS.
Les fichiers sont séparés en trois grandes parties : *layouts*, *components* et *config*
Ils sont ensuites importés dans le fichier *style.scss*

### Script

Les fichiers JavaScript se trouvent dans le dossier *script*.
Il y a un fichier par page HTML.
Les fonctions réutilisables sont situées dans le dossier *fonctions*
Les fichiers sont organisés sous forme de modules.

### Datas

Les questions se trouvent dans le dossier *datas* en format *JSON*.
Elles sont ensuites importés dans les fichiers JavaScript afin d'être traitées et affichées.

