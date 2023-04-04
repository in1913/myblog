$(function(){
    const nav_menu = document.getElementsByClassName("nav-menu")[0];
    $(".navbar-toggler").click(function(){
        if(nav_menu.style.right === "-200px"){
            $(".nav-menu").animate({
                right: "0"
            }, 300)
        }else{
            $(".nav-menu").animate({
                right: "-200px"
            }, 300)
        }
    });

    // 네비게이터 클릭하면 이동
    $(".nav-link").click(function(e){
        e.preventDefault();
        x = $(this).attr("href");
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    })
    $(".about-contact-link").click(function(e){
        e.preventDefault();
        x = $(this).attr("href");
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    })
    $(".menu-link").click(function(e){
        e.preventDefault();
        x = $(this).attr("href");
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
        $(".nav-menu").animate({
            right: "-200px"
        }, 300)
    })

    // 네비게이터 호버하면 블로그 브랜드 변경
    $(".nav-link:eq(1)").mouseenter(function(e){
        e.preventDefault();
        $("#file").html("~/About");
    })
    $(".nav-link:eq(2)").mouseenter(function(e){
        e.preventDefault();
        $("#file").html("~/Skills");
    })
    $(".nav-link:eq(3)").mouseenter(function(e){
        e.preventDefault();
        $("#file").html("~/Portfolio");
    })
    $(".nav-link:eq(4)").mouseenter(function(e){
        e.preventDefault();
        $("#file").html("~/Contact");
    })
    $(".menu-link:eq(1)").mouseenter(function(e){
        e.preventDefault();
        $("#file").html("~/About");
    })
    $(".menu-link:eq(2)").mouseenter(function(e){
        e.preventDefault();
        $("#file").html("~/Skills");
    })
    $(".menu-link:eq(3)").mouseenter(function(e){
        e.preventDefault();
        $("#file").html("~/Portfolio");
    })
    $(".menu-link:eq(4)").mouseenter(function(e){
        e.preventDefault();
        $("#file").html("~/Contact");
    })
    $(".menu-link").mouseout(function(e){
        e.preventDefault();
        $("#file").html("~");
    })

    // 네비게이터 클릭하면 블로그 브랜드 변경
    $(".nav-link:eq(0)").click(function(e){
        e.preventDefault();
        $("#file").html("~");
    })
    $(".nav-link:eq(1)").click(function(e){
        e.preventDefault();
        $("#file").html("~/About");
    })
    $(".nav-link:eq(2)").click(function(e){
        e.preventDefault();
        $("#file").html("~/Skills");
    })
    $(".nav-link:eq(3)").click(function(e){
        e.preventDefault();
        $("#file").html("~/Portfolio");
    })
    $(".nav-link:eq(4)").click(function(e){
        e.preventDefault();
        $("#file").html("~/Contact");
    })
    

    $(".portimg a").mouseenter(function(){
        $(this).find("p").css({
            display: "none"
        })
    })
    $(".portimg a").mouseout(function(){
        $(this).find("p").css({
            display: "block"
        })
    })

    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const portfolio = document.getElementById("portfolio");
    // const contact = document.getElementById("contact");
    $(window).on("scroll", function(){
        var scrollshow = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
        $(".scrollshow").css({
            width: scrollshow + "%"
        });
        if($(window).scrollTop() < home.offsetHeight * 0.5){
            $("#file").html("~");
        }else if($(window).scrollTop() >= home.offsetHeight * 0.5 && $(window).scrollTop() <= home.offsetHeight + about.offsetHeight * 0.5){
            $("#file").html("~/About");
        }else if($(window).scrollTop() >= home.offsetHeight + about.offsetHeight * 0.5 && $(window).scrollTop() <= home.offsetHeight + about.offsetHeight + skills.offsetHeight * 0.5){
            $("#file").html("~/Skills");
        }else if($(window).scrollTop() >= home.offsetHeight + about.offsetHeight + skills.offsetHeight * 0.5 && $(window).scrollTop() <= home.offsetHeight + about.offsetHeight + skills.offsetHeight + portfolio.offsetHeight * 0.5){
            $("#file").html("~/Portfolio");
        }else if($(window).scrollTop() >= home.offsetHeight + about.offsetHeight + skills.offsetHeight + portfolio.offsetHeight * 0.5){
            $("#file").html("~/Contact");
        }

        
        
    })
})


