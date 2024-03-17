document.getElementById('shop-link').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de rediriger l'utilisateur
    var productContainer = document.querySelector('.product-container');
    if (productContainer.style.display === "none") {
        productContainer.style.display = "flex"; // Affiche le conteneur des produits
    } else {
        productContainer.style.display = "none"; // Cache le conteneur des produits
    }
});
