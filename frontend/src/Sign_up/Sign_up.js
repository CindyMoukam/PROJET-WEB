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
            xhr.setRequestHeader("Content-Type", "application/json"); // Définir l'en-tête Content-Type si vous envoyez des données JSON
            xhr.send(body ? JSON.stringify(body) : null); // Envoyer le corps si fourni, sinon envoyer null
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

var form = document.forms["form"];

form.onsubmit = async (e) => {

    // Collect the date of the form
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const localisation = document.getElementById('localisation').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // The url to store the data in the db
    const url = "http://localhost:3000/users";

    // The call of the API to register the informations of the user
    try {
        
        fetch_data( url + "/register", "POST", { 
            name: nom, 
            surname: prenom, 
            location: localisation,
            email: email,
            password: password
        })

        if (response.ok) {
            console.log('Data send succesfully');
        } else {
            console.error('Error during the files send ! ');
        }
    } catch (error) {
        console.log("Error !");
    }
   

}

