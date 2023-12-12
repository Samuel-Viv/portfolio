<script>
export default {
    name: 'Module',
    props:['revele', 'toggleModale', 'modaleData']
     
    
}

</script>

<template>
    <div class="bloc-modal" v-if=" revele">
        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale">
            <div class="btn-modale " v-on:click="toggleModale">x</div>
            <div id="block">
                <h2>{{ modaleData.name }}</h2>
                <img :src="modaleData.image" :alt="modaleData.name">
                <p>Créé le: {{ modaleData.creationDate }} </p>
                <p>Vous trouverez ci joint mon projet <a :href="modaleData.lien" target="_blank"><b>projet</b> </a> ainsi que le lien <a
                        :href="modaleData.gitHub" target="_blank"><b>GitHub</b></a>.</p>

                <p>Technologies:{{ modaleData.tech }}</p>
            </div>


        </div>
    </div>
</template>

<style scoped>
.bloc-modal {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
}

.overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0%;
    background-color: #333333bc;
    z-index: 0;
}

.modale {
    position: absolute;
    background-color: #f3f3f3;
    top: 10%;
    padding: 40px;
    color: black;
    text-decoration: none;

}

.btn-modale {
    background-color: red;
    color: #f3f3f3;
    height: 35px;
    width: 35px;
    top: 10px;
    right: 10px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 1.5em;
    cursor: pointer;
}

#block{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#block a {
    text-decoration: none;
}
img {
    width: 50%;

}
</style>