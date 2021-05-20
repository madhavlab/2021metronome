var dha_k = new Audio('assets/audio/dha_k.wav');
var tin = new Audio('assets/audio/tin.wav');
var tin_0 = new Audio('assets/audio/tin.wav');
var dha_m = new Audio('assets/audio/dha_m.wav');
var ghe_hard = new Audio('assets/audio/ghe_hard.wav');
var ghe_soft = new Audio('assets/audio/ghe_soft.wav');
var khi = new Audio('assets/audio/khi.wav');
var na = new Audio('assets/audio/na.wav');
var re = new Audio('assets/audio/re.wav');
var ta = new Audio('assets/audio/ta.wav');
var te = new Audio('assets/audio/te.wav');
var pa = new Audio('assets/audio/na.wav');
var blnk = new Audio('assets/audio/tin.wav');

//console.log(beat.length);
var transcyc=[];


var beatCycle1 = [[tin],[tin_0],[dha_k],[blnk]];
var beatCycle1t = [1,1,1,1];

var beatCycle2 = [[tin],[dha_k],[blnk]];
var beatCycle2t = [1,1,1];


var beatCycle3 = [[khi],[blnk],[khi],[na],[dha_m],[ghe_soft],[dha_m],[ghe_hard],[dha_m],[ghe_soft],[blnk],[blnk],[na],[te],[te],[re],[te],[re],[na]];
var beatCycle3t = [1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1];
var tran3=[[te],[re],[khi],[ta],[dha_m],[te],[re],[khi],[ta],[dha_m],[te],[re],[khi],[ta],[dha_m],[blnk],[blnk],[na],[te],[te],[re],[te],[re],[na]];
var tran3a= [2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,1,1,1,1,2,2,2,2,1];


var beatCycle4 = [[ghe_hard],[blnk],[na],[pa],[blnk],[ghe_hard],[dha_m],[blnk]];
var beatCycle4t = [1,1,1,1,1,1,1,1];

var trana=[];
var tranat=[];

trana.push(beatCycle1);
tranat.push(beatCycle1t);
trana.push(beatCycle2);
tranat.push(beatCycle2t);
trana.push(tran3);
tranat.push(tran3a);
trana.push(beatCycle4);
tranat.push(beatCycle4t);

console.log(trana);
var cnt=[4,3,16,8];
var mx=7;
var temp=0;

var beatCycle = [];
beatCycle.push(beatCycle1);
beatCycle.push(beatCycle2);
beatCycle.push(beatCycle3);
beatCycle.push(beatCycle4);
console.log(beatCycle);

var beatCyclet=[];
beatCyclet.push(beatCycle1t);
beatCyclet.push(beatCycle2t);
beatCyclet.push(beatCycle3t);
beatCyclet.push(beatCycle4t);

var x=0;
var bpm = 100;
var bpmcurr=bpm;
var bpm_velocity=0;
var flag =0;
var tapbut=0;
var tapcyc=0;
var tp=0;

var audio;
var t;
var playlist=[];
var playlistt=[];
var beat=[];
var i =0;

var dict={}

var dict={}
dict[dha_k]=0.026757369614512472;
dict[dha_m]=0.07641723356009071;
dict[ghe_hard]=0.03891156462585034;
dict[khi]=0.014331065759637189;
dict[na]=0.04793650793650794;
dict[ta]=0.035986394557823126;
dict[re]=0.030702947845804986;
dict[te]=0.03346938775510204;
dict[tin]=0.005759637188208617;
dict[tin_0]=0.005759637188208617;
dict[ghe_soft]=0.028820861678004534;
dict[blnk]=0.005759637188208617;
dict[pa]=0.04793650793650794;

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
    if(x==2){
        document.getElementById("tap").value ="Transition";
    }
    else{
        taped=0;
        tapbut=0;
        tapcyc=0;
        document.getElementById("tap").value ="No Transition";
    }
   
    console.log(x);
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
        stopAllAudio();
        clearInterval(t);
        document.getElementById("visualization").innerHTML=" "  ;
        document.getElementById("visual_style").innerHTML=" "  ;
        document.getElementById("visual_bpm").innerHTML=" "  ;
    }

}
audio =[];

