// 2) When clicked, the square moves smoothly to the right and stops at 40px to the right edge. You can use any animation algorithm and duration
// for this assignment.

$(function(){
    //add event handler to the square element targeting the div.
    $("div").click(function(){
        //add animation to the div by updating its position when element is clicked.
        $("div").animate({
            right:"40px",
            position:"fixed"
        })
    })
})