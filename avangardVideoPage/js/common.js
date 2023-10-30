function getScrollbarWidth() {
    var outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    outer.style.msOverflowStyle = 'scrollbar';
    document.body.appendChild(outer);
    var inner = document.createElement('div');
    outer.appendChild(inner);
    var scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    outer.parentNode.removeChild(outer);
    return scrollbarWidth;
}

function setScrollOffset() {
    if ($("body").hasClass("no-scroll")) {
        if ($(document).height() > $(window).height()) {
            $(".scroll-offset").css("padding-right", getScrollbarWidth() + "px");
        }
    } else {
        $(".scroll-offset").css("padding-right", '');
    }
}

function removeHash() {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

function modalShow(el, init) {
    $("body").addClass("no-scroll");
    el.find(".modal__form").show();
    el.find(".modal__result").hide();
    setScrollOffset();
    $('.modal').removeClass('is-open').hide();
    setTimeout(function () {
        el.show();
        el.addClass('is-open');
    }, 100);
    $('#layer_overlay').fadeIn("fast");
    var close = function () {
        el.removeClass('is-open');
        $('#layer_overlay').fadeOut("fast");
        setTimeout(function () {
            el.hide();
            $('body').removeClass('no-scroll');
            setScrollOffset();
            removeHash();
        }, 1);
    };
    $(document).keyup(function (e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
            close();
        }
    });
    el.find('.modal__close,[data-action=close]').on('click', function (e) {
        e.preventDefault();
        close();
    });

}

