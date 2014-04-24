$(document).ready(function() {
  $(document).on('click','form#hit_form input',function() {
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
  
  $(document).on('click','form#stay_form input',function() {
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
  
  $(document).on('click','form#dealer_hit_form input',function() {
    $.ajax({
      type: 'POST',
      url: '/game/dealer/hit'
    }).done(function(msg) {
      $('#game').replaceWith(msg);
    });
    return false
  });
});

