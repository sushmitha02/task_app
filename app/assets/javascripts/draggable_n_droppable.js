$(document).ready(function() {

  initateDragDrop();  

});


function initateDragDrop() {
  $(".draggable").draggable({});

  $(".droppable").droppable({
    accept: ".card",

    drop: function( event, ui ) {
      // get the id of the task and send ajax request to update the status
      // with the bucket status
      
      var bucketName = $(this).attr('id');

      var title = $(ui.draggable[0]).find('.card-title').html()
      console.log(title + ' task was moved to '+ bucketName)
      $(this).addClass( "ui-state-highlight" )
    },

    over: function( event, ui ) {
      $('.droppable.ui-state-highlight').removeClass('ui-state-highlight')
      $(this).addClass('ui-state-highlight')

    }
  });

}