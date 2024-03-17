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

const url = "http://localhost:3000/users";

// The logic to manage the collection of the users 
   
// The variable define to store the response of the API inside a variable
var data = async () => {
    var data = await fetch_data(url + '/collect', "GET")
    .then(data => {

        // The list of the products
        const dataJson = data.message[0];
        // The function to map the list and display all of the product
        // to the site

        // Get the div that contain the elements
        const productContainer = document.querySelector(".body_div2_div1_div");

        const dataMap = dataJson.map((data) => {
        console.log(data);

            // The template to display the element
            return `
            <div class="body_div2_div1_div_div">
                <p>${data.Name}</p>
                <p>${data.Privilege}</p>
                <div class="body_div2_div1_div_div_div">
                    <input type="button" name="remove" id="${data.id}" value="remove" class="remove">
                    <input type="button" name="promote" id="${data.id}" value="promote" class="promote">
                </div>
            </div>
            `;
            
        }).join("");
        
        // The method innerHTML to join the template to the div
        productContainer.innerHTML = dataMap;

        // Now he remain to implement the logics to promote and delete the users

        // Delete the users on the db
        const remove = document.querySelectorAll(".remove");
        const removeArray = Array.from(remove);
        console.log(removeArray);
        removeArray.forEach(element => {
            element.addEventListener("click", async (e) => {
                
                var data = await fetch_data( url + '/remove', "DELETE", {id: element.id})
                .then(data => {
                    console.log("The product have beeen deleted succesfully")
                })
                .catch(err => err);
    
            })
        });

        // Promote the users

        
    })
    .catch(err => err);
}

data();