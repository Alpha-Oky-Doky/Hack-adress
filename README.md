# team-9 projet
Fiabilisation des adresses

## 1er cas
### 1.1. Objectif
À 22h47, le SAMU de Paris reçoit un appel concernant une intoxication alimentaire. La patiente, en situation de surpoids, est incapable de quitter son domicile. L'assistant de régulation, chargé de déployer les secours adaptés, doit vérifier et sécuriser l'adresse fournie. La patiente indique résider au 12, rue du Faubourg Saint-Antoine, 75011 Paris, France. Cependant, lorsque l'adresse est saisie dans le système informatique du SAMU, elle est signalée comme erronée ou inexistante dans le 11e arrondissement. Cette confusion est due au fait que l'adresse se trouve à la limite d'un arrondissement voisin.


- Adresse fournie (erronée ou imprécise) : 12, rue du Faubourg Saint-Antoine, 75011 Paris
+ La bonne adresse à trouver : 12, rue du Faubourg Saint-Antoine, 75012 Paris

### 1.2. Proposition de solution
Fonctionne avec l'autocorrection de l'API utilisée

## 2ème cas
### 2.1. Objectif
Il est 19h25 quand un jeune entraîneur contacte le 15 pour rapporter un incident survenu durant un entraînement : un jeune joueur semble avoir confondu les cages de but avec le ballon, résultant en une probable fracture. La situation est grave : le garçon est très souffrant, il a vomi et se tord de douleur. L'adresse fournie dans l'urgence est "le Stade de Foot à Versailles, près de la piscine". Malheureusement, l'appel est brusquement interrompu, et malgré les tentatives de l'Assistant de Régulation Médicale (ARM) pour rappeler, il n'obtient aucune réponse. Dans l'urgence d'envoyer les secours, l'ARM est confronté à un défi : localiser l'adresse exacte du stade, sachant que Versailles compte plusieurs terrains de football.


- Adresse fournie (erronée ou imprécise) : Stade de Foot à Versailles, près de la piscine
+ La bonne adresse à trouver : Stade Montbauron, 24 All. Pierre de Coubertin, 78000

### 2.2. Proposition de solution
Récupération des listes des piscines et des stades de Versailles (2 fichiers JSON).
Puis exécution d'un script Python (fourni dans le dossier `near`) qui utilise l'algotithme des k plus proches voisins (KNN) pour trouver le stade le plus proche de la piscine.

## 3ème cas
### 3.1. Objectif
Lors de sa ronde nocturne dans le dépôt de bus, le nouveau gardien de nuit fait une découverte alarmante : un chauffeur de bus est affalé sur son volant, inconscient. Le gardien tente sans succès de réveiller le chauffeur et décide d'appeler le SAMU tout en essayant de l'aider à descendre du bus. Il communique à l'opérateur du SAMU ses observations ainsi que l'adresse du lieu, le 11 Allée des Mares, à Noisy-le-Roi.
L'assistant de régulation du SAMU ne parvient pas à localiser un dépôt de bus à cette adresse. Selon les informations disponibles, il s'agirait plutôt d'un rond-point, ce qui complique l'envoi des secours au bon endroit.


- Adresse fournie (erronée ou imprécise) : 11 Allée des Mares, à Noisy-le-Roi / Dépôt de bus
+ La bonne adresse à trouver : 1 B Chem. de la Pièce À Samson, 78590 Noisy-le-Roi 

### 3.2. Proposition de solution
Il est possible de récupérer un fichier JSON de la liste des dépôts de bus existants à Noisy-le-Roi, puis d'exécuter un script Python (fourni dans le dossier `near`) qui utilise l'algotithme des k plus proches voisins (KNN) pour trouver le dépôt de bus le plus proche de l'adresse fournie.

## 4ème cas
### 4.1. Objectif
À 6h du matin, le téléphone du SAMU de Paris retentit. Un homme en état de panique, appelle les urgences pour signaler l'accouchement imminent de sa femme. Entre le stress, la panique, les cris de sa femme et les pleurs de leur enfant de 3 ans, il parvient à donner leur adresse : 55, rue des Peupliers. Lorsque l'opérateur de régulation lui demande de préciser le bâtiment et l'étage, l'homme insiste sur le fait qu'ils vivent dans un pavillon, soulignant qu'il s'agit d'une maison individuelle et non d'un appartement dans un immeuble.
Le hic, c'est que cette description ne correspond pas à ce que l'Assistant de Régulation Médicale (ARM) visualise pour le 55, rue des Peupliers dans le 13e arrondissement de Paris. L'adresse évoque plutôt une zone d'immeubles résidentiels, ce qui crée une confusion quant à la localisation exacte du pavillon de l'appelant.


- Adresse fournie (erronée ou imprécise) : 55 Rue des Peupliers
+ La bonne adresse à trouver : 55 Rue des Peupliers, 93000 Bobigny

### 4.2. Proposition de solution
Nous avons réussi à obtenir avec succès les données comportant les adresses correctes grâce à l'interface de programmation (API) de "MapBox". Parallèlement, nous avons pu recueillir les données relatives aux habitations en utilisant l'API "Nominatim" d'Open Street Map, ce qui nous a permis d'obtenir des informations telles que le type de logement (par exemple : maison, immeuble, etc.).
Il convient de noter que cette mise en place n'est pas finalisée.
En outre, il est important de souligner la possibilité de croiser ces données pour obtenir des informations pertinentes, notamment pour vérifier et confirmer les détails de l'adresse. Ce processus permettrait d'assurer la précision et la fiabilité des informations recueillies.