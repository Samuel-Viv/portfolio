const form = document.querySelector("form")


// Eviter que la page se recharge au clic de envoyer
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    //Recuperer les champs  pour chaque élément du formulaire
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let message = document.getElementById("message").value;
    
    // si les formulaires ne sont pas complet on met un messeage d'erreur.
    if(!firstName || !lastName || !message){
        document.getElementById("error-message").style.display = "block";
    }else{
        // Efface le message d'érreur si les condition son bonne.
        document.getElementById("error-message").style.display = "none";

        //Les mettres les champs dans une balise div avec la classe adapté
        const newComment = document.createElement("div");
        newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
        //h3 pour le nom et prenom  et un balise <div> puis <p> pour le commentaire avec les bonnes classes.
        newComment.innerHTML = `
    <div class="flex-1 py-10 border-t border-gray-200">
    <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
    <p>${message}</p>
    </div>
    `;
    
    //Envoyer dans les commentaires.
    let commentsList = document.getElementById("comment-list")
    commentsList.appendChild(newComment);
    
    //supprimer le champ du contenue une fois validé.
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("message").value = "";
    }
     
});



