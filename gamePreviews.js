$(document).ready(function() {
    $('#preview0').css('display', 'grid');
    $('#game0').hover(function() {
        //$('.middle').css('background', 'linear-gradient(to bottom, #0A2647, #4D6179)');
        $('.game').removeClass('hover');
        $('#game0').addClass('hover');
        $('.gamePreview').css('display', 'none');
        $('.preview').css('display', 'none');
        $('#preview0').css('display', 'grid');
    });

    $('#game1').hover(function() {
        $('.game').removeClass('hover');
        $('#game1').addClass('hover');
        $('.gamePreview').css('display', 'none');
        $('.preview').css('display', 'none');
        $('#preview1').css('display', 'grid');
    });

    $('#game2').hover(function() {
        $('.game').removeClass('hover');
        $('#game2').addClass('hover');
        $('.gamePreview').css('display', 'none');
        $('.preview').css('display', 'none');
        $('#preview2').css('display', 'grid');
    });

    $('#game3').hover(function() {
        $('.game').removeClass('hover');
        $('#game3').addClass('hover');
        $('.gamePreview').css('display', 'none');
        $('.preview').css('display', 'none');
        $('#preview3').css('display', 'grid');
    });

    $('#game4').hover(function() {
        $('.game').removeClass('hover');
        $('#game4').addClass('hover');
        $('.gamePreview').css('display', 'none');
        $('.preview').css('display', 'none');
        $('#preview4').css('display', 'grid');
    });
  });