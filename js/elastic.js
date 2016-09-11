;(function(){
    var left=0;
    var speed=0;
    var i=0;
    var timer=null;

    window.elastic=function (obj,iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            speed-=(left-iTarget)/5;
            speed*=.7;

            left+=speed;

            obj.style.left=Math.round(left)+'px';
            if(Math.round(speed)<1 && Math.round(left)==iTarget)clearInterval(timer);
        },30);
    }
})();