document.addEventListener('DOMContentLoaded', function() {
  // Sélectionne le lien "Shop"
  const shopLink = document.querySelector('a[href="?page=shop"]');
  // Sélectionne le conteneur du panier
  const cartContainer = document.getElementById('cart-container');
  // Sélectionne le conteneur de la barre de navigation
  const navContainer = document.querySelector('.body_div1');
  // Sélectionne le conteneur des produits
  const productContainer = document.querySelector('.product-container');
  // Sélectionne la barre de recherche
  const searchBar = document.querySelector('.search-bar');
  // Sélectionne l'icône du menu
  const menuIcon = document.getElementById('menu_open_close');
  // Sélectionne le conteneur du menu
  const menu = document.querySelector('.body_div1_div1_box_div');
  // Initialise une variable pour suivre l'état du panier
  let isCartOpen = false;
  
  // Ajoute un écouteur d'événements pour le clic sur le lien "Shop"
  shopLink.addEventListener('click', function(event) {
       event.preventDefault(); // Empêche le comportement par défaut du lien
  
       // Bascule l'état du panier
       isCartOpen = !isCartOpen;
  
       // Réduit la largeur de la barre de navigation et des produits
       navContainer.style.width = isCartOpen ? '10%' : '20%'; // Ajustez cette valeur selon vos besoins
       productContainer.style.width = isCartOpen ? '90%' : '80%'; // Ajustez cette valeur selon vos besoins
  
       // Déplace la barre de navigation et les produits vers la gauche
       navContainer.style.marginLeft = isCartOpen ? '-10%' : '-20%'; // Ajustez cette valeur selon vos besoins
       productContainer.style.marginLeft = isCartOpen ? '-10%' : '-20%'; // Ajustez cette valeur selon vos besoins
  
       // Déplace la barre de recherche vers la gauche en utilisant transform
       searchBar.style.transform = isCartOpen ? 'translateX(-10%)' : 'translateX(0)'; // Ajustez cette valeur selon vos besoins
  
       // Affiche ou cache le panier selon l'état
       cartContainer.style.display = isCartOpen ? 'block' : 'none';
  
       // Bascule l'affichage du menu
       if (menu.style.display === 'none') {
           menu.style.display = 'block';
       } else {
           menu.style.display = 'none';
       }
  
       // Si le panier est fermé, réinitialise les styles à leurs valeurs d'origine
       if (!isCartOpen) {
           // Réinitialisez les styles ici à leurs valeurs d'origine
           // Par exemple :
           navContainer.style.width = '20%'; // Réinitialisez à la valeur d'origine
           productContainer.style.width = '80%'; // Réinitialisez à la valeur d'origine
           navContainer.style.marginLeft = '-20%'; // Réinitialisez à la valeur d'origine
           productContainer.style.marginLeft = '-20%'; // Réinitialisez à la valeur d'origine
           searchBar.style.transform = 'translateX(0)'; // Réinitialisez à la valeur d'origine
       }
  });
 });
 