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

  // La requete pour envoyer les donnees du formulaire vers l'API comme body de la requete
  $email = $_POST['email'];
  $password = $_POST['password'];

  echo '
  
    <script>

    // The function that using AJAX request to collect the data using the API
    var getJSON = async (url, method, body) => {
        return new Promise((resolve, reject) => {
            var xhr = new window.XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr);
                    }
                }
            };
            xhr.open(method, url, true);
    
            if (body instanceof FormData) {
                xhr.send(body);
            } else {
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(body ? JSON.stringify(body) : null);
            }
        });
    };
    
    // The function to manage the call of the function to collect data
    // and the parse of this in the JSON format
    var fetch_data = async (url, method, body) => {
        try {
            var rep = await getJSON(url, method, body);
            var data = JSON.parse(rep);
        } catch (error) {
            console.log("Error during the collect of the response !", error);
        }
        return data;
    };
        
        // The url to store the data in the db
        const url = "http://localhost:3000/users";
    
        // The call of the API to register the informations of the user
        try {
            
            fetch_data( url + "/login", "POST", {' .
                'email:' . "\"" . $email . "\"" . ',' .
                'password:' . "\"" . $password . "\"" .
            '})' . '.then( rep => {
                console.log(rep);
              )' . '
            
            window.location.href = "./Sign_in.html";
        } catch (error) {
            console.log("Error !");
        }

    </script>

  ';

}
?>