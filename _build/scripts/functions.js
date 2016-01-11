(function($){
    
    $(document).ready(function(){
        
        var $window           = $(window),
            $homeSlider       = $('.slides ul'),
            $hero             = $("section.hero"),
            $logo             = $('.logo-container'),
            $menu             = $('.menu-container'),
            $menuBtn          = $('.menu-toggle'),
            $menuMobile       = $('.menu-container.mobile'),
            $search           = $('.search-container'),
            $searchBtn        = $('.search-toggle'),
            $scrollBtn        = $(".scroll-top"),
            $map              = $("#map-coords"),
            $mapArea          = $("#map-coords area"),
            $mapInfo          = $(".map-info"),
            $carousel         = $(".carousel"),
            $carouselP        = $(".carousel-prev"),
            $carouselN        = $(".carousel-next"),
            $googleMap        = $("#googleMap"),
            $contactForm      = $(".contact-form form"),
            $contactInput     = $contactForm.find("[id*='contact']"),
            $loginForm        = $(".login-container form"),
            $loginInput       = $loginForm.find("input"),
            $portfolioPages   = $(".portfolio-pages"),
            $portfolioPlace   = $(".portfolio-placeholder"),
            $portfolioFilter  = $(".portfolio-filter"),
            $portfolioItem    = $(".portfolio-item"),
            $portFilterItem   = $portfolioFilter.find("li"),
            $portfolioNav     = $(".portfolio-nav"),
            $portfolioNavTab  = $portfolioNav.find("[data-tab]"),
            $portfolioPanes   = $(".portfolio-panes"),
            $portfolioMap     = $("#portfolioMap"),            
            $obraFilter       = $(".obra-filter"),
            $obraItem         = $(".obra-item"),
            $obraFilterItem   = $obraFilter.find("li"),          
            $investFilter     = $(".investimento-filter"),
            $investItem       = $(".investimento-item"),
            $investFilterItem = $investFilter.find("li"),
            $popupOverlay     = $(".popup-overlay"),
            $popup            = $(".popup"),
            SliderConfig      = {
                autoPlay : true,
                navigation : false,
                slideSpeed : 300,
                pagination : false,
                paginationSpeed : 400,
                singleItem: true,
                stopOnHover: false,
                addClassActive: false
            },
            settings        =   {
                owlPortfolio: null
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
            var height = $hero.height();
            if (offset <= height )
            {                            
                $hero.css({
                    'background-position' : " 50% "+ Math.round( ((offset * 100) / height * 3) ) +"%"
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
        
        function googlemaps()
        {   
            var coords = [
                { title: "Metacon Engenharia" , phone: "43 3377.1600" , lat: -23.3178821, lng: -51.1645811 }
            ];

            var map = new google.maps.Map(document.getElementById('googleMap'),{
                center: { lat: -23.3178821, lng: -51.1645811 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControlOptions: {
		    	style: google.maps.ZoomControlStyle.LARGE,
		    },
                scrollwheel: false,
                draggable: false,
                zoom: 18
            });

            for(var i = 0; i < coords.length; i++ )
            {

                var infoWindow = new google.maps.InfoWindow(),
                    position   = new google.maps.LatLng(coords[i].lat, coords[i].lng),
                    marker     = new google.maps.Marker({
                        position: position,
                        map: map,
                        title: 'Metacon Engenharia',
                        icon : {
                            url: 'assets/images/marker.png',
                            origin: new google.maps.Point(0,0),
                            anchor: new google.maps.Point(40,68)    // 27 for Px from the X axis (tip of pointer) and 42 For Px from the Y axis (Height)
                        }
                    });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infoWindow.setContent("<div class='marker'><div class='marker-title'>"+coords[i].title+"</div><div class='marker-phone'><h3>Telefone: </h3><span>"+coords[i].phone+"</span></div></div>");
                        infoWindow.open(map, marker);
                    }
                })(marker, i));

            }

        }
        
        function verifyForm()
        {
            
        }
        
        function formInputAction(input)
        {
            $(input)
                .on("focus", function(){ 
            
                    $(this).parent().find("label").css({ 'top': '-5px' });
                
                })
                .on("blur", function(){
                
                    $(this).parent().find("label").css({ 'top': '26px' });
                
                });
        }
        
        function togglePortfolioFilterItem($this)
        {
            $portFilterItem.removeClass("active");
            $($this).addClass("active");
        }
        
        function filterPortfolioItems(id)
        {
            
            $portfolioItem.each(function(){
                //$(this).show(400).find("a figure").css({ 'width' : "100%" , 'height' : "100%" })
                
                if( id == 0  )
                {
                    $(this).show();
                }
                else
                {                  
                    if( $(this).data("type") != id )
                    {
                        
                        $(this).hide();
                        
                    }
                    else
                    {
                        $(this).show();
                    }
                }
                
            });
            
        }
        
        function togglePortfolioTitle(item,flag)
        {
            if(flag == 1)
            {
                $(item).find("figure span").css({ 'right' : '0%' });
            }
            else
            {
                $(item).find("figure span").css({ 'right' : '-100%' });
            }
        }
        
        function togglePortfolioPane(id)
        {
            $portfolioPanes.children("[data-pane!='"+id+"']").each(function() { 
                $(this).css({
                    'display' : 'none',
                    'opacity' : '0'
                });
            });
            $portfolioPanes.find(".pane[data-pane='"+id+"']").css({
                'display' : 'block',
                'opacity' : '1'
            });
            
            if(id == 2)
            {
                google.maps.event.addDomListener(window, 'load', portfolioMap($portfolioMap) );
            }
        }
        
        function portfolioMap(info)
        {   
            var coord = {  lat: info.data("lat"), lng: info.data("lng")  };
        
            var map = new google.maps.Map(document.getElementById('portfolioMap'),{
              center: coord,
              zoom: 18
            });

            var marker = new google.maps.Marker({
                position: coord,
                map: map,
                title: info.data("title") ,
                icon : {
                    url: 'assets/images/marker.png',
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(40,68)
                }
            });

            var markerInfo = new google.maps.InfoWindow({
                content: "<div id='map-marker'>"+info.data("title")+"</div>"
            });

            google.maps.event.addListener(marker, 'click', function() { markerInfo.open(map,marker); });
        }
        
        function togglePortfolioNavClass(nav)
        {
            $portfolioNavTab.removeClass('active');
            nav.addClass('active');
        }
        
        function toggleObraFilterItem($this)
        {
            $obraFilterItem.removeClass("active");
            $($this).addClass("active");
        }
        
        function filterObraItems(id)
        {
            
            $obraItem.each(function(){
                $(this).show();
                
                if( id == 0  )
                {
                    $(this).show();
                }
                else
                {                  
                    if( $(this).data("type") != id )
                    {
                        $(this).hide();
                    }
                }
                
            });
            
        }
        
        function toggleObraTitle(item,flag)
        {
            if(flag == 1)
            {
                $(item).find("figure span").css({ 'bottom' : '0%' });
            }
            else
            {
                $(item).find("figure span").css({ 'bottom' : '-100%' });
            }
        }
        
        function toggleInvestFilterItem($this)
        {
            $investFilterItem.removeClass("active");
            $($this).addClass("active");
        }
        
        function filterInvestItems(id)
        {
            
            $investItem.each(function(){
                $(this).show();
                
                if( id == 0  )
                {
                    $(this).show();
                }
                else
                {                  
                    if( $(this).data("type") != id )
                    {
                        $(this).hide();
                    }
                }
                
            });
            
        }
        
        function toggleInvestTitle(item,flag)
        {
            if(flag == 1)
            {
                $(item).find("figure span").css({ 'right' : '0%' });
            }
            else
            {
                $(item).find("figure span").css({ 'right' : '-100%' });
            }
        }    
        
        function portfoliopagesclear()
        {
            $portfolioItem.each(function(){
                $(this).detach().appendTo($portfolioPlace);
            });
            $portfolioPages.find("[data-page]").each(function(){$(this).remove()})
        }
                
        function portfoliopages()
        {
            var pages = {
                xs : Math.ceil(($portfolioItem.length / 1)),
                sm : Math.ceil(($portfolioItem.length / 4)),
                md : Math.ceil(($portfolioItem.length / 6)),
                lg : Math.ceil(($portfolioItem.length / 8)),
                vp : null,
                nb : null,
            };
            
            if( $window.width() < 640 )
            {
                pages.vp = pages.xs;
                pages.nb = 1;
            }
            else if( $window.width() > 640 && $window.width() < 960 )
            { 
                pages.vp = pages.sm;
                pages.nb = 3;
            }
            else if( $window.width() > 960 && $window.width() < 1280 )
            {
                pages.vp = pages.md;
                pages.nb = 5;
            }
            else if( $window.width() >= 1280 )
            {
                pages.vp = pages.lg;
                pages.nb = 7;
            }
            
            for(var pga=0; pga < pages.vp; pga++)
            {                    
                var d = document.createElement('div');
                $(d).addClass('page').attr("data-page", pga+1 ).appendTo($portfolioPages); 

                $portfolioPlace.find($portfolioItem).each(function(z){
                    if( z <= pages.nb )
                    {
                        $(this).detach().appendTo($portfolioPages.find("[data-page='"+(pga+1)+"']"));
                    }
                });
            }
            if( settings.owlPortfolio != null )
            {
                
            }
        }

        $(window).scroll(function(){
    
            var offset = $(window).scrollTop();
        
            stickyHeader(offset);
            heroBackground(offset);
            scrollTopVisibility(offset);
            
        });
        
        
        if( navigator.userAgent.indexOf("Windows") != -1 || navigator.userAgent.indexOf("Linux") != -1)
        {
            $.scrollSpeed(100, 800);
        }    
        
        if( $homeSlider.length )
        {   
            $homeSlider.owlCarousel(SliderConfig);
        }
        
        if( $map.length )
        {
            mapInteractive();
            $("#map-coords area[data-info='0']").mouseover();
        } 
        
        if( $carousel.length )
        {
            $carousel.each(function(){
                
                $(this).owlCarousel({
 
                      navigation : false, // Show next and prev buttons
                      slideSpeed : 300,
                      pagination : $carousel.data("pagination"),
                      autoHeight : $carousel.data("resize"),
                      paginationSpeed : 400,
                      singleItem: true

                });               
                        
                var owl = $(this).data('owlCarousel');
                $carouselN.on("click", function(){ owl.next()  });
                $carouselP.on("click", function(){ owl.prev()  });

            });
        }
        
        if( $googleMap.length )
        {
            google.maps.event.addDomListener(window, 'load', googlemaps);
        }
        
        if( $contactForm.length )
        {
            $contactForm.on("submit", verifyForm() )
            $.each( $contactInput, function(){ formInputAction(this) });
        }
        
        if( $loginForm.length )
        {
            $.each( $loginInput, function(){ formInputAction(this) });
        }
        
        if( $portfolioFilter.length )
        {            
            $portFilterItem.on("click", function(){                
                togglePortfolioFilterItem( this ); 
                filterPortfolioItems( $(this).data("filter") );
//                settings.owlPortfolio.data("owlCarousel").destroy();
//                portfoliopagesclear();
//                portfoliopages();                
//                var owl = $portfolioPages.owlCarousel({
//                   singleItem: true 
//                });
//                settings.owlPortfolio = owl;
            });
        }
        
        if( $portfolioItem.length )
        {
            portfoliopages();
//            var owl = $portfolioPages.owlCarousel({
//               singleItem: true 
//            });
//            settings.owlPortfolio = owl;
            $portfolioItem
                .on("mouseenter", function(){ togglePortfolioTitle( this , 1); })
                .on("mouseleave", function(){ togglePortfolioTitle( this , 2); });
        }
        
        if( $portfolioNav.length )
        {
            $portfolioNavTab.on("click", function(){ togglePortfolioNavClass( $(this) ); togglePortfolioPane( $(this).data("tab") ); });            
            $portfolioNavTab.eq(0).trigger("click");
        }
        
        if( $obraFilter.length )
        {
            $obraFilterItem.on("click", function(){ toggleObraFilterItem( this ); filterObraItems( $(this).data("filter") ) });
        }
        
        if( $obraItem.length )
        {
            $obraItem
                .on("mouseenter", function(){ toggleObraTitle( this , 1); })
                .on("mouseleave", function(){ toggleObraTitle( this , 2); });
        }
        
        if( $investFilter.length )
        {
            $investFilterItem.on("click", function(){ toggleInvestFilterItem( this ); filterInvestItems( $(this).data("filter") ) });
        }
        
        if( $investItem.length )
        {
            $investItem
                .on("mouseenter", function(){ toggleInvestTitle( this , 1); })
                .on("mouseleave", function(){ toggleInvestTitle( this , 2); });
        }
        
        if( $popup.length )
        {
            $popup.find("form").on("submit", function(){
                
                $popup.css({
                    'display' : 'none'
                });
                $popupOverlay.css({
                    'display' : 'none'
                });
                
                window.location = $(this).attr("action");
                
                return false;

            });
        }
        
        $.scrollIt();
        
        searchToggle();
        mobileMenu();
        scrollTop();
        
    });
    
})(jQuery)