$(function ($) {
    if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
        $("body").addClass("apple");
    }

    if ('objectFit' in document.documentElement.style === false) {
        $("img[data-object-fit]").each(function () {
            var image = $(this);
            image.css("background", 'transparent url(' + image.attr('src') + ') no-repeat 50%/' + image.attr('data-object-fit'));
            image.attr("src", "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + image.width() + "' height='" + image.height() + "'%3E%3C/svg%3E");
        });
    }

    $("#inter-map svg [data-target]").on("click", function () {
        $("#inter-map .inter-map__legend .map-point").hide().filter($(this).attr('data-target')).show();
    });

    /*$('.attach-button').each(function () {
        var $control = $(this);
        $control.find('input[type=file]').on('change', function () {
            var $input = $(this);
            if (this.files && this.files[0]) {
                $control.find(".form-control__value").html(this.files[0].name);
            }
        });
    });*/
    $('.js-modal').on('click', function (e) {
        e.preventDefault();
        if($(this).data("val")){
            $($(this).attr('href')).find("input[name=val]").val($(this).data("val"));
        }
        modalShow($($(this).attr('href')), $(this));
    });

    $('.month-select__btn').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass("is-open")) {
            $(".month-select__picker").hide();
            $(this).removeClass("is-open");
        } else {
            $(".month-select__picker").show();
            $(this).addClass("is-open");
        }
    });

    function eventsUpdate(y, m) {
        var pmonth = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        $(".month-select__picker").hide();
        $('.month-select__btn').removeClass("is-open");
        $('.month-select__btn span').text(pmonth[m - 1] +
            (new Date().getFullYear() != y ? ' ' + y : ''));

        $.post("/bjax.php", {
            cmd: "getJsonEvents",
            y: y,
            m: m
        }, function (data) {
            if (data.result === "success") {

                $(".events-nav__day-slider .owl-carousel").trigger('destroy.owl.carousel');
                $(".events-list__grid").html(data.events).find(".events-list__item").hide();
                $(".events-nav__day-slider .owl-carousel").html(data.days).owlCarousel({
                    items: 10,
                    loop: 0,
                    nav: 1,
                    margin: 0,
                    dots: 0,
                    navText: [
                        '<svg height="12" width="6"><use xlink:href="template/images/sprite.svg#caret_l"></use></svg>',
                        '<svg height="12" width="6"><use xlink:href="template/images/sprite.svg#caret_r"></use></svg>'
                    ],
                    responsive: {
                        0: {
                            items: 3,
                        },

                        480: {
                            items: 5,
                        },
                        768: {
                            items: 6,
                        },
                        992: {
                            items: 8,
                        },
                        1200: {
                            items: 10,
                        }
                    },
                    onInitialized: function () {
                        $(".events-nav__day-slider .day-slide").off("click");
                        $(".events-list__grid .events-list__item").each(function () {
                            $(".events-nav__day-slider .day-slide[data-date='" + $(this).attr("data-date") + "']")
                                .addClass("is-enable").addClass($(this).attr("data-type"));
                        });
                        $(".events-nav__day-slider .day-slide.is-enable").on("click", function () {
                            $(".events-nav__day-slider .day-slide").removeClass("is-active");
                            $(this).addClass("is-active");
                            $(".events-list__grid .events-list__item").hide()
                                .filter("[data-date='" + $(this).attr("data-date") + "']").show();
                        });
                        var $now = $(".events-nav__day-slider .day-slide[data-date='" + parseInt(new Date().getDate()) + '.' + parseInt(new Date().getMonth() + 1) + '.' + parseInt(new Date().getFullYear()) + "']");
                        /*if($now.length){
                            $now.trigger("click");
                            setTimeout(function (){$(".events-nav__day-slider .owl-carousel").trigger('to.owl.carousel', [$now.parent(".owl-item").index(), 0]);}, 1);
                        } else {*/
                            $(".events-list__grid .events-list__item").show();
                        //}

                    }
                });
            }

        }, "json");


    }

    //eventsUpdate(new Date().getFullYear(), new Date().getMonth() + 1);
    $(".month-select__picker").each(function(){
		var $this = $(this);
		$this.datepicker({
			format: "mm-yyyy",
			startView: "months",
			minViewMode: "months",
			language: $this.data("lang")=="en"?"en":"ru",
			autoclose: true,
		}).on('changeDate', function (e) {
			var pdate = e.format();
			eventsUpdate(pdate.split('-')[1], parseInt(pdate.split('-')[0]), true);
		});
		
	});

    $('.js-m-menu-btn').on('click', function (e) {
        e.preventDefault();
        if ($(".m-header").hasClass("is-open")) {
            $(".m-header").removeClass("is-open");
            $('body').removeClass('no-scroll');
            setScrollOffset();
        } else {
            $("html, body").stop().animate({scrollTop: 0}, 100, 'swing', function () {
                $(".m-header").addClass("is-open");
                $('body').addClass("no-scroll");
                setScrollOffset();
            });
        }
    });


    $(".hero__slider .owl-carousel").owlCarousel({
        items: 1,
        loop: 1,
        nav: 1,
        dotsContainer: ".hero__slider-nav-dots",
        navContainer: ".hero__slider-nav-arrows",
        navText: [
            '<svg height="12" width="6"><use xlink:href="/template/images/sprite.svg#caret_l"></use></svg>',
            '<svg height="12" width="6"><use xlink:href="/template/images/sprite.svg#caret_r"></use></svg>'
        ],
    });


    $(".front-events__slider .owl-carousel").owlCarousel({
        items: 4,
        loop: 0,
        nav: 1,
        dots: 0,
        margin: 20,
        navContainer: ".front-events__slider-arrows",
        navText: [
            '<svg height="12" width="6"><use xlink:href="/template/images/sprite.svg#caret_l"></use></svg>',
            '<svg height="12" width="6"><use xlink:href="/template/images/sprite.svg#caret_r"></use></svg>'
        ],
        responsive: {
            0: {
                items: 2,
    			autoWidth:true,
            },

            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });
    $(".front-news__slider .owl-carousel").owlCarousel({
        items: 3,
        nav: 0,
        dots: 0,
        margin: 20,
        responsive: {
            0: {
                items: 2,
    			autoWidth:true,
            },

            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            }
        }
    });
    $(".front-gallery__slider .owl-carousel").owlCarousel({
        items: 3,
        nav: 0,
        dots: 1,
        margin: 20.001,
        scrollbarType: "scroll",
        responsive: {
            0: {
                items: 2,
    			autoWidth:true,
            },

            480: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });

    $("[data-fancybox=gallery]").fancybox({
        backFocus: false
    });

    if ($('.about-team__grid').langth) {
        var $teamGrid = $('.about-team__grid').isotope({
            itemSelector: '.about-team__item'
        });
        $('.about-team__nav-tab').on('click', function (e) {
            e.preventDefault();
            $('.about-team__nav-tab').removeClass("is-active");
            var val = $(this).addClass("is-active").attr('data-filter');
            $teamGrid.isotope({filter: val});
            return false;
        });
    }

    $(".giant-image-slider .owl-carousel").owlCarousel({
        items: 1,
        loop: 1,
        dots: 1,
        nav: 0,
        margin: 20,

    });
    $(".reviews__slider .owl-carousel").owlCarousel({
        items: 1,
        loop: 1,
        dots: 0,
        nav: 1,
        margin: 20,
        navText: [
            '<svg height="12" width="6"><use xlink:href="/template/images/sprite.svg#caret_l"></use></svg>',
            '<svg height="12" width="6"><use xlink:href="/template/images/sprite.svg#caret_r"></use></svg>'
        ],
    });

    $(".js-accordion").each(function () {
        var $accordion = $(this);
        $accordion.find(".js-accordion__header").on("click", function () {
            $section = $(this).parent(".js-accordion__section");
            if ($section.hasClass("is-open")) {
                $accordion.find(".js-accordion__section.is-open").removeClass("is-open");
            } else {
                $accordion.find(".js-accordion__section.is-open").removeClass("is-open");
                $section.addClass("is-open");
            }
        });
    });

    $(".js-dropdown").each(function () {
        var $el = $(this);
        $el.find(".js-dropdown__trigger").on("click", function () {
            if ($el.hasClass("is-open")) {
                $el.removeClass("is-open");
            } else {
                $el.addClass("is-open");
            }

        });
    });
    $(".js-tabs").each(function () {
        var $el = $(this);
        var $nav = $el.find(".js-tabs__nav");
        var $contents = $el.find(".js-tabs__content").hide();

        $nav.find(".js-tabs__tab").on("click", function (e) {
            e.preventDefault();
            $contents.hide().filter(this.hash).show();
            $nav.find(".js-tabs__tab").removeClass('is-active');
            $(this).addClass('is-active');
            return false;
        }).filter(':first').click();
    });

    $('.js-filter').each(function () {
        var $filter = $(this);
        var $grid = $filter.find('.js-filter__grid').isotope({
            itemSelector: '.js-filter__item'
        });
        $filter.find('.js-filter__tab').on('click', function (e) {
            e.preventDefault();
            $filter.find('.js-filter__tab').removeClass("is-active");
            var val = $(this).addClass("is-active").attr('data-filter');
            $grid.isotope({filter: val});
            return false;
        });
        setTimeout(function () {
            $filter.find('.js-filter__tab.is-active').click();
        }, 1);
    });
    $(".form-attach input[type='file']").change(function(e){
        var f=[];
        if(window.File && window.FileReader && window.FileList){
            for(var i=0;i<e.target.files.length;i++){
                f.push(e.target.files[i].name);
            }
        } else {
            f.push.append($(this).val());
        }
        $(this).parent(".form-attach").find("em").empty().append(f.join(', '));

    });

    $(".ajax-form_feedback").submit(function (event) {
        event.preventDefault();
        var form = $(".ajax-form_feedback")[0];

        var data = new FormData(form);
        data.append("action", "feedback");
        $(".ajax-form_feedback").prop("disabled", true);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/postmaster.php",
            data: data,
            processData: false,
            contentType: false,
            dataType: "json",
            cache: false,
            timeout: 600000,
            success: function (data) {
                if(data.result == "success") {
                    form.reset();
                    $(".feedback__result_success").show();
                    $(".ajax-form_feedback").hide().prop("disabled", false);
                } else {
                    alert(data.msg);
                }
            },
            error: function (e) {
                $(".ajax-form_feedback").prop("disabled", false);
                location.reload();
            }
        });

    });

       $(".ajax-form_feedback-par").submit(function (event) {
        event.preventDefault();
        var form = $(".ajax-form_feedback-par")[0];

        var data = new FormData(form);
        data.append("action", "feedback-par");
        $(".ajax-form_feedback-par").prop("disabled", true);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/postmaster.php",
            data: data,
            processData: false,
            contentType: false,
            dataType: "json",
            cache: false,
            timeout: 600000,
            success: function (data) {
                if(data.result == "success") {
                    form.reset();
                    $(".feedback__result_success").show();
                    $(".ajax-form_feedback-par").hide().prop("disabled", false);
                } else {
                    alert(data.msg);
                }
            },
            error: function (e) {
                $(".ajax-form_feedback-par").prop("disabled", false);
                location.reload();
            }
        });

    });
	
	
    $(".ajax-form_order").submit(function (event) {
        event.preventDefault();
        var form = $(".ajax-form_order")[0];

        var data = new FormData(form);
        data.append("action", "order");
        $(".ajax-form_order").prop("disabled", true);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/postmaster.php",
            data: data,
            processData: false,
            contentType: false,
            dataType: "json",
            cache: false,
            timeout: 600000,
            success: function (data) {
                if(data.result == "success") {
                    form.reset();
                    $(".feedback__result_success").show();
                    $(".ajax-form_order").hide().prop("disabled", false);
					setTimeout(function() {
						location.href=data.url;
					}, 3000);
                } else {
                    alert(data.msg);
                }
            },
            error: function (e) {
                $(".ajax-form_order").prop("disabled", false);
                location.reload();
            }
        });

    });	
	
	
	
    $("#vacancy-form_modal form").submit(function (event) {
        event.preventDefault();
        var form = $("#vacancy-form_modal form")[0];

        var data = new FormData(form);
        data.append("action", "vacancy");
        $("#vacancy-form_modal form").prop("disabled", true);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/postmaster.php",
            data: data,
            processData: false,
            contentType: false,
            dataType: "json",
            cache: false,
            timeout: 600000,
            success: function (data) {
                if(data.result == "success") {
                    form.reset();
                    $("#vacancy-form_modal .modal__result").show();
                    $("#vacancy-form_modal .modal__form").hide().prop("disabled", false);
                } else {
                    alert(data.msg);
                }
            },
            error: function (e) {
                $("#vacancy-form_modal form").prop("disabled", false);
                location.reload();
            }
        });

    });
    $("input[name=phone]").mask('+7 (999) 999-99-99');
    svg4everybody();
});
