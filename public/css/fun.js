var second=0;
var stopper=0;//timer for stop watch
var a=1;
var fun_count=0;
var fun_count_stop=0;
var Id=0;
var tl=1;//time left
var id_for_stopwatch=0;
function set_reference()
{
    if(tl>0)
    {
   // document.getElementById("runner").innerHTML="Timer="+second+"";
    var A=document.getElementById("time").value;
    var s=document.getElementById("radio-1");
    var m=document.getElementById("radio-2");
    var h=document.getElementById("radio-3");
    var p=document.getElementById("progress");
    
    p.value=(a-tl)/a*100;
    // var p=document.getElementById("prsts").innerHTML="status="+p.value;
    

    if(s.checked==true)
    {
        a=A;
    }
    else if(m.checked==true)
    {
        a=A*60;
    }
    else if(h.checked==true)
    {
        a=A*3600;
    }
    
    if(a==second+1)
    {
        document.getElementById("audiofile").src="Trademark - Lyric Video Song (Kannada) - James - Puneeth Rajkumar - Chethan Kumar - Charan Raj.mp3";
        document.getElementById("timeoveralert").innerHTML="Time over";
    }
    second++;
    tl=a-second;
    document.getElementById("time_left").innerHTML="Time Left="+tl+" Seconds";
    fun_count=1;
    }
    else
        fun_count=1;

    
}
function set()
{
    if(fun_count==0 )
    {
            Id=window.setInterval(set_reference,1000);
    }

    else
        alert("Refresh webpage to set new timer");
}
function stop()
{
    window.clearInterval(Id);
    document.getElementById("audiofile").src="";
    fun_count=0;
}
function reset()
{
    second=0;
}

//stop watch
function strat1_reference()
{
    document.getElementById("timehead").innerHTML="stopper="+stopper+" seconds";
    stopper++;
    fun_count_stop=1;
}
function start1()
{
        if(fun_count_stop==0)
            {
                id_for_stopwatch= window.setInterval(strat1_reference,1000)
            }
        else
            alert("error");
}
function lap()
{
    var lapvalue=stopper-1;
    document.getElementById("lapper").innerHTML="lapped value="+lapvalue+"";
}
function stop1()
{
    window.clearInterval(id_for_stopwatch);
    fun_count_stop=0;
}
function reset1()
{
    stopper=0;
}