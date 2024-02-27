# Chers participants du hackathon

Voici la marche à suivre pour pousser les travaux que vous avez réalisés pendant le hackathon sur la branche teamcorrespondante au numéro de votre équipe sur le dépôt GitHub du projet. Suivez attentivement ces étapes pour vous assurer que vos contributions sont correctement soumises.

## Étapes pour pousser vos travaux

### Initialiser Git dans votre projet

Si vous entreprenez un nouveau projet ou si votre dossier de projet n'est pas encore un dépôt Git, commencez par initialiser Git :

```bash
git init
```

Cette commande crée un nouveau dépôt Git local dans votre dossier de projet.

### Connecter votre dépôt local au dépôt distant

Après avoir initialisé votre dépôt local, connectez-le au dépôt GitHub distant :

```bash
git remote add origin URL_DU_DEPOT
```

Remplacez URL_DU_DEPOT par l'URL réelle du dépôt GitHub du projet. Cette commande établit une connexion entre votre dépôt local et le dépôt distant sur GitHub, permettant le transfert des modifications entre les deux.

### Configuration initiale

Si ce n'est pas déjà fait, configurez Git sur votre machine locale en utilisant vos identifiants GitHub. Cela implique de configurer votre nom d'utilisateur et votre adresse email avec les commandes suivantes :

```bash
git config --global user.name "VotreNom"
git config --global user.email "votre.email@example.com"
```

### Créer et basculer vers une nouvelle branche

Avant de commencer à travailler sur vos contributions, assurez-vous de créer une nouvelle branche spécifique à votre équipe en utilisant :

```bash
git checkout -b team-numero_equipe
```

Remplacez numéro_equipe par le numéro de votre équipe. Par exemple, si vous êtes dans l'équipe 1, la commande serait git checkout -b team-1.

### Ajoutez vos modifications

Une fois que vous avez terminé vos travaux, ajoutez les fichiers modifiés à l'index de Git avec :

```bash
git add .
```

Cette commande ajoute tous les fichiers modifiés dans le répertoire courant. Si vous souhaitez ajouter des fichiers spécifiques, remplacez le point par les noms des fichiers.

### Commiter vos modifications

Enregistrez vos modifications dans l'historique du dépôt en utilisant :

```bash
git commit -m "Description des modifications"
```

Remplacez Description des modifications par un message décrivant ce que votre contribution apporte.

### Pousser vos modifications sur GitHub

Envoyez vos modifications sur GitHub avec :

```bash
git push origin team-numero_equipe
```

Assurez-vous de remplacer le numéro_equipe par le numéro de votre équipe.
