(function($) {
    $(function() {
      // Plugin initialization
      $('.carousel').carousel();
      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        // duration: 300,
        // numVisible: 3,
        onCycleTo: function(item, dragged) {}
      });

    }); // end of document ready
  })(jQuery); // end of jQuery name space