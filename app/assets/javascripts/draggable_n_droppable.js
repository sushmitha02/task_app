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
      var taskId = $(ui.draggable[0]).data('task-id')
      var bucketName = $(this).attr('id');

      $.ajax({
        url: '/tasks/' + taskId,
        method: 'put',
        dataType: 'script',
        data: {task: {status: bucketName}}
      })
      

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