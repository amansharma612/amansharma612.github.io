var toggler = document.getElementById('menu');
var navbar = document.getElementsByClassName('nav-links');
var form = document.getElementById("hobby-form");
if(form){
    const formData = new FormData(form);
}

toggler.onclick = function(){
    document.getElementById('dash-1').classList.toggle('dash1-move');
    document.getElementById('dash-3').classList.toggle('dash3-move');

    navbar[0].classList.toggle("mobile-nav");
}


form.addEventListener("submit" ,(e) => {
    e.preventDefault();

    var hobbies_selected = "";

    for(const element of form.elements['hob-values']){
        if(element.checked){
            hobbies_selected = hobbies_selected + "\n " + element.value;
        }
        
    }

    

    form.classList.add('display-disabler');


    if(confirm("Hobbies selected -->" + hobbies_selected + "\n Want to Continue?")){
    
    for (const element of form.elements['hob-values']){
            document.getElementById(element.value).classList.remove('display-enabler')
            document.getElementById(element.value).classList.remove('display-disabler')
            if(element.checked){
                document.getElementById(element.value).classList.add('display-enabler')
            } else {
                document.getElementById(element.value).classList.add('display-disabler')
            }
        }
    }
    
  

})

