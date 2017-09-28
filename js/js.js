var small1 = document.getElementById('small1'),
    small2 = document.getElementById('small2'),
    small3 = document.getElementById('small3'),
    small4 = document.getElementById('small4'), 
    h3 = document.getElementById('h3'),
    week = ['日','一','二','三','四','五','六'];
function fn(){
    var time = new Date();
    var month = time.getMonth()+1,
        data =time.getDate(),
        day = time.getDay(),
        hours = time.getHours(),
        minutes = time.getMinutes();
        second = time.getSeconds();
        small1.innerHTML = zero(hours)+':'+zero(minutes)+':'+zero(second);
        small2.innerHTML = zero(hours)+':'+zero(minutes)+':'+zero(second);
        small3.innerHTML = zero(hours)+':'+zero(minutes)+':'+zero(second);
        h3.innerHTML = zero(hours)+':'+zero(minutes);
        small4.innerHTML = month+'月'+data+'日'+' • 星期'+week[day];
}
fn()
setInterval(fn,1000)

function zero(i){
    return i<10?i+'0':i;
}