var beatCycle1 = [['ti'],['ti','ti'],['na'],['dhi'],['na'],['dhi'],['na']];
var beatCycle2 = [['dha'],['ge'],['na'],['ti'],['na'],['ka'],['dhi'],['na']];
var beatCycle3 = [['dhi'],['na'],['dhi'],['dhi'],['na'],['ti'],['na'],['dhi'],['dhi'],['na']];

var beatCycle = [];
beatCycle.push(beatCycle1);
beatCycle.push(beatCycle2);
beatCycle.push(beatCycle3);

console.log(beatCycle1);


var dha = new Audio('assets/audio/dha.wav');
var dhi = new Audio('assets/audio/dhi.wav');
var dhin = new Audio('assets/audio/dhin.wav');
var ge = new Audio('assets/audio/ge.wav');
var ka = new Audio('assets/audio/ka.wav');
var na = new Audio('assets/audio/na.wav');
var ti = new Audio('assets/audio/ti.wav');
var tin = new Audio('assets/audio/tin.wav');

var x=0;
var bpm = 100;
var bpm_velocity=0;
var flag =0;


function bpmvel(){
    bpm_velocity = parseInt(document.getElementById("bpm_velo").value);
}


function sub1(){
    var element = document.getElementById("bpm");
    if(bpm>20)bpm=bpm-1;
    element.innerHTML = bpm + " BPM";  
    
}

function plus1(){
    var element = document.getElementById("bpm");
    if(bpm<500)bpm=bpm+1;
    element.innerHTML = bpm + " BPM"; 
}

function stylechange(){
    x=document.getElementById("style").value;
    console.log(x);
    i=0;
    if(flag==1){
        playing();
    }
}

function toggle(){
    var q = document.getElementById("start").value;
    if(q=="Start"){
        console.log("s");
        flag =1;
        document.getElementById("start").value = "Stop";
        playing();
    }
    else if(q=="Stop"){
        flag =0;
        document.getElementById("start").value ="Start";
        i=0;
        clearInterval(t);
        document.getElementById("visualization").innerHTML=" "  ;
        document.getElementById("visual_style").innerHTML=" "  ;
        document.getElementById("visual_bpm").innerHTML=" "  ;
    }

}

var audio;
var t;
var playlist = [];
var i =0;

function playing(){
    if(x==0){
        clearInterval(t);
        audio = new Audio(),
        playlist = new Array('assets/audio/ti.wav','assets/audio/ti.wav','assets/audio/na.wav','assets/audio/dhi.wav','assets/audio/na.wav','assets/audio/dhi.wav','assets/audio/na.wav');
        audio.volume = 1.0;
        audio.loop = false;
        audio.src = playlist[i];
        audio.play();
        document.getElementById("visual_style").innerHTML="The Current Playing style is Rupak" ;
        loop();   
    }
    else if(x==1){
        playlist.length = 0;
        clearInterval(t);
        audio = new Audio(),
        playlist = new Array('assets/audio/dha.wav','assets/audio/ge.wav','assets/audio/na.wav','assets/audio/ti.wav','assets/audio/na.wav','assets/audio/ka.wav','assets/audio/dhi.wav','assets/audio/na.wav');
        audio.volume = 1.0;
        audio.loop = false;
        audio.src = playlist[i];
        audio.play();
        document.getElementById("visual_style").innerHTML="The Current Playing style is Kherwa" ;
        loop();
        
    }
    else if(x==2){
        playlist.length = 0;
        clearInterval(t);
        audio = new Audio(),
        playlist = new Array('assets/audio/dhi.wav','assets/audio/na.wav','assets/audio/dhi.wav','assets/audio/dhi.wav','assets/audio/na.wav','assets/audio/ti.wav','assets/audio/na.wav','assets/audio/dhi.wav','assets/audio/dhi.wav','assets/audio/na.wav');
        audio.volume = 1.0;
        audio.loop = false;
        audio.src = playlist[i];
        audio.play();
        document.getElementById("visual_style").innerHTML="The Current Playing style is Jhatpal" ;
        loop();
    }   
}


function loop(){
    var j = i+1;
    document.getElementById("visualization").innerHTML="The Current Playing Beat is " + j ;
    document.getElementById("visual_bpm").innerHTML="The Current BPM is " + bpm ;
    if(++i<playlist.length){
        i=i;
    }
    else{
        i=0;
        bpm = bpm + bpm_velocity; 
        document.getElementById("bpm").innerHTML = bpm +" BPM";
        console.log(bpm);
    }
    console.log(i);
   
     t = setInterval(playing,60*1000/bpm);
}

function reset(){
    bpm =100;
    bpm_velocity =0;
    flag=0;
    document.getElementById("start").value ="Start";
    i=0;
    clearInterval(t);
    document.getElementById("visualization").innerHTML=" "  ;
    document.getElementById("visual_style").innerHTML=" "  ;
    document.getElementById("visual_bpm").innerHTML=" "  ;
    document.getElementById("bpm").innerHTML= bpm + " BPM";
    document.getElementById("bpm_velo").value= bpm_velocity;
}
