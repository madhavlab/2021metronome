var beatCycle1 = [['ti'],['ti','ti'],['na'],['dhi'],['na'],['dhi'],['na']];
var beatCycle2 = [['dha'],['ge'],['na'],['ti'],['na'],['ka'],['dhi'],['na']];
var beatCycle3 = [['dhi'],['na'],['dhi'],['dhi'],['na'],['ti'],['na'],['dhi'],['dhi'],['na']];

var beatCycle = [];
beatCycle.push(beatCycle1);
beatCycle.push(beatCycle2);
beatCycle.push(beatCycle3);

console.log(beatCycle1);

//loading of Audio Files

var dha = new Audio('assets/audio/dha.wav');
var dha2 = new Audio('assets/audio/dha2.wav');
var dhi = new Audio('assets/audio/dhi.wav');
var dhin = new Audio('assets/audio/dhin.wav');
var ge = new Audio('assets/audio/ge.wav');
var ka = new Audio('assets/audio/ka.wav');
var na = new Audio('assets/audio/na.wav');
var ti = new Audio('assets/audio/ti.wav');
var tin = new Audio('assets/audio/tin.wav');
var blnk ;

var dha_max =  0.027;
var dha2_max = 0;
var dhi_max = 0.048;
var dhin_max = 0.014;
var ge_max = 0.041;
var ka_max = 0.033;
var na_max = 0.04;
var ti_max = 0.026;
var tin_max = 0.016;
var blnk_max = 0;

//Assigning pattern for each style as a array
var beatCycle1 = [[ti],[ti,ti],[na],[dhi],[na],[dhi],[na]];
var beatCycle2 = [[dha],[ge],[na],[ti],[na],[ka],[dha],[na]];
var beatCycle3 = [[dhi],[na],[dhi],[dhi],[na],[ti],[na],[dhi],[dhi],[na]];
var beatCycle4 = [[tin],[tin],[dha2],[blnk]]
var beatCycle = [];
beatCycle.push(beatCycle1);
beatCycle.push(beatCycle2);
beatCycle.push(beatCycle3);
beatCycle.push(beatCycle4);
console.log(beatCycle1);

var max1 = [ti_max,ti_max,na_max,dhi_max,na_max,dhi_max,na_max];
var max2 = [dha_max,ge_max,na_max,ti_max,na_max,ka_max,dha_max,na_max];
var max3 = [dhi_max,na_max,dhi_max,dhi_max,na_max,ti_max,na_max,dhi_max,dhi_max,na_max];
var max4 = [tin_max,tin_max,dha2_max,blnk_max];
var max = [];
max.push(max1);
max.push(max2);
max.push(max3);
max.push(max4);

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
    clearInterval(t);
    audio = new Audio(),
    playlist = beatCycle[x]
    if(playlist[i][0]!=blnk){
        audio.volume = 1.0;
        audio.loop = false;
        audio= playlist[i][0];
        audio.play();
    }
    if(x==0)document.getElementById("visual_style").innerHTML="The Current Playing style is Rupak" ;
    if(x==1)document.getElementById("visual_style").innerHTML="The Current Playing style is Kherwa" ;
    if(x==2)document.getElementById("visual_style").innerHTML="The Current Playing style is Jhatpal" ;
    if(x==3)document.getElementById("visual_style").innerHTML="The Current Playing style is Kartaal" ;
    loop(); 
     
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
     t = setInterval(playing,60*1000/bpm -(max[x][i]-max[x][j-1])*1000);
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
