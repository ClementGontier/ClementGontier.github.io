/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez tous les liens auxquels vous souhaitez ajouter un comportement
    var liens = document.querySelectorAll('.lien-personnalise');

    // Ajoutez un gestionnaire d'événements à chaque lien
    liens.forEach(function(lien) {
        lien.addEventListener('click', function(event) {
            // Empêcher le comportement par défaut du lien (navigation)
            event.preventDefault();

            // Afficher le message personnalisé
            alert("Cette page n'existe pas encore, revenez plus tard 😁.");
        });
    });
});