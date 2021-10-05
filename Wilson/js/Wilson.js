$( document ).ready(function() {
   /* $(".btn--page").click(function(){*/
      $(".main").toggleClass("in-focus");
   /* });*/
  $(".location").hover(function(){
      $(".cn").toggleClass("is--visible");
  });
  $(".skills__item").click(function(){
    $(this).next().toggleClass("is--visible");
    $(this).next().children().toggleClass("is--visible");
    $('body').toggleClass("color-change");
  });
  $(".btn--close").click(function(){
    $(this).parent().toggleClass("is--visible");
    $(this).parent().parent().toggleClass("is--visible");
    $('body').toggleClass("color-change");
  });
  
  $(".js--btn-more").click(function(){
    $(this).parent().toggleClass("is--expanded");
    $(this).toggleClass("is--visible");
    $(this).next().toggleClass("is--visible");
    
  });
  $(".js--btn-less").click(function(){
    $(this).parent().toggleClass("is--expanded");
    $(this).toggleClass("is--visible");
    $(this).prev().toggleClass("is--visible");
  });
});