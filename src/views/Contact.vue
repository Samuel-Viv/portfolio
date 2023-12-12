<script setup>
// rechargement de la pages ne doit pas se faire 
// Si tous leschamps ne sont pas  complets "message d'erreur"
// Sinon "Message valide"
// Suppression des champs lors de la validation
import { reactive, ref } from 'vue'

const form = reactive({
    lastName: "",
    firstName: "",
    objet: "",
    message: ""
});
let errorMessage = ref("");
let validMessage = ref("")

const submitForm = () => {
    if (!form.firstName || !form.lastName || !form.objet || !form.message) {
        errorMessage.value = "Tous les champs doivent être remplis."
        validMessage.value = ""
    } else {
        validMessage.value = "Votre message à bien été envoyé"
        errorMessage.value = ""
        console.log("Le message a été envoyé à l'adresse mail: samvivier22@gmail.com")

        form.firstName = ""
        form.lastName = ""
        form.objet = ""
        form.message = ""
    }
    return {
        form,
        errorMessage,
        validMessage,
        submitForm
    }
}

</script>

<template>
    <h1 id="contact">Contact</h1>
    <article >
        <form action="#" method="post" @submit.prevent="submitForm">

            <!-- Message d'erreur -->
            <p v-if="errorMessage" class="error-message"> {{ errorMessage }} </p>
            <!-- Message à bien était envoyé -->
            <p v-if="validMessage" class="valid-message"> {{ validMessage }} </p>
            <!-- Formulaire de contact -->
            <div class="all-form">
                <div class="name">
                    <div class="box1">
                        <label for="last-name">Nom: </label>
                        <input type="text" name="last-name" id="last-name" placeholder="Nom" v-model="form.lastName">
                    </div>

                    <div class="box1">
                        <label for="first-name">Prénom: </label>
                        <input type="text" name="first-name" id="first-name" placeholder="Prénom" v-model="form.firstName">
                    </div>

                </div>
                <div class="objet">
                    <div>
                        <label for="objet">Objet: </label>
                        <input type="text" name="objet" id="objet" placeholder="Objet" v-model="form.objet">
                    </div>
                </div>
                <div class="message">
                    <label for="message">Message: </label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"
                        v-model="form.message"></textarea>
                </div>
                <input type="submit" value="Envoyer">
            </div>
        </form>
    </article>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    
}

.all-form {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 600px;
    padding-bottom: 20px;
}

.all-form div {
    margin-bottom: 10px;
}

.name {
    display: flex;
    justify-content: space-between;
}

.box1 {
    width: 48%;
}

label {
    display: block;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}

input[type="submit"] {
    background-color: #a51d67;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

input[type="submit"]:hover {
    opacity: 0.7;
}

.error-message {
    display: block;
    color: red;
    border: solid 1px red;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(255, 0, 0, 0.089);
}


.valid-message {
    display: block;
    color: green;
    border: solid 1px green;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(0, 128, 0, 0.158);
}

h1{
    display: flex;
    justify-content: center;
}
</style>