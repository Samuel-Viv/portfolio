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
          tech: "HTML5, CSS3 , Git, GitHub",
          creationDate: "10/11/2023"
        },
        {
          name: "Cahier des Charges",
          image: "src/components/icons/CahierDesCharges.png",
          lien: "src/components/lien/cahierDesCharges/cahier-des-charges.pdf",
          gitHub: "https://github.com/Samuel-Viv/cahierDesCharges.git",
          tech: "Canva, Figma",
          creationDate: "17/11/2023"
        },
        {
          name: "Dynamiser un formulaire",
          image: "src/components/icons/dynamiserUnFormulaire.png",
          lien: "src/components/lien/DynamiserUnFormulaire/index.html",
          gitHub: "https://github.com/Samuel-Viv/dynamiser-un-espace-commentaire.git",
          tech: "HTML5, CSS3, JavaScript, Git, GitHub",
          creationDate: "4/12/2023"
        }
      ],
        }
    },
    components: {
        'module': Module

    },
    methods: {
        toggleModale: function () {
            this.revele = !this.revele
        },

    }



}

</script>

<template>
    <div>
        <h1>Mes Créations</h1>
        <div id="row">
            <div>
                <div class="boucle"  >
                    <div class="container" >
                        <h1>CV</h1>

                        <module v-bind:revele="revele" v-bind:toggleModale="toggleModale"  :modaleData="modaleData[0]"></module>
                        <img src="../components/icons/cv.png" alt="cv" v-on:click="toggleModale" >

                    </div>
                </div>
            </div>
            <div>
                <div class="boucle">
                    <div class="container">
                        <h1>Cahier des Charges</h1>

                        <module v-bind:revele="revele" v-bind:toggleModale="toggleModale" :modaleData="modaleData[1]"></module>
                        <img src="../components/icons/CahierDesCharges.png" alt="Cahier des charges" v-on:click="toggleModale">

                    </div>
                </div>
            </div>
            <div>
                <div class="boucle">
                    <div class="container">
                        <h1>Dynamiser un formulaire</h1>

                        <module v-bind:revele="revele" v-bind:toggleModale="toggleModale" :modaleData="modaleData[2]"></module>
                        <img src="../components/icons/dynamiserUnFormulaire.png" alt="Dynamiser un formulaire" v-on:click="toggleModale">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

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
</style>