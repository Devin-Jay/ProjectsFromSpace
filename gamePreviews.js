$(document).ready(function() {
    $('#game0').hover(function() {
        $('.middle').css('background', 'linear-gradient(to bottom, #0A2647, #4D6179)');
        $('.game').removeClass('hover');
        $('#game0').addClass('hover');
        $('.preview').css('display', 'none');
        $('#preview0').css('display', 'grid');
    });

    $('#game1').hover(function() {
        $('.middle').css('background', 'linear-gradient(to bottom, #0A2647, lightblue)');
        $('.game').removeClass('hover');
        $('#game1').addClass('hover');
        $('.preview').css('display', 'none');
        $('#preview1').css('display', 'grid');
    });

    $('#game2').hover(function() {
        $('.game').removeClass('hover');
        $('#game2').addClass('hover');
        $('.preview').css('display', 'none');
        $('#preview2').css('display', 'grid');
    });
  });