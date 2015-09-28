(function($){
    
    $(document).ready(function(){
        
        var $window     = $(window),
            $homeSlider = $('.slides'),
            $hero       = $("section.hero"),
            $logo       = $('.logo-container'),
            $menu       = $('.menu-container'),
            $menuBtn    = $('.menu-toggle'),
            $menuMobile = $('.menu-container.mobile'),
            $search     = $('.search-container'),
            $searchBtn  = $('.search-toggle'),
            $scrollBtn  = $(".scroll-top"),
            $map        = $("#map-coords"),
            $mapArea    = $("#map-coords area"),
            $mapInfo    = $(".map-info"),
            SSConfig    = {
                hashchange: false,
                slide_speed: 5000,
                pagination: false,
                play: 5000
            };
        
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
        
        function heroBackground(offset)
        {
            if (offset <= $hero.height() )
            {
                $hero.css({
                    'background-position' : " 0px  -"+ (offset * 8 ) / 5 +"px "
                });
            }
        }
        
        function scrollTopVisibility(offset)
        {
            var toggleH = ($window.height()/4);

            if( offset > toggleH )
            {            
                $scrollBtn.css({
                    'opacity' : 1
                });            
            }
            if( offset < toggleH )
            {
                $scrollBtn.css({
                    'opacity' : 0
                });         
            }
        }
        
        function scrollTop()
        {
            $scrollBtn.on("click", function(){
                $('html, body').animate({
                    scrollTop : 0
                },800);

                return false;
            })
        }
        
        function searchToggle()
        {
            $searchBtn.on('click', function(){

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
        }
        
        function mobileMenu()
        {
            $menuBtn.on('click', function(){
                $menuMobile.toggle();
            }); 
        }
        
        function mapInteractive()
        {
            
            $mapArea.on("mouseover", function(){
                
                var i       = $(this).data("info"),
                stats_01    = $("[data-stats='1']"),
                stats_02    = $("[data-stats='2']"),
                stats_03    = $("[data-stats='3']");

            var info = [

                { title : "Paraná"             , sub : "Londrina, Cambé, Rolândia, Arapongas, Guaratuba, Ortigueira" , _1 : 24 , _2 : 02 , _3: 05 },
                { title : "SÃO PAULO"          , sub : "Aparecida, São Paulo, Campinas, Araçariguama, Serra Negra" , _1 : 05 , _2 : 00 , _3: 06 },
                { title : "RIO DE JANEIRO"     , sub : "Rio de Janeiro" , _1 : 00 , _2 : 00 , _3: 02 },
                { title : "MINAS GERAIS"       , sub : "Uberaba" , _1 : 00 , _2 : 01 , _3: 00 },
                { title : "RIO GRANDE DO SUL"  , sub : "Canoas" , _1 : 00 , _2 : 00 , _3: 01 },
                { title : "SANTA CATARINA"     , sub : "Lages" , _1 : 00 , _2 : 00 , _3: 01 },
                { title : "BAHIA"              , sub : "Lauro de Freitas" , _1 : 00 , _2 : 00 , _3: 01 },
                { title : "PARAGUAI"           , sub : "Salto del Guairá" , _1 : 00 , _2 : 00 , _3: 01 }

            ];

            $mapInfo.find("span.title").text( info[i].title );
            $mapInfo.find("span.sub").text( info[i].sub );
            stats_01.find("span").text( info[i]._1 );
            stats_02.find("span").text( info[i]._2 );
            stats_03.find("span").text( info[i]._3 );
                
            });
            
        }

        $(window).scroll(function(){
    
            var offset = $(window).scrollTop();
        
            stickyHeader(offset);
            heroBackground(offset);
            scrollTopVisibility(offset);
            
        });
        
        if( $homeSlider.length )
        {   
            $homeSlider.superslides(SSConfig)
        }
        
        if( $map.length )
        {
            mapInteractive();
            $("#map-coords area[data-info='0']").mouseover();
        }        
        
        $.scrollSpeed(100, 800);
        $.scrollIt();
        
        searchToggle();
        mobileMenu();
        scrollTop();
    });
    
})(jQuery)