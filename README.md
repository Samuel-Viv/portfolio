# portfolio-sam
Ce modèle devrait vous aider à démarrer le développement avec Vue 3 dans Vite.
This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (et désactiver Vetur) + [TypeScript Vue Plugin (Volar )](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration
Voir [Référence de configuration Vite](https://vitejs.dev/config/).
See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


Livrable attendus
Le footer: 
  -Le foooter est indiqué sur toutes les pages.
  - Des icônes avec des liens vers les réseaux sociaux ( GitHub, Linkedin ...). Ils devront s'ouvrir dans un nouvel onglet.
  - La date de la dernière mise à jour du site.

Le header:
  - Le header est présent sur toutes les pages.
  - Un logo ou une photo qui ramène en haut de la page d'acceuil lorsque l'on clic dessus
  - Un menu avec des liens d'ancrages vers la présentation, les créations et le formulaire de contact

1 page d'acceuil avec:
  - Nom et prénom
  - Une courte présentation
  - Les  créations doivents à chaque fois une image et un titre. Une modal s'ouvrira avec plus de photos  et détail au clic. La disposition est livre.
  - Un formulaire de contact (nom/prenom , objet et message )  qui s'envoie à l'adresse mail définie en variable d'environement.

1 modal dynamique:
  - Le titre
  - La date de création
  - Les technologies utilisées.
  - Un lien vers le site ou le pdf selon le projet ( dans un nouvel onglet)
  - Un lien vers le ropository GitHub.
  - La modal se fermera lorsqu'on clique sur le bouton de fermeture ou en dehors. Elle devra rester fixe sur la page meme si l'on scrolle.

1 Page 404:
  - une image
  - le texte"404"
  - Elle devra apparaitre dès lors qu'on essaaie d'accéder à autre chose que la page d'acceuil (router)
