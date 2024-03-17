<?php
$email_error = '';
$password_error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Récupérer les données soumises par le formulaire
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Vérifier si les champs sont vides
  if (empty($email) || empty($password)) {
    echo '<script>alert("Veuillez remplir tous les champs."); history.back();</script>';
    exit; // Arrêter l'exécution du script
  }

  // Vérifier si l'e-mail contient "@ucac-icam.com"
  if (!strpos($email, '@ucac-icam.com')) {
    echo '<script>alert("L\'e-mail doit contenir @ucac-icam.com"); history.back();</script>';
    exit; // Arrêter l'exécution du script
  }

  // Vérifier la longueur du mot de passe
  if (strlen($password) < 8) {
    $password_error = 'Le mot de passe doit contenir au moins 8 caractères';
  }

  // Vérifier s'il y a au moins une majuscule
  if (!preg_match('/[A-Z]/', $password)) {
    $password_error = 'Le mot de passe doit contenir au moins une majuscule';
  }

  // Vérifier s'il y a au moins un caractère spécial
  if (!preg_match('/[\W_]/', $password)) {
    $password_error = 'Le mot de passe doit contenir au moins un caractère spécial';
  }

  // Vérifier s'il y a au moins un chiffre
  if (!preg_match('/\d/', $password)) {
    $password_error = 'Le mot de passe doit contenir au moins un chiffre';
  }

  // Si le mot de passe ne respecte pas les critères, afficher un message d'erreur et renvoyer à la page précédente
  if (!empty($password_error)) {
    echo '<script>alert("' . $password_error . '"); history.back();</script>';
    exit; // Arrêter l'exécution du script
  }

  // Autres actions à effectuer si les données sont valides
  // ...
}
?>