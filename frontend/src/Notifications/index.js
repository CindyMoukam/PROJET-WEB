// The function that using AJAX request to collect the data using the API
var getJSON = async (url, method, body, token) => {
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
            xhr.setRequestHeader("Authorization",  token)
            xhr.setRequestHeader("Content-Type", "application/json"); // Définir l'en-tête Content-Type si vous envoyez des données JSON
            xhr.send(body ? JSON.stringify(body) : null); // Envoyer le corps si fourni, sinon envoyer null
        }
    });
};

// The function to manage the call of the function to collect data
// and the parse of this in the JSON format
var fetch_data = async (url, method, body, token) => {
    try {
        var rep = await getJSON(url, method, body, token);
        var data = JSON.parse(rep);
    } catch (error) {
        console.log("Error during the collect of the response !", error);
    }
    return data;
};


document.addEventListener("DOMContentLoaded", () => {
   
    const token = localStorage.getItem("token");
    if(token){

        var data = async () => { 
            
            var data = await fetch_data("http://localhost:3000/notification/collect", "GET", "", token)
            .then( data => {

                const container = document.querySelector(".cont1");

                const dataJson = data.message[0];
                const dataMap = dataJson.map( (data) => {
                    console.log(data);
                    return `
                        <div class="conteneur">
                            <div class="row">
                                <div class="col-md-6"> 
                                    <div>
                                        <p>Notifications</p><p class="p" >${data.Content}</p>
                                    </div> 
                                    <div>${data.dates}</div>
                                </div>
                                <div class=" box1 col-md-6 "> 
                                    <div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    `
                }).join("");

                container.innerHTML = dataMap;

            })
            .catch( err => err );

        }

        data();

        const homeIcon =  document.querySelector(".body_div1_div1_box1_div1");
        const shopIcon = document.querySelector(".body_div1_div1_box1_div2");
        const params = new URLSearchParams(window.location.search);
        const page = params.get("page");

    shopIcon.addEventListener("click", (e) => {
        onclick = (e) => {
        }
    })
    homeIcon.addEventListener("click", (e) => {
        onclick = (e) => {
        }
    })

if(page === "shop"){
        console.log("This is the Shop !");

        const divHome = document.querySelector(".body_div1_div1_box1_div1");
        const divImgHome = document.querySelector(".body_div1_div1_box1_div1-img1");
        const divShop = document.querySelector(".body_div1_div1_box1_div2");
        const divImgShop = document.querySelector(".body_div1_div1_box1_div2-img2");

        divHome.className = "body_div1_div1_box1_div1_2";
        divImgHome.classList.remove("body_div1_div1_box1_div1-img1");
        divImgHome.setAttribute("class", "body_div1_div1_box1_div1_2-img1_2");
        divShop.className = "body_div1_div1_box1_div2_2";
        divImgShop.classList.remove("body_div1_div1_box1_div2-img2");
        divImgShop.setAttribute("class", "body_div1_div1_box1_div2_2-img2_2");
    }

    // For manage open and close of the menu

    // The varaible to check if the navbar is open
    let open = false;

    const menu = document.getElementById("menu_open_close");
    menu.addEventListener("click", (e) => {
        e.preventDefault();
        onclick = (e) => {
            // The function is jus necessary for the mobile version
            if(window.innerWidth < 500){
                if(open){
                    console.log("close/open");
                    document.getElementById("body_div1_div1").style.height = "80px";
                    open = false;
                } else {
                    console.log("close/open");
                    document.getElementById("body_div1_div1").style.height = "200px";
                    open = true;
                }
            }
        }
    })

    window.addEventListener("resize", () => {
        // I desable the function if the size is not the good
        if(window.innerWidth > 500){
            document.getElementById("body_div1_div1").style.removeProperty("height");
        }
    })

    } else {

        window.location.href = "../Sign_up/Sign_in.html";

    }


})