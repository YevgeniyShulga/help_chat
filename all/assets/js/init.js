(function( $ ) {
  $(document).ready(function(){
    $("select").fancySelect({forceiOS: true});
    $("select").fancySelect().on('change.fs', function() {
      $(this).parent().addClass('changed');
      $(this).parents('.custom-select-wrap').siblings('.disabled').removeClass('disabled');
      if($(this).val() == 0) {
				$('.remove-subject , .edit-subject').addClass('disabled');
			} else {
				$(this).parents('.custom-select-wrap').siblings('.disabled').removeClass('disabled');
			}
    });    

    $('body').on('click touchstart', function(e) { 
      if($(e.target).parents('.fancy-select').length != 1 && $('.trigger').hasClass('open')){ 
        $('.trigger, .options').removeClass('open');
      }

      if($(e.target).parents('.smiles').length != 1 && $('.smiles-modal').hasClass('open') && $(e.target).parents('.settings-wrap').length != 1){ 
        $('.smiles-modal').removeClass('open');
      }
    });

    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4',
        weekStartDay:1,
        format: 'yyyy-mm-dd'
    });

    $('#time').inputmask({"mask": "99 : 99"});

    
    $('body').on('click' , '.expand-btn', function(e){
      $('body').toggleClass('expanded');
    })

    
    $('body').on('click' , '.tab-menu li', function(e){
      var id=$(this).attr('role');
      $('#'+$('.tab-menu li.active').attr('role')).hide().animate({opacity: "0"}, 500);
      $('.tab-menu li').removeClass();
      $(this).addClass('active');
      $('#'+id).show().animate({opacity: "1"}, 500);
    });

    
    $('body').on('click' , '.smiles > a', function(e){
      $('.smiles  .smiles-modal').toggleClass('open');
      e.preventDefault();
    })

    
    $('body').on('click' , '.settings-wrap > a', function(e){
      $('.settings-wrap .smiles-modal').toggleClass('open');
      e.preventDefault();
    })

    $('[data-toggle="tooltip"]').tooltip();

    
    $('body').on('click' , '.down-arrow', function(e){
      $(this).parent().toggleClass('expand');
      e.preventDefault();
    });

    $('#textarea').autogrow();
    
    $('.search-bar input').keyup(function(e){
      var _this =$(this).val();
      var _thisEl = $(this);
      if(_this == "") {
        _thisEl.parents('.search-section').find('.search-list .mCSB_container .row-id').show();
        _thisEl.parents('.search-section').find('.search-list .mCSB_container .nothing').remove();
      } else {
        var flag = false;
        _thisEl.parents('.search-section').find('.search-list .mCSB_container .row-id').hide();
        _thisEl.parents('.search-section').find('.search-list .mCSB_container .row-id').each(function(e){
          if($(this).text().indexOf(_this) !== -1) { 
            flag = true;
            $(this).show();
          }
        });
        if(!flag) {
          if(!_thisEl.parents('.search-section').find('.search-list .mCSB_container .nothing').length) {
            _thisEl.parents('.search-section').find('.search-list .mCSB_container').append('<div class="row-id nothing">Ничего не найдено</div>');
          } else {
            _thisEl.parents('.search-section').find('.search-list .mCSB_container .nothing').show();
          }
        }
      }
      e.preventDefault();
    });

    $('body').on('click' , '.clear-search', function(e){
      $(this).parents('.search-section').find('.cancel-search').removeClass('show');
      $(this).parents('.search-section').find('.main-btns').show();
      $(this).parents('.search-section').find('.search-bar input').val('');
      $(this).parents('.search-section').find('.search-list .mCSB_container .row-id').show();
      $(this).parents('.search-section').find('.search-list .mCSB_container .nothing').hide();
      e.preventDefault();
    });
    
    $('body').on('click' , '.download-el', function(e){
      var ids = '';
      $(this).parents('.search-section').find('.search-list .mCSB_container .row-id').not('.nothing').each(function(e){
        ids += $(this).text() + ',';
      });
      ids = ids.substr(0, ids.length-1);
      prompt("IDs", ids);      
      e.preventDefault();
    });

   
    
    $('body').on('click' , '.cancel-search', function(e){
        $(this).parents('.search-section').find('.cancel-search').removeClass('show');
        $(this).parents('.search-section').find('.search-bar input').val('');
        $(this).parents('.search-section').find('.search-list .mCSB_container .row-id').show();
        $(this).parents('.search-section').find('.search-list .mCSB_container .nothing').remove();
        $(this).parents('.search-section').find('.main-btns').show();
        e.preventDefault();
    });

    $('.search-bar input').keyup(function() {
      if($(this).parents('.search-section').find('.search-bar input').length > 0) {
        $(this).parents('.search-section').find('.cancel-search').addClass('show');
        $(this).parents('.search-section').find('.main-btns').hide();
      }
    });

    
    $('body').on('click' , '.delete-el', function(e){
      $(this).parents('.search-section').find('.confirm-delete').show();
      $(this).parents('.search-section').find('.main-btns').hide();
      e.preventDefault();
    });
    
    $('body').on('click' , '.confirm-delete a', function(e){
      $(this).parents('.search-section').find('.confirm-delete').hide();
      $(this).parents('.search-section').find('.main-btns').show();
      e.preventDefault();
    });

    
    $('body').on('click' , '.add-el', function(e){
      $(this).parents('.search-section').find('.confirm-add').show();
      $(this).parents('.search-section').find('.confirm-add .el-wrap input').trigger('focus');
      $(this).parents('.search-section').find('.main-btns').hide();
      e.preventDefault();
    });

    $('body').on('click' , '.edit-el', function(e){
      var _this = $(this);
      if(_this.parents('.search-section').find('.search-list .mCSB_container .selected').length) {
        _this.parents('.search-section').find('.search-list .mCSB_container').find('.selected').each(function(){
          _this.parents('.search-section').find('.confirm-edit > div').append('<div class="el-wrap"><span>id</span><input type="text" name="el" value="' + $(this).text() +'" /></div>');
        });
      } else {
        _this.parents('.search-section').find('.search-list .mCSB_container').find('.row-id').each(function(){
          _this.parents('.search-section').find('.confirm-edit > div').append('<div class="el-wrap"><span>id</span><input type="text" name="el" value="' + $(this).text() +'" /></div>');
        });
      }      
      _this.parents('.search-section').find('.confirm-edit').show();
      _this.parents('.search-section').find('.main-btns').hide();
      e.preventDefault();
    });

    $('body').on('click' , '.apply-edit', function(e){
      var _this = $(this);
      if($(this).parents('.search-section').find('.search-list .mCSB_container .selected').length) {        
        var ids = $(this).parents('.search-section').find('.confirm-edit .el-wrap input');
        var i = 0;
        
        $(this).parents('.search-section').find('.search-list .mCSB_container').find('.selected').each(function(){
          $(this).text($(ids[i]).val()).removeClass('selected');
          i++
        });        
      } else {
        $(this).parents('.search-section').find('.search-list .mCSB_container').html('');
        $(this).parents('.search-section').find('.confirm-edit .el-wrap input').each(function(){
          _this.parents('.search-section').find('.search-list .mCSB_container').append('<div class="row-id">' + $(this).val() + '</div>');
        });
      }  
      $('.confirm-edit > div').html('');
      e.preventDefault();
    });

    $('body').on('click' , '.confirm-edit .cancel', function(e){
      $(this).parents('.search-section').find('.confirm-edit > div').html('');
      e.preventDefault();
    });
    
    
    $('body').on('click' , '.apply', function(e){
      var ids = $(this).parents('.search-section').find('.confirm-add input').val().split(',');
      for(i=0 ; i < ids.length ; i++) {
        var flag = false;
        $(this).parents('.search-section').find('.search-list .mCSB_container .row-id').each(function(){
          if($(this).text() == ids[i]) {
            flag = true;
          }
        });
        if(!flag) {
          $(this).parents('.search-section').find('.search-list .mCSB_container').append('<div class="row-id">' + ids[i] + '</div>');  
         }
      }      
      e.preventDefault();
    });

    $('body').on('click' , '.confirm-delete .delete', function(e){
      if($(this).parents('.search-section').find('.search-list .mCSB_container .selected').length) {
         $(this).parents('.search-section').find('.search-list .mCSB_container .selected').remove();  
      } else {
        $(this).parents('.search-section').find('.search-list .mCSB_container').find('.row-id').remove();  
      }      
      e.preventDefault();
    });
    

    $('body').on('click' , '.confirm-box a', function(e){
      $(this).parents('.search-section').find('.confirm-box').hide();
      $(this).parents('.search-section').find('.confirm-box .el-wrap input').val('');
      $(this).parents('.search-section').find('.main-btns').show();
      e.preventDefault();
    });

    $('body').on('click' , '.row-id' , function(e) {
      if($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $(this).find('.icon-check').remove();
      } else {
        $(this).addClass('selected').append('<span class="icon-check"><span class="path1"></span><span class="path2"></span></span>');
      }
      e.preventDefault();
    });

    $('.message-options input').blur(function(){
      if($(this).val() != '') {
        $(this).addClass('changed');
      } else {
        $(this).removeClass('changed');
      }
    });
    $('#datepicker').change(function(){
      if($(this).val() != '') {
        $(this).addClass('changed');
      } else {
        $(this).removeClass('changed');
      }
    });

       
    $("#slider").slider({
      range: true,
      min: 18,
      max: 70,
      values: [18, 70],
      slide: function(event, ui) {
        jQuery('#minvalue span').text(ui.values[0]);
        jQuery('#maxvalue span').text(ui.values[1]);                 
      }        
    }); 
    $(".message-options").mCustomScrollbar({
      callbacks:{
        onInit: function(){
          $('.message-options .col-50').addClass('loaded');
        }
      }
    }); 

    
    $('body').on('click' , '.show-photos', function(e){
      $('.photo-files').slideDown(100, function(){fixScrollHeight();});
      $('.file-controls').toggleClass('show');
      e.preventDefault();
    });

    
    $('body').on('click' , '.show-videos', function(e){
      $('.video-files').slideDown(100, function(){fixScrollHeight();});
      $('.file-controls').toggleClass('show');
      e.preventDefault();
    });

    
    $('body').on('click' , '.show-audios', function(e){
      $('.audio-files').slideDown(100, function(){fixScrollHeight();});
      $('.file-controls').toggleClass('show');
      e.preventDefault();
    });

    
    $('body').on('click' , '.file-controls a', function(e){
      $('.file-controls').toggleClass('show');
      $('.files-wrap').slideUp(100, function(){fixScrollHeight();});
      e.preventDefault();
    });

    $('body').on('click' , '.files-wrap span' , function(e){
      $(this).toggleClass('checked');
      e.preventDefault();
    });

    $('body').on('click' , '.audio-files a' , function(e){
      $(this).toggleClass('checked');
      if($(this).hasClass('checked')) {
        $(this).append('<span class="icon-check"><span class="path1"></span><span class="path2"></span></span>');
      } else {
        $(this).find('.icon-check').remove();
      }
      e.preventDefault();
    });

    function fixScrollHeight() {
      var newH = 588 - $('.msg-form').innerHeight();
      $('.message-options').css('height' , newH + 'px');
    }

    
    $('body').on('click' , '.apply-files', function(e){
      if($('.files-wrap:visible').find('.checked').length) {
        $('.remove-all').addClass('show');
        $('.selected-files').addClass('show');
      }
      $('.files-wrap:visible').find('.checked').each(function(){
        var _id = $(this).data('id');
        if(!$('.selected-files-in .mCSB_container strong[data-id="' + _id + '"]').length) {
          if($('.files-wrap:visible').hasClass('audio-files')) {
            var _name = $(this).find('strong').text();
            
            $('.selected-files-in .mCSB_container').append('<strong data-id="' + _id + '"><a href="javascript:;"><span class="icon-close1"><span class="path1"></span><span class="path2"></span></span></a><span class="icon-audio-wrap"><span class="icon-audio"></span></span><span>' + _name + '</span></a></strong>');
          } else {
            var _url = $(this).find('img').attr('src');
            var _name = $(this).find('img').data('name');          
            $('.selected-files-in .mCSB_container').append('<strong data-id="' + _id + '"><a href="javascript:;"><span class="icon-close1"><span class="path1"></span><span class="path2"></span></span></a><img src="' + _url + '" alt="Image"><span>' + _name + '</span></a></strong>');
          }
        }
      });
      e.preventDefault();
    });

    $('body').on('click' , '.selected-files-in .mCSB_container strong a', function(e){
      var _id = $(this).parent().data('id'); 
      $('.files-wrap span[data-id="' + _id + '"] , .files-wrap a[data-id="' + _id + '"]').removeClass('checked');
      $('.files-wrap a[data-id="' + _id + '"]').find('.icon-check').remove();
      $(this).parent().remove();
      if(!$('.selected-files-in .mCSB_container strong').length) {
        $('.selected-files').removeClass('show');
        $('.remove-all').removeClass('show');
      }
      e.preventDefault();
    });

    
    $('body').on('click' , '.remove-all', function(e){
      $('.selected-files-in .mCSB_container strong').remove();
      $('.files-wrap .checked').removeClass('checked');
      $('.files-wrap .icon-check').remove();
      $('.remove-all').removeClass('show');
      $('.selected-files').removeClass('show');
      e.preventDefault();
    });

    
    $('body').on('click' , '.remove-msg', function(e){
      $(this).parents('tr').remove();
    });
    
    $('body').on('click' , '.remove-msgs', function(e){
      $('tbody tr').remove();
    });

    
    $('body').on('click' , '.notice-btn', function(e){
      $(this).parents('.notice-bar').remove();
      e.preventDefault();
    });

    
    $('body').on('click' , '.add-subject', function(e){
      $('.subject-overlay').addClass('show');
      e.preventDefault();
    });

    var editOption = '';
    
    $('body').on('click' , '.edit-subject', function(e){
      $('.subject-overlay').addClass('show');
      $('.subject-overlay input').val($('select[name="subject"] option:selected').text());
      editOption = $('select[name="subject"]').val();
      e.preventDefault();
    });

    
    $('body').on('click' , '.remove-subject', function(e){
      $("select option[value='" + $('select[name="subject"]').val() + "']").each(function() {
        $(this).remove();
        $('select[name="subject"]').trigger('update.fs');      
      });
      e.preventDefault();
    });

    
    $('body').on('click' , '.cancel-subject', function(e){
      $('.subject-overlay').removeClass('show');
      $('.subject-overlay input').val('');
      e.preventDefault();
    });

    
    $('body').on('click' , '.apply-subject', function(e){
      $('.subject-overlay').removeClass('show');
      if(editOption != $('.subject-overlay input').val() && editOption != '') {

        $("select[name='subject'] option[value='" + editOption + "']").each(function() {
           
            $(this).after('<option selected value="' + editOption + '">' + $('.subject-overlay input').val() + '</option>');
             $(this).remove();
            $('select[name="subject"]').trigger('update.fs');
        
        });

      } else {
        if($('.subject-overlay input').val() != '') {
          var _id =  $('select[name="subject"] option').last().val()*1 + 1;
          $('select[name="subject"]').append('<option selected value="' + _id + '">' + $('.subject-overlay input').val() + '</option>');
          $('select[name="subject"]').trigger('update.fs');
        }
      }
      editOption = '';
      $('.subject-overlay input').val('');

      e.preventDefault();
    });

    
    $('body').on('click' , '.tools .group .smiles .smiles-modal img', function(e){
      
      var newValue = $('#textarea').val() + $(this).data('emotion');
      $('#textarea').val(newValue);
      e.preventDefault();
    });
    setTimeout(function(){
      fixScrollHeight();
    },1000)
  });
})( jQuery );

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('.remove-all').addClass('show');
      $('.selected-files').addClass('show');
      $('.selected-files-in .mCSB_container').append('<strong><a href="javascript:;"><span class="icon-close1"><span class="path1"></span><span class="path2"></span></span></a><img src="' + e.target.result + '" alt="Image"><span>' + input.files[0].name + '</span></a></strong>');
    };

    reader.readAsDataURL(input.files[0]);
  }
}