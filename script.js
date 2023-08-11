   
setInterval(showtime,10)

   function showtime (){

     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     var d = new Date()
     var hr = document.getElementById('hr')
     var min = document.getElementById('min')
     var sec = document.getElementById('sec')
     var millisec = document.getElementById('millisec')
     var days = document.getElementById('day')
     var monthdiv = document.getElementById('month')
     var yrdiv = document.getElementById('yr')

     var hour = d.getHours();
     var minute = d.getMinutes();
     var second = d.getSeconds();
     var msec = d.getMilliseconds();
     var day = weekday[d.getDay()];
     var month = months[d.getMonth()];
     var year = d.getFullYear();
     minute = checktime(minute);
     second = checktime(second);

     hr.innerHTML = hour
     min.innerHTML = minute
     sec.innerHTML = second
     millisec.innerHTML = msec
     days.innerHTML = day
     monthdiv.innerHTML = month
     yrdiv.innerHTML = year

     function checktime(i){
        if(i<10){
            i='0'+i;
        }
        return i;
     }

    };


