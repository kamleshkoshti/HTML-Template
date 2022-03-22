$(function() { // Dropdown toggle
    $('.dropdown-toggle').click(function() { $(this).next('.category-drop-down').slideToggle();
  });

    $(document).click(function(e) 
    { 
      var target = e.target; 
      if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
        { $('.category-drop-down').slideUp(); }
    });
  });


$(function() {
    $("#toggle").on('click', function() {   
       $(".ti-angle-down").toggleClass("rotate");
    });
});

  /*Sticky menu*/
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $("nav").addClass("fixed-header");
      $('.categories-menu').fadeOut();
    }else {
      $("nav").removeClass("fixed-header");
      $('.categories-menu').fadeIn();
    }
  });


  filterSelection("men")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("product-box-area");
    if (c == "men") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "showing");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showing");
    }
  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.querySelectorAll(".light");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    btns.forEach(function(tab) {
    	tab.classList.remove("active");
    });
    this.classList.add("active");
  });
}

/* Mobile Menu Toggle Bars Icon Script */
function myFunction() {
  var x = document.getElementById("res-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}