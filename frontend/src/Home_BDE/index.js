
document.addEventListener("DOMContentLoaded", () => {
   
    const logout = document.getElementById("logout");

    logout.addEventListener("click", (e) => {
        //e.preventDefault();
        console.log("Is Ok !");
        localStorage.removeItem("token");
    })

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

})