function addcycle(){

    k=0;
    bpm = bpm+bpm_velocity;
    mx=cnt[x];
    var i =0;
    if(tapbut==1){
        tapcyc++;
    }
    console.log("tp"+ tp);
    if(tapbut==2){
        tp++;
        tp=tp%tapcyc;
        console.log("tp"+ tp);
        if(tapcyc<=1){
            playlist = playlist.concat(trana[x]);
            playlistt= playlistt.concat(tranat[x]);
            return;
        }
        if(tp==0){
            playlist = playlist.concat(trana[x]);
            playlistt= playlistt.concat(tranat[x]);
            console.log(playlist);
            return;
        }
        /*if(tp==tapcyc-1){
            playlist = playlist.concat(tranb[x]);
            playlistt= playlistt.concat(tranbt[x]);
            return;
        }*/
        
    }

    
    console.log(tp);
    
    playlist = playlist.concat(beatCycle[x]);
    playlistt=playlistt.concat(beatCyclet[x]);
    
    stopAllAudio();
    
    
    
}

function stopAllAudio(){
    for(q=0; q<audio.length; q++) {
        audio[q].pause();
        audio[q].currentTime=0;
    }
    
}
var k=1;

function playing(){
    
    if(x==0)document.getElementById("visual_style").innerHTML="The Current Playing style is Kartaal (4)" ;
    else if(x==1)document.getElementById("visual_style").innerHTML="The Current Playing style is Kartaal (3)" ;
    else if(x==2)document.getElementById("visual_style").innerHTML="The Current Playing style is Mridanga (16)" ;
    else if(x==2)document.getElementById("visual_style").innerHTML="The Current Playing style is Kartaal (8)" ;
    if(playlist.length==0){
        addcycle();
        
    }
    
    beat=playlist[0];
    console.log(playlist[0]);
    k=playlistt[0];
    playlist.shift();
    playlistt.shift();
    bpmcurr=bpm*k;
    temp+=1/k;
    if(Number.isInteger(temp)){
        document.getElementById("visualization").innerHTML="The Current Playing Beat is " + (temp) ;
        if(temp==mx)temp=0;
    }
    document.getElementById("visual_bpm").innerHTML="The Current Playing Beat is " + (bpm) ;
    clearInterval(t);

    audio[i] = new Audio();
    
    audio[i].volume = 1.0;
    
    audio[i].loop = false;
    audio[i]=beat[0];
    if(beat[0]==blnk)audio[i].volume=0.0;
    console.log(k);
    audio[i].play();
    console.log(playlist);
    i++;
    
    loop();

  
     
}


function loop(){
    document.getElementById("bpm").innerHTML= bpm + " BPM";
    console.log(bpm);
    if(playlist.length>1) t = setInterval(playing,60.0*1000/(bpmcurr)-1000*dict[beat[0]]+1000*dict[playlist[1][0]]);
    else t = setInterval(playing,60.0*1000/(bpmcurr)-1000*dict[beat[0]]+1000*dict[beatCycle[x][0][0]]);
    console.log(t);
}

function reset(){
    bpm =100;
    bpm_velocity =0;
    flag=0;
    document.getElementById("start").value ="Start";
    document.getElementById("tap").value ="Transition ";
    i=0;
    taped=0;
    tapbut=0;
    tapcyc=0;
    stopAllAudio();
    clearInterval(t);
    document.getElementById("visualization").innerHTML=" "  ;
    document.getElementById("visual_style").innerHTML=" "  ;
    document.getElementById("visual_bpm").innerHTML=" "  ;
    document.getElementById("bpm").innerHTML= bpm + " BPM";
    document.getElementById("bpm_velo").value= bpm_velocity;

}

function tap(){
    if(x==2){
        if(tapbut<2)tapbut++;
        if(tapbut==2)document.getElementById("tap").value =tapcyc;
    }
    else{
        document.getElementById("tap").value ="No Transition";
    }
    

}
