// Fonction pour gérer la soumission du formulaire de réservation
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const car = document.getElementById('car').value;
    const date = document.getElementById('date').value;

    if (name && email && car && date) {
        alert(`Merci ${name}! Votre réservation pour la ${car} a été confirmée.`);
        document.getElementById('reservation-form').reset(); // Réinitialiser le formulaire
    } else {
        alert('Veuillez remplir tous les champs!');
    }
});
window.alert("welcome to my web site");
