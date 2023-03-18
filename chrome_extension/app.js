const site = window.location.hostname

//alert(site)

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.querySelector("html").append(custom_element)
}

let site_list = [
    "youtube.com", "www.youtube.com", "instagram.com", "www.instagram.com", "netflix.com", "www.netflix.com", "coolmathgames.com", "wwww.coolmathgames.com"
];


if(site_list.includes(site)) { 
    document.querySelector("html").innerHTML = ""

    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Aboreto");

        @import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

        * {
            user-select: none !important;
            pointer-events: none !important;
        }

        html {
            background-image: linear-gradient(to right, #F7E7CE 10%, #FFFFFF 100%) !important; 
        }

        #access-denied {
            font-family: "Aboreto";
            display: block !important;
            color: #000000;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 80px;
            font-weight: bold;
            z-index: 999999999999;
        }
    `)
    Create_Custom_Element(
        "div",
        "id",
        "access-denied",
        `<i class="bi bi-exclamation-circle"></i> Access Denied`
    )
    
}

