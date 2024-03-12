import json
from math import sin, cos, sqrt, atan2, radians

def distance(lat1, lon1, lat2, lon2):
    # Rayon moyen de la terre en kilomètres
    R = 6371.0
    
    # Conversion des coordonnées en radians
    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)
    
    # Calcul des écarts de latitude et de longitude
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    
    # Calcul de la distance en utilisant la formule de la loi de cosinus
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    distance = R * c
    
    return distance

def trouver_stade_plus_proche(piscines, stades):
    resultat = None
    distance_min = float('inf')
    for piscine in piscines:
        piscine_nom = piscine['name']
        piscine_lat = piscine['latitude']
        piscine_lon = piscine['longitude']
        for stade in stades:
            stade_nom = stade['name']
            stade_lat = stade['latitude']
            stade_lon = stade['longitude']
            dist = distance(piscine_lat, piscine_lon, stade_lat, stade_lon)
            if dist < distance_min:
                distance_min = dist
                resultat = (piscine_nom, stade_nom)
    return resultat

# Charger les données depuis les fichiers JSON
with open('c:/Users/brufl/projets/projets_hexa/hackathon_hexagone/HackathonOkyDoky/near/piscines.json', 'r') as f:
    piscines = json.load(f)

with open('c:/Users/brufl/projets/projets_hexa/hackathon_hexagone/HackathonOkyDoky/near/stades.json', 'r') as f:
    stades = json.load(f)

# Trouver le stade le plus proche de toutes les piscines
resultat = trouver_stade_plus_proche(piscines, stades)

# Afficher le résultat
if resultat:
    print(f"Piscine la plus proche : {resultat[0]} | Stade le plus proche : {resultat[1]}")
else:
    print("Aucun résultat trouvé.")
