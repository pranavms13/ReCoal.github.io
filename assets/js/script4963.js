 ! function(e) {
    "use strict";
    var a = e(window),
        t = (e(document), e("body")),
        i = e(".navbar");

    function s() {
        return a.width()
    }
    "ontouchstart" in document.documentElement || t.addClass("no-touch");
    var l = s();
    a.on("resize", function() {
        l = s()
    });
    var n = e(".is-sticky");
    if (n.length > 0) {
        var o = e("#mainnav").offset();
        a.scroll(function() {
            var e = a.scrollTop();
            a.width() > 991 && e > o.top ? n.hasClass("has-fixed") || n.addClass("has-fixed") : n.hasClass("has-fixed") && n.removeClass("has-fixed")
            a.width() > 991 && e > o.top ?
                i.hasClass("theme-light") || i.addClass("theme-light") :
                i.hasClass("theme-light") && i.removeClass("theme-light")
            a.width() > 991 && e > o.top ?
                i.hasClass("transparent") || i.addClass("transparent") :
                i.hasClass("transparent") && i.removeClass("transparent")
        })
    }
    e('a.menu-link[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var a = e(this.hash),
                t = !!this.hash.slice(1) && e("[name=" + this.hash.slice(1) + "]"),
                s = l >= 992 ? i.height() - 1 : 0;
            if ((a = a.length ? a : t).length) return e("html, body").animate({
                scrollTop: a.offset().top - s
            }, 1e3, "easeInOutExpo"), !1
        }
    });
    var r = window.location.href,
        d = r.split("#"),
        c = e(".nav li a");
    c.length > 0 && c.each(function() {
        r === this.href && "" !== d[1] && e(this).closest("li").addClass("active").parent().closest("li").addClass("active")
    });
    var m = e(".dropdown");
    m.length > 0 && (m.on("mouseover", function() {
        a.width() > 991 && (e(".dropdown-menu", this).not(".in .dropdown-menu").stop().fadeIn("400"), e(this).addClass("open"))
    }), m.on("mouseleave", function() {
        a.width() > 991 && (e(".dropdown-menu", this).not(".in .dropdown-menu").stop().fadeOut("400"), e(this).removeClass("open"))
    }), m.on("click", function() {
        if (a.width() < 991) return e(this).children(".dropdown-menu").fadeToggle(400), e(this).toggleClass("open"), !1
    })), a.on("resize", function() {
        e(".navbar-collapse").removeClass("in"), m.children(".dropdown-menu").fadeOut("400")
    });
    var h = e(".navbar-toggler"),
        u = e(".is-transparent");
    h.length > 0 && h.on("click", function() {
        e(".remove-animation").removeClass("animated"), u.hasClass("active") ? u.removeClass("active") : u.addClass("active")
    }), e(".menu-link").on("click", function() {
        e(".navbar-collapse").collapse("hide"), u.removeClass("active")
    });
    var p = e(".timeline-carousel");
    p.length > 0 && p.addClass("owl-carousel").owlCarousel({
        navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
        items: 6,
        nav: !0,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2,
                center: !1
            },
            599: {
                items: 3
            },
            1024: {
                items: 5
            },
            1170: {
                items: 6
            }
        }
    });
    var g = e(".token-countdown");
    g.length > 0 && g.each(function() {
        var a = e(this),
            t = a.attr("data-date");
        a.countdown(t).on("update.countdown", function(a) {
            e(this).html(a.strftime('<div class="col"><span class="countdown-time">%D</span><span class="countdown-text">Days</span></div><div class="col"><span class="countdown-time">%H</span><span class="countdown-text">Hours</span></div><div class="col"><span class="countdown-time">%M</span><span class="countdown-text">Minutes</span></div><div class="col"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">Seconds</span></div>'))
        })
    });
    var f = e(".content-popup");
    f.length > 0 && f.magnificPopup({
        type: "inline",
        preloader: !0,
        removalDelay: 400,
        mainClass: "mfp-fade bg-team-exp"
    });
    var v = e(".video-play");
    v.length > 0 && v.magnificPopup({
        type: "iframe",
        removalDelay: 160,
        preloader: !0,
        fixedContentPos: !1,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
            }
        }
    });
    var b = e(".imagebg");
    b.length > 0 && b.each(function() {
        var a = e(this),
            t = a.parent(),
            i = a.data("overlay"),
            s = a.children("img").attr("src"),
            l = void 0 !== i && "" !== i && i.split("-");
        void 0 !== s && "" !== s && (t.hasClass("has-bg-image") || t.addClass("has-bg-image"), "" !== l && "dark" === l[0] && (t.hasClass("light") || t.addClass("light")), a.css("background-image", 'url("' + s + '")').addClass("bg-image-loaded"))
    });
    var w = e('[class*="mask-ov"]');
    w.length > 0 && w.each(function() {
        var a = e(this).parent();
        a.hasClass("has-maskbg") || a.addClass("has-maskbg")
    });
    var C = e("#contact-form"),
        y = e("#subscribe-form");
    if (C.length > 0 || y.length > 0) {
        if (!e().validate || !e().ajaxSubmit) return console.log("contactForm: jQuery Form or Form Validate not Defined."), !0;
        if (C.length > 0) {
            var k = C.find("select.required"),
                x = C.find(".form-results");
            C.validate({
                invalidHandler: function() {
                    x.slideUp(400)
                },
                submitHandler: function(a) {
                    x.slideUp(400), e(a).ajaxSubmit({
                        target: x,
                        dataType: "json",
                        success: function(t) {
                            var i = "error" === t.result ? "alert-danger" : "alert-success";
                            x.removeClass("alert-danger alert-success").addClass("alert " + i).html(t.message).slideDown(400), "error" !== t.result && e(a).clearForm().find(".input-field").removeClass("input-focused")
                        }
                    })
                }
            }), k.on("change", function() {
                e(this).valid()
            })
        }
        if (y.length > 0) {
            var z = y.find(".subscribe-results");
            y.validate({
                invalidHandler: function() {
                    z.slideUp(400)
                },
                submitHandler: function(a) {
                    z.slideUp(400), e(a).ajaxSubmit({
                        target: z,
                        dataType: "json",
                        success: function(t) {
                            var i = "error" === t.result ? "alert-danger" : "alert-success";
                            z.removeClass("alert-danger alert-success").addClass("alert " + i).html(t.message).slideDown(400), "error" !== t.result && e(a).clearForm()
                        }
                    })
                }
            })
        }
    }
    var j = e(".input-line");
    j.length > 0 && j.each(function() {
        var a = e(this);
        e(this).val().length > 0 && a.parent().addClass("input-focused"), a.on("focus", function() {
            a.parent().addClass("input-focused")
        }), a.on("blur", function() {
            a.parent().removeClass("input-focused"), e(this).val().length > 0 && a.parent().addClass("input-focused")
        })
    });
    var D = e(".animated");
    e().waypoint && D.length > 0 && a.on("load", function() {
        D.each(function() {
            var a = e(this),
                t = a.data("animate"),
                i = a.data("duration"),
                s = a.data("delay");
            a.waypoint(function() {
                a.addClass("animated " + t).css("visibility", "visible"), i && a.css("animation-duration", i + "s"), s && a.css("animation-delay", s + "s")
            }, {
                offset: "93%"
            })
        })
    });
    var P = e("#preloader"),
        A = e("#loader");
    P.length > 0 && a.on("load", function() {
        A.fadeOut(300), t.addClass("loaded"), P.delay(700).fadeOut(300)
    }), e("#particles-js").length > 0 && particlesJS("particles-js", {
        particles: {
            number: {
                value: 70,
                density: {
                    enable: !0,
                    value_area: 700
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                opacity: .2,
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 40,
                    opacity_min: .12,
                    sync: !1
                }
            },
            size: {
                value: 6,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .08,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#2b56f5",
                opacity: .3,
                width: 1.3
            },
            move: {
                enable: !0,
                speed: 6,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 75,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    }), t.append(''), e("").on("click", function() {
        e(".demo-theme-content").toggleClass("active")
    }), e(".demo-themes,.demo-close").on("click", function() {
        e(".demo-theme-content").toggleClass("active"), e("html").toggleClass("demo-on")
    }), e(".demo-toggle").on("click", function() {
        e(".demo-content").slideToggle("slow")
    });
    var _ = e(".color-trigger");
    _.length > 0 && _.on("click", function() {
        var a = e(this).attr("title");
        return e("#layoutstyle").attr("href", "assets/css/" + a + ".css"), !1
    })
}(jQuery);