var dha = new Audio('assets/audio/dha.wav');
var dha0 = new Audio('assets/audio/dha.wav');
var dha2 = new Audio('assets/audio/dha2.wav');
var dhi = new Audio('assets/audio/dhi.wav');
var dhi0 = new Audio('assets/audio/dhi.wav');
var dhin = new Audio('assets/audio/dhin.wav');
var ge = new Audio('assets/audio/ge.wav');
var ka = new Audio('assets/audio/ka.wav');
var na = new Audio('assets/audio/na.wav');
var ti = new Audio('assets/audio/ti.wav');
var tin = new Audio('assets/audio/tin.wav');
var tin0 = new Audio('assets/audio/tin.wav');
var blnk =new Audio('assets/audio/dhin.wav');

//console.log(beat.length);
var transcyc=[[tin,tin0],[dha,dha0],[tin,tin0],[dha,dha0]];

var beatCycle1 = [[ti],[tin],[tin0],[na],[dhi],[na],[dhi],[na]];
var beatCycle1t = [1,2,2,1,1,1,1,1]; //This array signifies the relative rate at which beats will need to play
var tran1a=[[dha],[dha0],[tin],[tin],[dha],[dha0],[dhi],[na],[dhi],[na]];
var tran1at= [2,2,2,2,2,2,1,1,1,1];
var tran1b=[[ti],[tin],[tin],[na],[dhi],[na],[dhi],[tin],[tin]];
var tran1bt= [1,2,2,1,1,1,1,2,2];
var tran1c=[[dha],[dha0],[tin],[tin0],[dha],[dha0],[dhi],[na],[dhi],[tin],[tin0]];
var tran1ct= [2,2,2,2,2,2,1,1,1,2,2];

var beatCycle2 = [[dha],[ge],[na],[ti],[na],[ka],[dha],[na]];
var beatCycle2t = [1,1,1,1,1,1,1,1];
var tran2a=[[dha],[dha0],[tin],[tin0],[dha],[dha0],[ti],[na],[ka],[dha],[na]];
var tran2at= [2,2,2,2,2,2,1,1,1,1,1];
var tran2b=[[dha],[ge],[na],[ti],[na],[ka],[dha],[tin],[tin0]];
var tran2bt= [1,1,1,1,1,1,1,2,2];
var tran2c=[[dha],[dha0],[tin],[tin0],[dha],[dha0],[ti],[na],[ka],[dha],[tin],[tin0]];
var tran2ct= [2,2,2,2,2,2,1,1,1,1,2,2];

var beatCycle3 = [[dhi],[na],[dhi],[dhi0],[na],[ti],[na],[dhi],[dhi0],[na]];
var beatCycle3t = [1,1,1,1,1,1,1,1,1,1];
var tran3a=[[dha],[dha0],[tin],[tin0],[dha],[dha0],[dhi],[na],[ti],[na],[dhi],[dhi0],[na]];
var tran3at= [2,2,2,2,2,2,1,1,1,1,1,1,1];
var tran3b=[[dhi],[na],[dhi],[dhi0],[na],[ti],[na],[dhi],[dhi0],[tin],[tin0]];
var tran3bt= [1,1,1,1,1,1,1,1,1,2,2];
var tran3c=[[dha],[dha0],[tin],[tin0],[dha],[dha0],[dhi],[na],[ti],[na],[dhi],[dhi0],[tin],[tin0]];
var tran3ct= [2,2,2,2,2,2,1,1,1,1,1,1,2,2];

var beatCycle4 = [[tin],[tin0],[dha],[blnk]];
var beatCycle4t = [1,1,1,1];
var tran4a=[[dha],[dha0],[tin],[tin0],[dha],[dha0],[blnk]];
var tran4at= [2,2,2,2,2,2,1];
var tran4b=[[tin],[tin0],[dha],[tin],[tin]];
var tran4bt= [1,1,1,2,2];
var tran4c=[[dha],[dha0],[tin],[tin0],[dha],[dha0],[tin],[tin]];
var tran4ct= [2,2,2,2,2,2,2,2];

var trana=[];
var tranat=[];
var tranb=[];
var tranbt=[];
var tranc=[];
var tranct=[];

trana.push(tran1a);
trana.push(tran2a);
trana.push(tran3a);
trana.push(tran4a);
tranat.push(tran1at);
tranat.push(tran2at);
tranat.push(tran3at);
tranat.push(tran4at);

tranb.push(tran1b);
tranb.push(tran2b);
tranb.push(tran3b);
tranb.push(tran4b);
tranbt.push(tran1bt);
tranbt.push(tran2bt);
tranbt.push(tran3bt);
tranbt.push(tran4bt);

tranc.push(tran1c);
tranc.push(tran2c);
tranc.push(tran3c);
tranc.push(tran4c);
tranct.push(tran1ct);
tranct.push(tran2ct);
tranct.push(tran3ct);
tranct.push(tran4ct);


var cnt=[7,8,10,4];
var mx=7;
var temp=0;

var beatCycle = [];
beatCycle.push(beatCycle1);
beatCycle.push(beatCycle2);
beatCycle.push(beatCycle3);
beatCycle.push(beatCycle4);
console.log(beatCycle1);

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
dict[ti]=0.026;
dict[tin]=0.016;
dict[tin0]=0.016;
dict[dha]=0.027;
dict[dha0]=0.027;
dict[na]=0.04;
dict[dhi]=0.048;
dict[dhi0]=0.048;
dict[ge]=0.041;
dict[ka]=0.033;
dict[blnk]=0.014;
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
    // i=0;
    // if(flag==1){
    //     playing();
    // }
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


function addcycle(){

    k=0;
    mx=cnt[x];
    if(tapbut==1){
        tapcyc++;
    }

    if(tapbut==2){
        tp++;
        tp=tp%tapcyc;
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

    
    
    playlist = playlist.concat(beatCycle[x]);
    playlistt=playlistt.concat(beatCyclet[x]);
    
    
    
}
var k=1;
function playing(){
    
    if(x==0)document.getElementById("visual_style").innerHTML="The Current Playing style is Rupak" ;
    else if(x==1)document.getElementById("visual_style").innerHTML="The Current Playing style is Kherwa" ;
    else if(x==2)document.getElementById("visual_style").innerHTML="The Current Playing style is Jhatpal" ;
    else if(x==3)document.getElementById("visual_style").innerHTML="The Current Playing style is Kartaal" ;
    if(playlist.length==0){
        addcycle();
        bpm = bpm+bpm_velocity;
    }
    
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
    clearInterval(t);
    document.getElementById("visualization").innerHTML=" "  ;
    document.getElementById("visual_style").innerHTML=" "  ;
    document.getElementById("visual_bpm").innerHTML=" "  ;
    document.getElementById("bpm").innerHTML= bpm + " BPM";
    document.getElementById("bpm_velo").value= bpm_velocity;

}

function tap(){
    //document.getElementById("tap").value ="hello ";
    if(tapbut<2)tapbut++;
    if(tapbut==2)document.getElementById("tap").value =tapcyc;
}