var end = new Typed('#typing', {
    stringsElement: "#typed-strings",
    strings: ['^1000 &nbsp;&nbsp;Frontend &amp; Backend / <br> &nbsp;&nbsp;Developer^2000'],
    typeSpeed: 50,
    backSpeed: 50,
    // smartBackspace: true,
    showCursor: false,
    // cursorChar: '_',
    // autoInsertCss: true
    loop: true
    });

var introduce = new Typed('#introduce', {
    stringsElement: "#typed-strings",
    strings: ['안녕하세요? <br> 저는 김포에서 프론트엔드와 <br> 백엔드 개발을 공부중인 최인영입니다. <br>MySQL과 JAVA를 배우고 <br> 있으며 react.js도 배울 것입니다. <br> 코딩하는 것이 좋고 <br> 새로운 것을 배우는 것을 좋아합니다. <br> 관심이 있으시다면 연락주세요.^1500'],
    typeSpeed: 50,
    backSpeed: 50,
    // smartBackspace: true,
    showCursor: false,
    // cursorChar: '_',
    // autoInsertCss: true
    loop: true
    });

function formFunc(){
    const contact = document.contactform;
    const errorbox = document.getElementById("errorbox");
    const message = document.getElementsByClassName("message")[0];

    if(contact.formname.value == "" && contact.formemail.value == "" && contact.formtext.value != ""){
        $(".errorbox").css({
            backgroundColor : "rgb(255, 20, 94)"
        });
        errorbox.innerHTML = "[ERROR] 이름과 이메일을 입력해주세요.";
    }else if(contact.formname.value == "" && contact.formemail.value != "" && contact.formtext.value != ""){
        $(".errorbox").css({
            backgroundColor : "rgb(255, 20, 94)"
        });
        errorbox.innerHTML = "[ERROR] 이름을 입력해주세요.";
    }else if(contact.formemail.value == "" && contact.formname.value != "" && contact.formtext.value != ""){
        $(".errorbox").css({
            backgroundColor : "rgb(255, 20, 94)"
        });
        errorbox.innerHTML = "[ERROR] 이메일을 입력해주세요.";
    }else if(contact.formname.value == "" && contact.formemail.value == "" && contact.formtext.value == ""){
        $(".errorbox").css({
            backgroundColor : "rgb(255, 20, 94)"
        });
        errorbox.innerHTML = "[ERROR] 아무것도 입력하지 않았습니다."; 
    }else if(contact.formtext.value == "" && contact.formname.value != "" && contact.formemail.value != ""){
        $(".errorbox").css({
            backgroundColor : "rgb(255, 20, 94)"
        });
        errorbox.innerHTML = "[ERROR] 메세지를 입력해주세요."; 
    }else if(contact.formname.value == "" && contact.formtext.value == "" && contact.formemail.value != ""){
        $(".errorbox").css({
            backgroundColor : "rgb(255, 20, 94)"
        });
        errorbox.innerHTML = "[ERROR] 이름과 메세지를 입력해주세요."; 
    }else if(contact.formemail.value == "" && contact.formtext.value == "" && contact.formname.value != ""){
        $(".errorbox").css({
            backgroundColor : "rgb(255, 20, 94)"
        });
        errorbox.innerHTML = "[ERROR] 이메일과 메세지를 입력해주세요."; 
    }else if(contact.formname.value != "" && contact.formemail.value != "" && contact.formtext.value != ""){
        $(".errorbox").css({
            backgroundColor : "transparent"
        });
        errorbox.innerHTML = ""; 
    }
}
