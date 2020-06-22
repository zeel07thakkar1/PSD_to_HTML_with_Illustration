jQuery(document).ready(function($) {



     //----------add active class on page load-------
    var path=window.location.href;

                $(".navbar .nav-link").each(function(){

                    if (this.href == path) {
                        var active=$(this).addClass('active_link');
                        $('.navbar .nav-link').not(active).removeClass('active_link');
                    }
                });


    //----------add active class on nav-link click-------
    
                $(".navbar .nav-link").click(function(event) {
                      var active=$(this).addClass('active_link');
                        $('.navbar .nav-link').not(active).removeClass('active_link');
                });

});


