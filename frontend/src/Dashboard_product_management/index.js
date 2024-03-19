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

// The url to acces at the server
const url = "http://localhost:3000/products";


// The logic to manage the post of the new product
var form = document.forms["form"];

form.onsubmit = async (e) => {

    // The form data class to manage the multipart/form-data
    const formData  = new FormData();

    const name  = document.getElementById("name").value;
    const description  = document.getElementById("description").value;
    const category  = document.getElementById("category").value;
    const image = document.getElementById("image");
    const price  = document.getElementById("price").value;
    const quantity  = document.getElementById("quantity").value;

    const files = image.files;

    // Add the strandard data to the formData
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('quantity', quantity);

    // Add the img to the formData
    for(let i = 0; i< files.length; i++){
        formData.append("images", files[i]);
    }

    console.log(formData);

    try {
        const response = await fetch_data(url + "/register", "POST", formData);     
        
        if(response.status === "ok"){
            console.log("Data send successfully !");
        } else {
            console.log(" Error during the files send ")
        }
    } catch (error) {
        error;
    }

}

// The logic to manage the collection of the product 
   
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
                    <p>${data.Category}</p>
                    <div class="body_div2_div1_div_div_div">
                        <input type="button" name="remove" id="${data.id}" value="remove" class="remove">
                        <input type="button" name="promote" id="${data.id}" value="update" class="update">
                    </div>
                </div>
            `;
            
        }).join("");
        
        // The method innerHTML to join the template to the div
        productContainer.innerHTML = dataMap;

        // Now he remain to implement the logics to update and delete the products

        // Delete the product on the db
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
        
    })
    .catch(err => err);
}

data();