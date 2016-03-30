$(document).ready(function(){
    $("button#send").click(function() {
        console.log("a");
        var link = "mailto:kdianeartificio@gmail.com"
                 + "?cc=myCCaddress@example.com"
                 + "&subject=" + escape("This is my subject")
                 + "&body=" + escape($('#message')[0].value)
        ;
        window.location.href = link;
        console.log("sent!");
    });
    var maxHeightSection = 0;

    $('body').panelSnap({
        slideSpeed: 250,
        navigation: {
            keys:{
                nextKey: 40,
                prevKey: 38  
            }
        }
    });

    $('div.bottom').on('click',function(){
        // if($('section.active').height()>maxHeightSection){
            maxHeightSection = $('section.active').next().offset().top;
        // }
        $('body').animate({scrollTop:maxHeightSection},600);
    });

    // If scroll is at bottom, arrow disappears else appears
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $('div.bottom').css({"display":"none"});
        }
        else{
            $('div.bottom').css({"display":"inline"});
        }
    });

    $('.dropdown-button').dropdown({
        inDuration: 400,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
    });//*/

	// $('.dropdown-button').click(function(){
 //        console.log($(this).width());
 //        $(this).css({
 //            "width":"100%"
 //        });
 //    });

    $('.button-collapse').sideNav({
        closeOnClick: true
    });
    $('.collapsible').collapsible();

    $('.slider').slider({full_width: true});
    $('.indicators').hide();


    /* Change navbar color on scroll (IESHIKAWA) */
    var scroll_start = 0;
    var offset = $($("body > section")[1]).offset();

    $(document).scroll(function(){
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top-65){ // kapag lagpas na sa first section
            if($('.main-nav')[0]){
                $('.main-nav').parent().css('background', 'rgba(0, 0, 0, .9)');
                $('nav .main-nav li.current').css('border-bottom-color', '#5E7EC1'); 
            }else{
                if($('nav.to-white-text')[0]){
                    $('.sub-nav').parent().css('background', 'rgba(27, 86, 100, .9)').removeClass('inv');
                    $('nav .sub-nav li.current').css('border-bottom-color', '#FFF');
                }
            }
        }
        else {
            $('.transp').css('background', 'transparent', 'box-shadow', 'none');
            if($('.sub-nav')[0]){
                if($('nav.inv-perm')[0] || $('nav.transp')[0]){
                    if(!($('nav.white-text-perm')[0])){
                        $('.sub-nav').parent().addClass('inv');
                    }
                }
                $('nav .sub-nav li.current').css('border-bottom-color', '#007072');
            }
        }
    });

    /**********************************************
                COMMITTEE RADIO BUTTON
    ***********************************************/
    // Set default active to Academic Affairs Committee
    $(".committee-section").css("display","none");
    $(".committee-section#comm_acad_desc").css("display","block");
    $("#comm_acad")
        .attr('src',"resources/images/logos/comm_acad.png")
        .addClass("active");

    // Update active radio to clicked radio
     $(".comm_radio").click(function(){
        var prev_active =  $(".comm_radio.active").attr("id");
        var current_active = $(this).attr("id");
        // Update image to line logo
        $(".comm_radio.active")
            .removeClass("active")
            .find("img")
            .attr("src","resources/images/logos/"+prev_active+"_l.png");
        // Update image to colored logo
        $(this)
            .addClass("active")
            .find("img")
            .attr("src","resources/images/logos/"+current_active+".png");

        // Update description
        $("#"+prev_active+"_desc").css("display","none");
        $("#"+current_active+"_desc").css("display","block");
     });
});
