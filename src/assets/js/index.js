$(document).ready(function() {

    $('#home').click(function() {
        $('.home').addClass('animationScaleIn');
        $(this).addClass('active');
        $('.link').addClass('disabled');
        $('.about').addClass('animationScaleOut');
        $('.resume').addClass('animationScaleOut');
        $('.portfolio').addClass('animationScaleOut');
        $('.contact').addClass('animationScaleOut');


        $('.home').removeClass('animationFadeOutLeft');
        $('.home').removeClass('animationRotateOut');
        $('.home').removeClass('animationFadeOutDown');
        $('.home').removeClass('animationRotateOut180');

        $('.about').removeClass('animationFadeInRight');
        $('#about').removeClass('active');
        $('.resume').removeClass('animationRotateIn');
        // $('.resume').removeClass('show');
        $('#resume').removeClass('active');
        $('.portfolio').removeClass('animationFadeInUp');
        $('#portfolio').removeClass('active');
        $('.contact').removeClass('animationRotateIn180');
        $('#contact').removeClass('active');
        setTimeout(function() {
            $('.link').removeClass('disabled');
            $('.resume').removeClass('show');
            $('.portfolio').removeClass('show');
            $('.contact').removeClass('show');
            $('.about').removeClass('show');
        }, 700);

    });

    $('#about').click(function() {
        $('.about').addClass('animationFadeInRight');
        $(this).addClass('active');
        $('.link').addClass('disabled');
        $('.about').addClass('show');
        $('.home').addClass('animationFadeOutLeft');
        $('.resume').addClass('animationFadeOutLeft');
        $('.portfolio').addClass('animationFadeOutLeft');
        $('.contact').addClass('animationFadeOutLeft');


        $('.about').removeClass('animationScaleOut');
        $('.about').removeClass('animationRotateOut');
        $('.about').removeClass('animationFadeOutDown');
        $('.about').removeClass('animationRotateOut180');

        $('.home').removeClass('animationScaleIn');
        $('#home').removeClass('active');
        $('.resume').removeClass('animationRotateIn');
        $('#resume').removeClass('active');
        $('.portfolio').removeClass('animationFadeInUp');
        $('#portfolio').removeClass('active');
        $('.contact').removeClass('animationRotateIn180');
        $('#contact').removeClass('active');
        setTimeout(function() {
            $('.link').removeClass('disabled');
            $('.resume').removeClass('show');
            $('.portfolio').removeClass('show');
            $('.contact').removeClass('show');
        }, 700);
    });

    $('#resume').click(function() {
        $('.resume').addClass('animationRotateIn');
        $(this).addClass('active');
        $('.resume').addClass('show');
        $('.link').addClass('disabled');
        $('.home').addClass('animationRotateOut');
        $('.about').addClass('animationRotateOut');
        $('.portfolio').addClass('animationRotateOut');
        $('.contact').addClass('animationRotateOut');


        $('.resume').removeClass('animationScaleOut');
        $('.resume').removeClass('animationFadeOutLeft');
        $('.resume').removeClass('animationFadeOutDown');
        $('.resume').removeClass('animationRotateOut180');

        $('.home').removeClass('animationScaleIn');
        $('#home').removeClass('active');
        $('.about').removeClass('animationFadeInRight');
        $('#about').removeClass('active');
        $('.portfolio').removeClass('animationFadeInUp')
        $('#portfolio').removeClass('active')
        $('.contact').removeClass('animationRotateIn180');
        $('#contact').removeClass('active');
        setTimeout(function() {
            $('.link').removeClass('disabled');
            $('.portfolio').removeClass('show');
            $('.contact').removeClass('show');
            $('.about').removeClass('show');
        }, 700);

    });

    $('#portfolio').click(function() {
        $('.portfolio').addClass('animationFadeInUp');
        $(this).addClass('active');
        $('.portfolio').addClass('show');
        $('.link').addClass('disabled');
        $('.home').addClass('animationFadeOutDown');
        $('.about').addClass('animationFadeOutDown');
        $('.resume').addClass('animationFadeOutDown');
        $('.contact').addClass('animationFadeOutDown');

        $('.portfolio').removeClass('animationScaleOut');
        $('.portfolio').removeClass('animationFadeOutLeft');
        $('.portfolio').removeClass('animationRotateOut');
        $('.portfolio').removeClass('animationRotateOut180');

        $('.resume').removeClass('animationRotateIn');
        $('#resume').removeClass('active');
        $('.home').removeClass('animationScaleIn');
        $('#home').removeClass('active');
        $('.about').removeClass('animationFadeInRight');
        $('#about').removeClass('active');
        $('.contact').removeClass('animationRotateIn180');
        $('#contact').removeClass('active');
        setTimeout(function() {
            $('.link').removeClass('disabled');
            $('.resume').removeClass('show');
            $('.contact').removeClass('show');
            $('.about').removeClass('show');
        }, 700);
    });

    $('#contact').click(function() {
        $('.contact').addClass('animationRotateIn180');
        $(this).addClass('active');
        $('.link').addClass('disabled');
        $('.contact').addClass('show');
        $('.home').addClass('animationRotateOut180');
        $('.about').addClass('animationRotateOut180');
        $('.resume').addClass('animationRotateOut180');
        $('.portfolio').addClass('animationRotateOut180');

        $('.contact').removeClass('animationScaleOut');
        $('.contact').removeClass('animationFadeOutLeft');
        $('.contact').removeClass('animationRotateOut');
        $('.contact').removeClass('animationRotateOutDown');

        $('.home').removeClass('animationScaleIn');
        $('#home').removeClass('active');
        $('.about').removeClass('animationFadeInRight');
        $('#about').removeClass('active');
        $('.resume').removeClass('animationRotateIn');
        $('#resume').removeClass('active');
        $('.portfolio').removeClass('animationFadeInUp');
        $('#portfolio').removeClass('active');
        setTimeout(function() {
            $('.link').removeClass('disabled');
            $('.resume').removeClass('show');
            $('.portfolio').removeClass('show');
            $('.about').removeClass('show');
        }, 700);
    });


    // end for animation menu
    // 
    // 
    // Xử Lý chuổi chuyển động
    function clock() {
        var d = new Date();
        var h = d.getHours();
        var text = "";
        if (h >= 4 && h <= 11) {
            text = "Good Morning!"
        } else if (h > 11 && h <= 17) {
            text = "Good Afternoon!";
        } else {
            text = "Good Evening!";
        }
        return text;
    }
    // console.log(clock());
    // Begin typed.js
    var typed = new Typed('.home__info', {
        strings: [clock(), "My name is <b>PHUC</b>", "I'm a <b>front-end</b> developer"],
        typeSpeed: 70,
        backSpeed: 50,
        // backDelay: 700,
        loop: true,
        // cursorChar: '_',
        // shuffle: true,
        // smartBackspace: false,

    });
    // end typed.js
    // kết thúc chuỗi chuyển động

    // sự kiên xử lý portfolio

    $('#all').click(function() {
        $('.templates').addClass('showTemplates');
        $('.project').addClass('showProjects');

        $('.templates').removeClass('hiddenTemplates');
        $('.project').removeClass('hiddenProjects');

        $('#project').removeClass('disabled');
        $('#templates').removeClass('disabled');

        $('.all-hover').addClass('active');
        $('.templates-hover').removeClass('active');
        $('.project-hover').removeClass('active');

        $(this).addClass('disabled');
        $('#project').removeClass('advive');
        $('#templates').removeClass('active');

    })

    $('#templates').click(function() {
        $('.templates').addClass('showTemplates');
        $('.project').addClass('hiddenProjects');
        $(this).addClass('disabled');
        $('.templates').removeClass('hiddenTemplates');
        $('#all').removeClass('disabled');
        $('#project').removeClass('disabled');
        $('#templates').addClass('disabled');

        $('.templates-hover').addClass('active');
        $('.all-hover').removeClass('active');
        $('.project-hover').removeClass('active');

        $('#project').removeClass('advive');
        $('#all').removeClass('active');
    })

    $('#project').click(function() {
        $('.project').addClass('showProjects');
        $('.templates').addClass('hiddenTemplates');

        $('.project').removeClass('hiddenProjects');
        $('#templates').removeClass('disabled');
        $(this).addClass('disabled');
        $('#all').removeClass('disabled');

        $('.project-hover').addClass('active');
        $('.templates-hover').removeClass('active');
        $('.all-hover').removeClass('active');

        $('#all').removeClass('advive');
        $('#templates').removeClass('active');
    })

});