$(function() {
    
    $('.slides').superslides({
        hashchange: false,
        slide_speed: 5000,
        pagination: false,
        scrollable: false,
        play: 5000
    });

    $('.slides').on('mouseenter', function() {
        $(this).superslides('stop');
    });
    
    $('.slides').on('mouseleave', function() {
        $(this).superslides('start');
    });
    
    //  SLIDER TOUCH    
    document.ontouchmove = function(e) {
        e.preventDefault();
      };
    
    $('.slides').hammer().on('swipeleft', function() {
        $(this).superslides('animate', 'next');
    });

    $('.slides').hammer().on('swiperight', function() {
        $(this).superslides('animate', 'prev');
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
    
    $(window).scroll(function(){
        
        var offset = $(window).scrollTop();
        
        if( offset > 125 )
        {
            $("header").addClass("sticky");
        }
        if( offset < 125 )
        {
            $("header").removeClass("sticky");
        }
        
        
    });
});