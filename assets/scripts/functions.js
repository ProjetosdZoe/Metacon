$(function() {
    
    $('.slides').superslides({
        hashchange: false,
        slide_speed: 5000,
        pagination: false,
        play: 5000
    });
    
    //  SLIDER NAVIGATION
    $('nav.slides-navigation a').on('click', function(){
        
        if( $(this).hasClass('prev') )
        {
            $('.slides').superslides('animate', 'prev');
        }
        if( $(this).hasClass('next') )
        {
            $('.slides').superslides('animate', 'next');
        }
        
    });
    
    //
    
    $('.search-toggle').on('click', function(){
        
        var $this = this,
            $menu = $('.menu-container'),
            $logo = $('.logo-container'),
            $search = $('.search-container');
        
        if( $search.hasClass('active') )
        {
            
            $menu.css({
            'opacity' : 1
            });

            $logo.css({
                'opacity' : 1
            });

            $search.css({
                'opacity' : 0,
                'pointer-events' : 'none'
            }).removeClass('active');
            
        }
        else
        {
            
            $menu.css({
            'opacity' : 0
            });

            $logo.css({
                'opacity' : 0
            });

            $search.css({
                'opacity' : 1,
                'pointer-events' : 'all'
            }).addClass('active');
            
        }
        
    }); 
    
    $('.menu-toggle').on('click', function(){
        
        var $this = this,
            $menu = $('.menu-container.mobile');
        
        $menu.toggle();
        
    }); 
    
    $("#carousel").owlCarousel({
 
        autoPlay: 3000,
        stopOnHover : true,
        items : 3,
        responsiveBaseWidth:$("#carousel")

    });
    
    $("#carousel-next").on("click", function(){
        
        var owl = $("#carousel").data('owlCarousel');
        owl.next();
        
    });
    
    $("#contact").submit(function(){
        $(this).find("input").each(function(){
            
            
            
        });
        
        return false;
    });

    $("#contact input, #contact textarea").focus(function(){
        
        if( $(this).hasClass("error") ){
            $(this).removeClass("error");
            $(this).siblings().css({
                'opacity' : 0
            });
        }
        
    });
    
    $(".scroll-top").on("click", function(){
       
        $('html, body').animate({
            scrollTop : 0
        },800);
        
        return false;
    });
    
    function stickyHeader(offset)
    {
        
        if( offset > 125 )
        {
            $("header").addClass("sticky");
        }
        if( offset < 125 )
        {
            $("header").removeClass("sticky");
        }
    }
    
    function scrollTop(offset)
    {
        
        var slider = $(".slides"),
            topbtn = $(".scroll-top"),
            toggleH = (slider.height()/4);
        
        if( offset > toggleH )
        {            
            topbtn.css({
                'opacity' : 1
            });            
        }
        if( offset < toggleH )
        {
            topbtn.css({
                'opacity' : 0
            });         
        }
        
    }
    
    $(window).scroll(function(){
    
        var offset = $(window).scrollTop();
        
        stickyHeader(offset);
        scrollTop(offset);
        
    }).scroll();
});