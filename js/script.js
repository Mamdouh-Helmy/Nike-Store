//dark mode
let dark = document.getElementById("dark-mode");
let bod = document.getElementById("body");
let img = document.getElementById("img");

dark.onclick = () => {
    const isDarkMode = bod.classList.toggle("dark");
    if (isDarkMode) {
        bod.style.backgroundColor = '#333';
        img.setAttribute("src" , "images/logo2.png")
        img.style.width = '130px';
    } else {
        bod.style.backgroundColor = '#eee';
        img.setAttribute("src" , "images/logo1.png")
        img.style.width = '90px';
    }
    const DarkMode = bod.classList.contains("dark");
    if (this.scrollY >= 20) {
        if (DarkMode) {
            header.style.cssText = 'background: linear-gradient(to left, #222, #333); box-shadow: 0 0 10px #555;';
        } else {
            header.style.cssText = 'background: linear-gradient(to left, white, #eee); box-shadow: 0 0 10px #ddd;';
        }
    }
}


// scroll
let scroll = document.getElementById('scroll');
let header = document.getElementById("header");

window.onscroll = function () {
    if (this.scrollY >= 250) {
        scroll.classList.add("show");
    } else {
        scroll.classList.remove("show");
    }

    const isDarkMode = bod.classList.contains("dark");
    if (this.scrollY >= 20) {
        if (isDarkMode) {
            header.style.cssText = 'background: linear-gradient(to left, #222, #333); box-shadow: 0 0 10px #555;';
        } else {
            header.style.cssText = 'background: linear-gradient(to left, white, #eee); box-shadow: 0 0 10px #ddd;';
        }
    }
    if (this.scrollY === 0) {
        header.style.cssText = 'background: none; box-shadow: none;';
    }
};

// tabes
let tabes = document.querySelectorAll(".tabes li");
let alltabes = Array.from(tabes);
// let product = document.getElementById("product");
let box = document.querySelectorAll(".product > .box")
let allbox =  Array.from(box)

alltabes.forEach( (ele) => {
    ele.addEventListener('click' , (e) => {
        alltabes.forEach( (e) => {
            e.classList.remove("active")
        })
        e.currentTarget.classList.add("active");

        allbox.forEach ( (ele) => {
            ele.style.display = "none";
        })
        
        document.querySelectorAll(e.currentTarget.dataset.cont).forEach( (ele) => {
            ele.style.display = "block";
        })
    })
} )

//Home Page 
let  panel = document.querySelectorAll(".panel");
panel.forEach ( (ele) => {
    ele.addEventListener( 'click' , () => {
        panel.forEach( (e) => {
            e.classList.remove("active");
        })
        ele.classList.add("active");
    })
})