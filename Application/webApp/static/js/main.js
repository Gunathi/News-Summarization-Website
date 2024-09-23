!function (e) {
    "use strict";
    if (e(window).on("load", (function () {
        e(".preloader").fadeOut()
    })), e(window).on("resize", (function () {
        e(".slick-slider").slick("refresh")
    })), e(".preloader").length > 0 && e(".preloaderCls").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault(), e(".preloader").css("display", "none")
        }))
    })), e.fn.thmobilemenu = function (t) {
        var s = e.extend({
            menuToggleBtn: ".th-menu-toggle",
            bodyToggleClass: "th-body-visible",
            subMenuClass: "th-submenu",
            subMenuParent: "th-item-has-children",
            subMenuParentToggle: "th-active",
            meanExpandClass: "th-mean-expand",
            appendElement: '<span class="th-mean-expand"></span>',
            subMenuToggleClass: "th-open",
            toggleSpeed: 400
        }, t);
        return this.each((function () {
            var t = e(this);

            function a() {
                t.toggleClass(s.bodyToggleClass), t.find("." + s.subMenuClass).each((function () {
                    e(this).hasClass(s.subMenuToggleClass) && (e(this).removeClass(s.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(s.subMenuParentToggle))
                }))
            }

            t.find("li").each((function () {
                var t = e(this).find("ul, div.mega-menu");
                t.addClass(s.subMenuClass), t.css("display", "none"), t.parent().addClass(s.subMenuParent), t.prev("a").append(s.appendElement), t.next("a").append(s.appendElement)
            }));
            var i = "." + s.meanExpandClass;
            e(i).each((function () {
                e(this).on("click", (function (t) {
                    var a, i;
                    t.preventDefault(), a = e(this).parent(), (i = a.next("ul, div.mega-menu")).length > 0 && (a.parent().toggleClass(s.subMenuParentToggle), i.slideToggle(s.toggleSpeed), i.toggleClass(s.subMenuToggleClass))
                }))
            })), e(s.menuToggleBtn).each((function () {
                e(this).on("click", (function () {
                    a()
                }))
            })), t.on("click", (function (e) {
                e.stopPropagation(), a()
            })), t.find("div").on("click", (function (e) {
                e.stopPropagation()
            }))
        }))
    }, e(".th-menu-wrapper").thmobilemenu(), e(window).scroll((function () {
        e(this).scrollTop() > 500 ? e(".sticky-wrapper").addClass("sticky") : e(".sticky-wrapper").removeClass("sticky")
    })), e(".scroll-top").length > 0) {
        var t = document.querySelector(".scroll-top"), s = document.querySelector(".scroll-top path"),
            a = s.getTotalLength();
        s.style.transition = s.style.WebkitTransition = "none", s.style.strokeDasharray = a + " " + a, s.style.strokeDashoffset = a, s.getBoundingClientRect(), s.style.transition = s.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var i = function () {
            var t = e(window).scrollTop(), i = e(document).height() - e(window).height(), n = a - t * a / i;
            s.style.strokeDashoffset = n
        };
        i(), e(window).scroll(i);
        jQuery(window).on("scroll", (function () {
            jQuery(this).scrollTop() > 50 ? jQuery(t).addClass("show") : jQuery(t).removeClass("show")
        })), jQuery(t).on("click", (function (e) {
            return e.preventDefault(), jQuery("html, body").animate({scrollTop: 0}, 750), !1
        }))
    }
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function () {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
    })), e("[data-theme-color]").length > 0 && e("[data-theme-color]").each((function () {
        var t = e(this).attr("data-theme-color");
        e(this).get(0).style.setProperty("--theme-color", t), e(this).removeAttr("data-theme-color")
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).addClass("bg-mask"), e(this).removeAttr("data-mask-src")
    })), e(".center-first").on("init reInit afterChange", (function (e, t, s, a) {
    })), e(".th-carousel").each((function () {
        var t = e(this);

        function s(e) {
            return t.data(e)
        }

        var a = '<button type="button" class="slick-prev"><i class="' + s("prev-arrow") + '"></i></button>',
            i = '<button type="button" class="slick-next"><i class="' + s("next-arrow") + '"></i></button>';
        e("[data-slick-next]").each((function () {
            e(this).on("click", (function (t) {
                t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext")
            }))
        })), e("[data-slick-prev]").each((function () {
            e(this).on("click", (function (t) {
                t.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == s("arrows") && (t.closest(".arrow-wrap").length || t.closest(".container").parent().addClass("arrow-wrap")), t.slick({
            dots: !!s("dots"),
            fade: !!s("fade"),
            arrows: !!s("arrows"),
            speed: s("speed") ? s("speed") : 1e3,
            asNavFor: !!s("asnavfor") && s("asnavfor"),
            autoplay: 0 != s("autoplay"),
            infinite: 0 != s("infinite"),
            slidesToShow: s("slide-show") ? s("slide-show") : 1,
            adaptiveHeight: !!s("adaptive-height"),
            centerMode: !!s("center-mode"),
            autoplaySpeed: s("autoplay-speed") ? s("autoplay-speed") : 8e3,
            centerPadding: s("center-padding") ? s("center-padding") : "0",
            focusOnSelect: 0 != s("focuson-select"),
            pauseOnFocus: !!s("pauseon-focus"),
            pauseOnHover: !!s("pauseon-hover"),
            variableWidth: !!s("variable-width"),
            vertical: !!s("vertical"),
            verticalSwiping: !!s("vertical"),
            swipeToSlide: !!s("swipetoslide"),
            prevArrow: s("prev-arrow") ? a : '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: s("next-arrow") ? i : '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            rtl: "rtl" == e("html").attr("dir"),
            responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: !!s("xl-arrows"),
                    dots: !!s("xl-dots"),
                    slidesToShow: s("xl-slide-show") ? s("xl-slide-show") : s("slide-show"),
                    centerMode: !!s("xl-center-mode"),
                    centerPadding: "0"
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!s("ml-arrows"),
                    dots: !!s("ml-dots"),
                    slidesToShow: s("ml-slide-show") ? s("ml-slide-show") : s("slide-show"),
                    centerMode: !!s("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!s("lg-arrows"),
                    dots: !!s("lg-dots"),
                    slidesToShow: s("lg-slide-show") ? s("lg-slide-show") : s("slide-show"),
                    centerMode: !!s("lg-center-mode") && s("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!s("md-arrows"),
                    dots: !!s("md-dots"),
                    slidesToShow: s("md-slide-show") ? s("md-slide-show") : 1,
                    centerMode: !!s("md-center-mode") && s("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !!s("sm-arrows"),
                    dots: !!s("sm-dots"),
                    slidesToShow: s("sm-slide-show") ? s("sm-slide-show") : 1,
                    centerMode: !!s("sm-center-mode") && s("sm-center-mode"),
                    centerPadding: 0,
                    variableWidth: !!s("sm-variable-width")
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!s("xs-arrows"),
                    dots: !!s("xs-dots"),
                    slidesToShow: s("xs-slide-show") ? s("xs-slide-show") : 1,
                    centerMode: !!s("xs-center-mode") && s("xs-center-mode"),
                    centerPadding: 0,
                    variableWidth: !!s("xs-variable-width")
                }
            }]
        })
    }));
    e(".slick-marquee").slick({
        speed: 5e3,
        autoplay: !0,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: !0,
        infinite: !0,
        arrows: !1,
        buttons: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        swipeToSlide: !0
    });
    e("[data-ani-duration]").each((function () {
        var t = e(this).data("ani-duration");
        e(this).css("animation-duration", t)
    })), e("[data-ani-delay]").each((function () {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-ani]").each((function () {
        var t = e(this).data("ani");
        e(this).addClass(t), e(".slick-current [data-ani]").addClass("th-animated")
    })), e(".th-carousel").on("afterChange", (function (t, s, a, i) {
        e(s.$slides).find("[data-ani]").removeClass("th-animated"), e(s.$slides[a]).find("[data-ani]").addClass("th-animated")
    }));
    var n, o, r, l, c = ".ajax-contact", d = '[name="email"]', u = e(".form-messages");

    function p() {
        var t = e(c).serialize();
        (function () {
            var t, s = !0;

            function a(a) {
                a = a.split(",");
                for (var i = 0; i < a.length; i++) t = c + " " + a[i], e(t).val() ? (e(t).removeClass("is-invalid"), s = !0) : (e(t).addClass("is-invalid"), s = !1)
            }

            a('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), e(d).val() && e(d).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(d).removeClass("is-invalid"), s = !0) : (e(d).addClass("is-invalid"), s = !1);
            return s
        })() && jQuery.ajax({url: e(c).attr("action"), data: t, type: "POST"}).done((function (t) {
            u.removeClass("error"), u.addClass("success"), u.text(t), e(c + ' input:not([type="submit"]),' + c + " textarea").val("")
        })).fail((function (e) {
            u.removeClass("success"), u.addClass("error"), "" !== e.responseText ? u.html(e.responseText) : u.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    e(c).on("submit", (function (e) {
        e.preventDefault(), p()
    })), n = ".popup-search-box", o = ".searchClose", r = "show", e(".searchBoxToggler").on("click", (function (t) {
        t.preventDefault(), e(n).addClass(r)
    })), e(n).on("click", (function (t) {
        t.stopPropagation(), e(n).removeClass(r)
    })), e(n).find("form").on("click", (function (t) {
        t.stopPropagation(), e(n).addClass(r)
    })), e(o).on("click", (function (t) {
        t.preventDefault(), t.stopPropagation(), e(n).removeClass(r)
    })), l = ".popup-subscribe-area", e(".popupClose").on("click", (function (t) {
        e(l).addClass("hide")
    })), e("#destroyPopup").on("click", (function () {
        e(".popup-subscribe-area").addClass("hide"), localStorage.setItem("popupDestroyed", "true")
    }));

    function h(t, s, a, i) {
        e(s).on("click", (function (s) {
            s.preventDefault(), e(t).addClass(i)
        })), e(t).on("click", (function (s) {
            s.stopPropagation(), e(t).removeClass(i)
        })), e(t + " > div").on("click", (function (s) {
            s.stopPropagation(), e(t).addClass(i)
        })), e(a).on("click", (function (s) {
            s.preventDefault(), s.stopPropagation(), e(t).removeClass(i)
        }))
    }

    "true" === localStorage.getItem("popupDestroyed") && e(".popup-subscribe-area").hide(), h(".sidemenu-1", ".sideMenuToggler", ".sideMenuCls", "show"), h(".cart-side-menu", ".cartToggler", ".sideMenuCls", "show"), e(".popup-image").magnificPopup({
        type: "image",
        mainClass: "mfp-zoom-in",
        removalDelay: 260,
        gallery: {enabled: !0}
    }), e(".popup-video").magnificPopup({type: "iframe"}), e(".popup-content").magnificPopup({
        type: "inline",
        midClick: !0
    }), e(".popup-content").on("click", (function () {
        e(".slick-slider").slick("refresh")
    }));
    const f = localStorage.getItem("themePreference");
    f && ("dark" === f ? (e("html").addClass("dark-theme").attr("data-theme", "dark"), e(".theme-switcher").addClass("active")) : (e("html").addClass("light-theme").attr("data-theme", "light"), e(".theme-switcher").removeClass("active"))), e(".theme-toggler, .theme-switcher").on("click", (function (t) {
        t.preventDefault(), function () {
            e("html").toggleClass("dark-theme").removeClass("light-theme");
            const t = e("html").hasClass("dark-theme") ? "dark" : "light";
            e("html").attr("data-theme", t), e(".theme-switcher").toggleClass("active"), localStorage.setItem("themePreference", t)
        }()
    })), e(".print_btn").on("click", (function (e) {
        window.print()
    })), e.fn.indicator = function () {
        e(this).each((function () {
            var t = e(this), s = t.find("a"), a = t.find("button");
            t.append('<span class="indicator"></span>');
            var i, n = t.find(".indicator");

            function o() {
                var s = t.find(".active"), a = s.css("height"), i = s.css("width"), o = s.position().top + "px",
                    r = s.position().left + "px";
                e(window).on("resize", (function () {
                    o = s.position().top + "px", r = s.position().left + "px"
                })), n.get(0).style.setProperty("--height-set", a), n.get(0).style.setProperty("--width-set", i), n.get(0).style.setProperty("--pos-y", o), n.get(0).style.setProperty("--pos-x", r)
            }

            s.length ? i = s : a.length && (i = a), i.on("click", (function (t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active"), o()
            })), o(), e(window).on("resize", (function () {
                o()
            }))
        }))
    }, e(".indicator-active").length && e(".indicator-active").indicator(), e.fn.thTab = function (t) {
        var s = e.extend({sliderTab: !1, tabButton: "button"}, t);
        e(this).each((function () {
            var t = e(this), a = t.find(s.tabButton);
            t.append('<span class="indicator"></span>');
            var i = t.find(".indicator");
            if (a.on("click", (function (t) {
                t.preventDefault();
                var a = e(this);
                a.addClass("active").siblings().removeClass("active"), s.sliderTab ? e(n).slick("slickGoTo", a.data("slide-go-to")) : r()
            })), s.sliderTab) {
                var n = t.data("asnavfor"), o = 0;
                a.each((function () {
                    var a = e(this);
                    a.attr("data-slide-go-to", o), o++, a.hasClass("active") && e(n).slick("slickGoTo", a.data("slide-go-to")), e(n).on("beforeChange", (function (e, a, i, n) {
                        t.find(s.tabButton + '[data-slide-go-to="' + n + '"]').addClass("active").siblings().removeClass("active"), r()
                    }))
                }))
            }

            function r() {
                var n = t.find(s.tabButton + ".active"), o = n.css("height"), r = n.css("width"),
                    l = n.position().top + "px", c = n.position().left + "px";
                i.get(0).style.setProperty("--height-set", o), i.get(0).style.setProperty("--width-set", r), i.get(0).style.setProperty("--pos-y", l), i.get(0).style.setProperty("--pos-x", c), e(a).first().position().left == n.position().left ? i.addClass("start").removeClass("center").removeClass("end") : e(a).last().position().left == n.position().left ? i.addClass("end").removeClass("center").removeClass("start") : i.addClass("center").removeClass("start").removeClass("end")
            }

            r()
        }))
    }, e(".hero-tab").length && e(".hero-tab").thTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".blog-tab").length && e(".blog-tab").thTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".filter-active").imagesLoaded((function () {
        if (e(".filter-active").length > 0) {
            var t = e(".filter-active").isotope({itemSelector: ".filter-item", filter: "*", masonry: {}});
            e(".filter-menu-active").on("click", "button", (function () {
                var s = e(this).attr("data-filter");
                t.isotope({filter: s})
            })), e(".filter-menu-active").on("click", "button", (function (t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
            }))
        }
    })), e(".filter-active-cat1").imagesLoaded((function () {
        if (e(".filter-active-cat1").length > 0) {
            var t = e(".filter-active-cat1").isotope({
                itemSelector: ".filter-item",
                filter: ".active-filter",
                masonry: {columnWidth: 1}
            });
            e(".filter-menu-active1").on("click", "button", (function () {
                var s = e(this).attr("data-filter");
                t.isotope({filter: s})
            })), e(".filter-menu-active1").on("click", "button", (function (t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
            }))
        }
    })), e(".counter-number").counterUp({delay: 5, time: 600}), e(".price_slider").slider({
        range: !0,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function (t, s) {
            e(".from").text("$" + s.values[0]), e(".to").text("$" + s.values[1])
        }
    }), e(".from").text("$" + e(".price_slider").slider("values", 0)), e(".to").text("$" + e(".price_slider").slider("values", 1)), e("#ship-to-different-address-checkbox").on("change", (function () {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function (t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function (t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function (t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function () {
        e(this).on("change", (function () {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e(".quantity-plus").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault();
            var s = e(this).siblings(".qty-input"), a = parseInt(s.val(), 10);
            isNaN(a) || s.val(a + 1)
        }))
    })), e(".quantity-minus").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault();
            var s = e(this).siblings(".qty-input"), a = parseInt(s.val(), 10);
            !isNaN(a) && a > 1 && s.val(a - 1)
        }))
    })), window.addEventListener("contextmenu", (function (e) {
        e.preventDefault()
    }), !1), document.onkeydown = function (e) {
        return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))))
    }
}(jQuery);

function toggleClicked() {
    var icon = document.getElementById('thumbs-up-icon');
    var isClicked = icon.getAttribute('data-clicked');

    if (isClicked === 'true') {
        icon.style.color = '#54595F'; // Change back to default color
        icon.setAttribute('data-clicked', 'false'); // Mark as not clicked
    } else {
        icon.style.color = 'red'; // Change color on click
        icon.setAttribute('data-clicked', 'true'); // Mark as clicked
    }
}