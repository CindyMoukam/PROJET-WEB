// The logic to manage the post of the new product
var form = document.forms["form"];

form.onsubmit = async (e) => {
    e.preventDefault();

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
        const response = await fetch("http://localhost:3000/product/register", {
            method: "POST",
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // },
            body: formData
        })
        if(response.ok){
            console.log("Data send successfully !");
        } else {
            console.log(" Error during the files send ")
        }
    } catch (error) {
        
    }

}

// The logic to manage the collection of the product 

// The function that using AJAX request to collect the data using the API
var getJSON = async (url) => {
    return new Promise((resolve, reject) => {
        var xhr = new window.XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(xhr.responseText);
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open("GET", url, true);
        xhr.send();
    })
};

// The function to manage the call of the function to collect data
// and the parse of this in the JSON format
var fetch_data =  async (url) => {
    try {
        var rep = await getJSON(url);
        var data = JSON.parse(rep);
    } catch (error) {
        console.log("Erreur de recuperation", error);
    }
    return data;
}
   
// The variable define to store the response of the API inside a variable
var data = async () => {
    var data = await fetch_data('http://localhost:3000/product/collect');
    console.log("Hello world !!");
    return data
}
