
 // Supposons que vous ayez un tableau de produits
 const products = [
 { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 100, rating: 4, image: 'https://th.bing.com/th/id/OIP.WhmeRDKJwsuR8oMKOVC_ugHaE7?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
 { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 200, rating: 3, image: 'https://th.bing.com/th/id/OIP.Kri4nzMG5NXi3ZZaBsUSBwHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
 { id: 3, name: 'Produit 3', description: 'Description du produit 3', price: 100, rating: 5, image: 'https://th.bing.com/th/id/OIP.2MRUljtDbK0bHorVbT_r6wHaER?w=311&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
 { id: 4, name: 'Produit 4', description: 'Description du produit 4', price: 200, rating: 2, image: 'https://th.bing.com/th/id/OIP.LgxRM-P4t3MDUItJgXxSpwHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
 { id: 5, name: 'Produit 5', description: 'Description du produit 5', price: 100, rating: 4, image: 'https://th.bing.com/th/id/OIP.62CPQh_Lhx7qme3IGZK8PwHaDt?w=316&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
 { id: 6, name: 'Produit 6', description: 'Description du produit 6', price: 200, rating: 5, image: 'https://th.bing.com/th/id/OIP.62CPQh_Lhx7qme3IGZK8PwHaDt?w=316&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
 // Ajoutez d'autres produits ici
 ];
  
// Récupérer l'ID du produit à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
  
// Trouver le produit correspondant à l'ID
const product = products.find(p => p.id === Number(productId));
  
if (product) {
// Mettre à jour le DOM pour afficher les détails du produit
document.getElementById('product-image').src = product.image;
document.getElementById('product-name').textContent = product.name;
document.getElementById('product-description').textContent = product.description;
document.getElementById('product-price').textContent = 'Prix : ' + product.price;
  
// Calculer le nombre d'étoiles
const ratingStars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
  
// Mettre à jour l'élément product-rating avec la notation en étoiles
document.getElementById('product-rating').textContent = 'Notation : ' + ratingStars;
} else {
// Gérer le cas où le produit n'est pas trouvé
document.getElementById('product-name').textContent = 'Produit non trouvé';
document.getElementById('product-description').textContent = '';
document.getElementById('product-price').textContent = '';
document.getElementById('product-rating').textContent = '';
}
