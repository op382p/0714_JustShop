/* eslint-disable */
$(function () {



    $("li.mainLi").mouseover(function () { 
        $("ul.subMenu").stop().slideDown(800); 
    });

    /* 서브메뉴 올리기 */
    $("li.mainLi").mouseout(function () {
        $("ul.subMenu").stop().slideUp(300);
    });
});

$(function () {

    


    setInterval(fnSlide, 5000); 

    function fnSlide() { 

       
        $("div#shuttleFrame").animate({
                "margin-left": "-1200px"
            },
            3000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(3)");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            }
        );
        /* 슬라이드 쇼 애니메이션 */

    } 




});



$(function () {


    $("button.tabBtn").click(function () {

        /* 탭버튼 CSS 적용 시작 */
        $("button.tabBtn").css({
            "border": "1px solid #aaa",
            "background-color": "#eee"
        });

        $(this).css({
            "border-bottom-color": "#fff",
            "background-color": "#fff"
        });
        /* 탭버튼  적용 끝 */


      
        $("div.tabContents").css({
            "display": "none"
        });

        
        var dataLink = $(this).attr("data-link");
        $("#" + dataLink).css({
            "display": "block"
        });
        /* 탭버튼에  끝 */




    });


});
