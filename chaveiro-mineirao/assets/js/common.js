
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
window.onload = "mySwiper()";

var prevScrollpos = window.pageYOffset;

document.getElementsByClassName("header-company")[0].onmouseover = function () {
    document.getElementsByClassName('header')[0].style.top = "0"
};

window.onscroll = function () {
    if (window.scrollY > 80) {
        document.getElementsByClassName('header')[0].style.top = "-80px"
    } else {
        document.getElementsByClassName('header')[0].style.top = "0"
    }
}

document.getElementById("modal-whatsapp-close").onclick = function (e) {
    if (!document.getElementById('modal_whatsapp').contains(e.target)) {
        element.removeClass("modal-whatsapp-close", "d-block");
        element.addClass("modal-whatsapp-close", "d-none");
    }
};

document.getElementById("whatsapp-button").onclick = function(e){
    element.removeClass("modal-whatsapp-close", "d-none");
    element.addClass("modal-whatsapp-close", "d-block");
}

document.getElementById('button-whatsapp-close').onclick = function(e){
    element.removeClass("modal-whatsapp-close", "d-block");
    element.addClass("modal-whatsapp-close", "d-none");
}


var element = {
    
    addClass: function (element_id, class_name) {
        var el = document.getElementById(element_id);
        el.classList.add(class_name);
    },

    findClass: function(element_id, class_name){
        var e = document.getElementById(element_id);
        return e.classList.contains('modal_whatsapp-background');
    },

    removeClass: function(element_id, class_name){
        var e = document.getElementById(element_id);
        e.classList.remove(class_name);
    }
}