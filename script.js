var toggler = document.getElementById('menu');
var navbar = document.getElementsByClassName('nav-links');
toggler.onclick = function(){
    document.getElementById('dash-1').classList.toggle('dash1-move');
    document.getElementById('dash-3').classList.toggle('dash3-move');

    navbar[0].classList.toggle("mobile-nav");
}

