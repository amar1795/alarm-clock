let submit = document.getElementById("submit");
submit.addEventListener('click', func1);

var audio = new Audio('alarm.mp3');

// function ringbell()
// {
//     audio.play();               

// }

function func1(e){
    e.preventDefault();

    let alarm=document.getElementById("alarm");
    let alarmdate=new Date(alarm.value);
    now=new Date();

    let alarmtime=alarmdate-now;

    if(alarmtime>=0)
    {
        console.log(alarmtime)
        setTimeout(() => {
            audio.play();
            
        }, alarmtime);
    }

    
}


console.log(new Date());

