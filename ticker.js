$(document).ready(function() {
      function ticker() {
          $('ul.ticker').animate({marginLeft: '-200px'}, 1000, 'linear', function() {
              $(this).css({marginLeft: 0}).find('li:last').after($(this).find('li:first'));
              ticker();
          });
      }
      ticker();
  });
