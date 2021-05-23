//$(".View_More_toggle").hide();
$(function(){
    $(".View_More").on("mouseover",function(){
        
        $(".View_More").addClass("View_More_toggle");
    });
    $(".View_More").on("mouseleave",function(){
        $(".View_More").removeClass("View_More_toggle");
    //    $(this).hide();
    });

   /*document.getElementById("header-profile").addEventListener("click",()=>{
       alert("ok");
        const targetProfile = document.getElementsByClassName("profile");
        const profileOffsetTop = window.pageYOffset + targetProfile.getBoundingClientRect().top;
        window.scrollTo({
            top: profileOffsetTop,
            behavor: "smooth"
        });

   });*/



    let symbol = ["morning","lunch","dinner"];
    console.log(symbol[0]);
    let slidedown = ["morning-slidedown","lunch-slidedown","dinner-slidedown"];
    for(let i=0; i<3; i++){
        $(window).on("scroll",function(){
            let className1 = "." + symbol[i];
            //let sumple = document.getElementsByClassName("slidedown");
            //console.log(sumple[0]);
            let className2 = "." + slidedown[i];
            let thePosition = $(className1).offset().top;
            let nowPosition = $(window).scrollTop();
            let height = $(window).height();
            console.log(thePosition);
            console.log(nowPosition);
            console.log(height);
            console.log(nowPosition + height);
            if(thePosition < nowPosition + height){
                $(className2).slideDown(2000); 
            } 
            //if (nowPosition + height > 1800){
            //    $(className2).slideUp(5000); 
            //}
        });
    }
   

    function hamburger() {
        document.getElementById('line1').classList.toggle('line_1');
        document.getElementById('line2').classList.toggle('line_2');
        document.getElementById('line3').classList.toggle('line_3');
        document.getElementById('nav').classList.toggle('in');
      }
      document.getElementById('hamburger').addEventListener('click' , function () {
        hamburger();
      } );

   $(".top").on("click",function(){
       $("body,html").animate({scrollTop:0},500);
   });
});

