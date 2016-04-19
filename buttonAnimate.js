/**
 * Created by idaut on 04/17/16.
 */
$(document).ready(function() {
    $(".menuItem").hover(function(){
        $(this).css({
            transition : 'background-color 0.2s ease-in-out',
            "background-color": "#97DEFF"})
    },function(){
        $(this).css({
            transition : 'background-color 0.2s ease-in-out',
            "background-color": "rgba(57,61,71,1)"})
    });

    $(".menuItem a,.menuItem a:visited").hover(function(){
        $(this).css({
            transition : 'color 0.2s ease-in-out',
            "color": "rgba(57,61,71,1)"})
    },function(){
        $(this).css({
            transition : 'color 0.2s ease-in-out',
            "color": "rgba(255,255,255,1)"})
    });
});