$(function() {
  var $btn = $('#btn');
  $btn.on('click', function() {
    $(window).trigger('customevent');
  });

  $(window).on('customevent', function() {
    $('#log > dd').html(new Date().getTime());
  });
});
