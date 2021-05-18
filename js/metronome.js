var dha = new Audio('assets/audio/dha.wav');
var tin = new Audio('assets/audio/tin.wav');
var blnk = new Audio('assets/audio/tin.wav');

//console.log(beat.length);
var transcyc=[];


var beatCycle1 = [[tin],[tin],[dha],[blnk]];
var beatCycle1t = [1,1,1,1];
var tran1a=[];
var tran1at= [];
var tran1b=[];
var tran1bt= [];
var tran1c=[];
var tran1ct= [];
var beatCycle2 = [[tin],[dha],[blnk]];
var beatCycle2t = [1,1,1];
var tran2a=[];
var tran2at= [];
var tran2b=[];
var tran2bt= [];
var tran2c=[];
var tran2ct= [];

var trana=[];
var tranat=[];
var tranb=[];
var tranbt=[];
var tranc=[];
var tranct=[];

trana.push(tran1a);
trana.push(tran2a);
/*trana.push(tran3a);
trana.push(tran4a);*/
tranat.push(tran1at);
tranat.push(tran2at);
/*tranat.push(tran3at);
tranat.push(tran4at);*/

tranb.push(tran1b);
tranb.push(tran2b);

tranbt.push(tran1bt);
tranbt.push(tran2bt);


tranc.push(tran1c);
tranc.push(tran2c);

tranct.push(tran1ct);
tranct.push(tran2ct);


var cnt=[4,3];
var mx=7;
var temp=0;

var beatCycle = [];
beatCycle.push(beatCycle1);
beatCycle.push(beatCycle2);
console.log(beatCycle);

var beatCyclet=[];
beatCyclet.push(beatCycle1t);
beatCyclet.push(beatCycle2t);


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

dict[tin]=0.06;
dict[dha]=0.023;
dict[blnk]=0.023;
dict[test]=0.023;

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
        audio.pause();
        audio.currentTime = 0;
        clearInterval(t);
        document.getElementById("visualization").innerHTML=" "  ;
        document.getElementById("visual_style").innerHTML=" "  ;
        document.getElementById("visual_bpm").innerHTML=" "  ;
    }

}
audio = new Audio();
var allAudios ;
function addcycle(){

    k=0;
    bpm = bpm+bpm_velocity;
    mx=cnt[x];
    if(tapbut==1){
        tapcyc++;
    }
    console.log("tp"+ tp);
    if(tapbut==2){
        tp++;
        tp=tp%tapcyc;
        console.log("tp"+ tp);
        if(tapcyc<=1){
            playlist = playlist.concat(tranc[x]);
            playlistt= playlistt.concat(tranct[x]);
            return;
        }
        if(tp==0){
            playlist = playlist.concat(trana[x]);
            playlistt= playlistt.concat(tranat[x]);
            return;
        }
        if(tp==tapcyc-1){
            playlist = playlist.concat(tranb[x]);
            playlistt= playlistt.concat(tranbt[x]);
            return;
        }
        
    }

    
    console.log(tp);
    
    playlist = playlist.concat(beatCycle[x]);
    playlistt=playlistt.concat(beatCyclet[x]);
    allAudios = document.querySelectorAll('audio');
    stopAllAudio();
    
    
    
}
function stopAllAudio(){
	allAudios.forEach(function(audio){
        audio.pause();
        audio.currentTime=0
	});
}
var k=1;
function playing(){
    
    if(x==0)document.getElementById("visual_style").innerHTML="The Current Playing style is Kartaal(4)" ;
    else if(x==1)document.getElementById("visual_style").innerHTML="The Current Playing style is Kartaal(3)" ;
    if(playlist.length==0){
        addcycle();
        
    }
    audio.pause();
    audio.currentTime = 0;
    beat=playlist[0];
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

    audio = new Audio();
    audio.volume = 1.0;
    
    audio.loop = false;
    audio=beat[0];
    if(beat[0]==blnk)audio.volume=0.0;
    console.log(k);
    audio.play();
    console.log(playlist);
    
    loop();

  
     
}


function loop(){
    document.getElementById("bpm").innerHTML= bpm + " BPM";
    console.log(bpm);
    if(playlist.length>1) t = setInterval(playing,60.0*1000/(bpmcurr)-(beat[0].duration-1000*dict[beat[0]])-1000*dict[playlist[1][0]]);
    else t = setInterval(playing,60.0*1000/(bpmcurr)-(beat[0].duration-1000*dict[beat[0]])-1000*dict[beatCycle[x][0][0]]);
    console.log(60.0*1000/(bpmcurr)-(beat[0].duration-1000*dict[beat[0]])-1000*dict[beatCycle[x][0][0]]);
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
    audio.pause();
    audio.currentTime = 0;
    clearInterval(t);
    document.getElementById("visualization").innerHTML=" "  ;
    document.getElementById("visual_style").innerHTML=" "  ;
    document.getElementById("visual_bpm").innerHTML=" "  ;
    document.getElementById("bpm").innerHTML= bpm + " BPM";
    document.getElementById("bpm_velo").value= bpm_velocity;

}

function tap(){
    if(tapbut<2)tapbut++;
    if(tapbut==2)document.getElementById("tap").value =tapcyc;

}
