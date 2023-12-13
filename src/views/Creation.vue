<script>
 
import Module from "@/components/Module.vue"


export default {
    name: 'Creation',
    data() {
        return {
            // au click sur le bouton le module sort
            revele: false,
           
            //info modales
            modaleData: [
        {
          name: "CV",
          image: "src/components/icons/cv.png",
          lien: "src/components/lien/cv/index2.html",
          gitHub: "https://github.com/Samuel-Viv/Creer_un_cv_en_ligne.git",
          tech: " HTML5, CSS3 , Git, GitHub",
          creationDate: "10/11/2023",
          detail:"Création d'un cv en HTLM et CSS, en respectant la charte graphique."
        },
        {
          name: "Cahier des Charges",
          image: "src/components/icons/CahierDesCharges.png",
          lien: "src/components/lien/cahierDesCharges/cahier-des-charges.pdf",
          gitHub: "https://github.com/Samuel-Viv/cahierDesCharges.git",
          tech: " Canva, Figma",
          creationDate: "17/11/2023",
          detail:"Création d'un cahier des charges comprenant une présentation de l'entreprise avec différents concurrents dans leur domaine, le profil du client idéal, la maquette du site avec la charte graphique, les fonctionnalités du site, un devis, ainsi que les dates de livraison."
        },
        {
          name: "Dynamiser un formulaire",
          image: "src/components/icons/dynamiserUnFormulaire.png",
          lien: "src/components/lien/DynamiserUnFormulaire/index.html",
          gitHub: "https://github.com/Samuel-Viv/dynamiser-un-espace-commentaire.git",
          tech: " HTML5, CSS3, JavaScript, Git, GitHub",
          creationDate: "4/12/2023",
          detail: "Je devais dynamiser un formulaire afin que le nom, le prénom et le message aillent dans les commentaires. Cependant, si le formulaire n'était pas bien rempli, un message d'erreur devait s'afficher."
        }
      ],
        }
    },
    components: {
        'module': Module

    },
    methods: {
        toggleModale: function (index) {
            this.modaleData[index].revele = !this.modaleData[index].revele
        },

    }



}

</script>

<template>
    <article id="block" >
        <h1 id="creation">Mes Créations</h1>
        <div id="row"  >
            <div v-for="(data, index) in modaleData" :key="index">
                <div class="boucle"  >
                    <div class="container">
                        <h2>{{ data.name }}</h2>

                        <module v-bind:revele="data.revele" :toggleModale="() => toggleModale(index)" :modaleData="data" ></module>
                        <img :src="data.image" :alt="data.name" v-on:click="() => toggleModale(index)">

                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
#row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 20px;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 600px;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 2px solid black;
    cursor: pointer;
}

#block{
    background-color: #191545 ;
    color: white;
    padding: 20px;
}

h1{
    display: flex;
    justify-content: center;
}

img:hover{
    box-shadow: 5px 5px 5px white;
}
</style>