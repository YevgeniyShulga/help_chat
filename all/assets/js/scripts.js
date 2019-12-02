(function( $ ) {
  $(document).ready(function(){
    /*expand collpase events*/
    document.observe('expand:event', function(event) { 
      if($('#chat-widget').parent().hasClass('expanded-window')) {
         $('#chat-widget').parent().css('width' , '711px');
        $('#chat-widget').css('width' , '711px');
        $('#chat-widget').parent().removeClass('expanded-window');
      } else {
        $('#chat-widget').parent().css('width' , '1099px');
        $('#chat-widget').css('width' , '1099px');
        $('#chat-widget').parent().addClass('expanded-window');
      }
    });
    document.observe('close:event', function(event) { 
      $('.chat-widget-wrap').removeClass('show');
    });
    document.observe('collapse:event', function(event) { 
      $('#chat-widget').parent().css('height' , '685px');
      $('#chat-widget').css('height' , '685px');
    });

    
   

    /*init draggable*/
    $('.chat-widget-wrap').draggable({
      iframeFix: true
    });

    $('body').on('click' , '#show-widget' , function() {
      $('.chat-widget-wrap').addClass('show');
    });
  });
})( jQuery );