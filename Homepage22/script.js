// Login popup
function openLoginForm() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal1").style.display = "none";
    
    
   
  }
  function closeLoginForm() {
    document.getElementById("myModal").style.display = "none";
    
    
  }
  function openSignupForm() {
    document.getElementById("myModal1").style.display = "block";
    document.getElementById("myModal").style.display = "none";
    
    
   
  }
  function closeSignupForm() {
    document.getElementById("myModal1").style.display = "none";
    
    
  }

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Fast food", "Protein rich foods", "Baked Food"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Fast food", "Protein rich foods", "Baked Food"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});