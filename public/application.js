$(document).ready(function() {
  
  $(document).on('click','#hit_form',function() {
    $.ajax({
      type: 'POST',
      url: '/game/player/hit'
    }).done(function(msg) {
      $('#game').replaceWith(msg);
    });
    return false
  });
});


$(document).ready(function() {
  
  $(document).on('click','#stay_form',function() {
    $.ajax({
      type: 'POST',
      url: '/game/player/stay'
    }).done(function(msg) {
      $('#game').replaceWith(msg);
    });
    return false
  });
});

$(document).ready(function() {
  
  $(document).on('click','#dealer_hit_form',function() {
    $.ajax({
      type: 'POST',
      url: '/game/dealer/hit'
    }).done(function(msg) {
      $('#game').replaceWith(msg);
    });
    return false
  });
});

