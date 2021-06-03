function accordions() {
    var $accBtn = $('.js-acc-btn');
    var $accContent = $('.js-acc-content');
    var activeClass = 'accordion-item--active';

    $accBtn.on('click', function() {
        $(this).parent().toggleClass(activeClass);
        $(this).next().stop().slideToggle();
        if ($(this).parent().hasClass(activeClass)) {
            $(this).attr('aria-expanded', true);
        } else {
            $(this).attr('aria-expanded', false);
        }
        // $accBtn.parent().removeClass(activeClass);
        // $(this).parent().addClass(activeClass);
        // $accContent.slideUp();
        // $(this).next().slideDown();
    });
}

function tabs() {
    var $tabBtn = $('.js-tab-btn');
    var $tabContent = $('.js-tab-content');
    var btnActive = 'tab-btn-active';
    var contentActive = 'tab-content-active';

    $tabBtn.each(function(i) {
        $(this).attr('data-index', i);
    });
    $tabContent.each(function(i) {
        $(this).attr('data-index', i);
    });

    $tabBtn.on('click', function() {
        // var index = $(this).index();
        // $tabBtn.removeClass(btnActive);
        // $(this).addClass(btnActive);
        // $tabContent.removeClass(contentActive);
        // $tabContent.eq(index).addClass(contentActive);
        var index = $(this).data('index');
        $tabBtn.removeClass(btnActive);
        $(this).addClass(btnActive);
        $tabContent.removeClass(contentActive);
        $('.js-tab-content[data-index="'+ index + '"]').addClass(contentActive);
    });

    $(window).on('load', function() {
        $tabBtn.first().click();
    });
}

function dropdown() {
    var $dropBtn = $('.js-drop-btn');
    var $dropItem = $('.js-drop-item');
    var $dropList = $('.js-drop-list');

    $dropBtn.on('click', function() {
        $(this).next().stop().slideToggle();
    });
    $dropItem.on('click', function() {
        var textItem = $(this).text();
        $(this).parent().stop().slideUp();
        $(this).closest('.js-drop').find($dropBtn).text(textItem);
    });
}


dropdown();
tabs();
accordions();