window.addEventListener("load", function() {
  var elements = document.getElementsByClassName("rainbowText");
  for (let i = 0; i < elements.length; i++) {
    generateRainbowText(elements[i]);
  }
});

function generateRainbowText(element) {
  var text = element.innerText;
  element.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let charElem = document.createElement("span");
    charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
  }
}
//text links
//folder
function foldertekstover() {
    var folder = document.getElementById("napis").innerHTML = "My projects.";
}
function foldertekstout() {
    var folder = document.getElementById("napis").innerHTML = "";
}
//steam
function steamtekstover() {
    var folder = document.getElementById("napis").innerHTML = "Steam profile.";
}
function steamtekstout() {
    var folder = document.getElementById("napis").innerHTML = "";
}
//mail
function mailtekstover() {
    var folder = document.getElementById("napis").innerHTML = "MyAnimeList account.";
}
function mailtekstout() {
    var folder = document.getElementById("napis").innerHTML = "";
}
//youtube account
function youtubetekstover() {
    var folder = document.getElementById("napis").innerHTML = "Youtube account.";
}
function youtubetekstout() {
    var folder = document.getElementById("napis").innerHTML = "";
}
//bio and inf
function inftekstover() {
    var folder = document.getElementById("napis").innerHTML = "About me.";
}
function inftekstout() {
    var folder = document.getElementById("napis").innerHTML = "";
}

// Radio made by anon user

var collection=[];// final collection of sounds to play
var loadedIndex=0;// horrible way of forcing a load of audio sounds
var audio;
// remap audios to a buffered collection
function init(audios) {
  for(var i=0;i<audios.length;i++) {
    audio = new Audio(audios[i]);
    collection.push(audio);
    buffer(audio);
  }
}

// did I mention it's a horrible way to buffer?
function buffer(audio) {
  if(audio.readyState==4)return loaded();
  setTimeout(function(){buffer(audio)},100);
}

// check if we're leady to dj this
function loaded() {
  loadedIndex++;
  if(collection.length==loadedIndex)playLooped();
}
// play and loop after finished
function playLooped() {
  audio=Math.floor(Math.random() * (collection.length));
  audio=collection[audio];
  audio.play();
  setTimeout(playLooped,audio.duration*1000);
  audio.volume=range.value;
}

function speaker(){
	if(audio.volume!=0){
	audio.volume=0;
	if(audio.volume==0)
	document.getElementById("speaker1").src = "Obrazy/speakercrossed.png";
	}
	else{
		audio.volume=range.value;
		document.getElementById("speaker1").src = "Obrazy/speaker.png";
		
	}
}

// the songs to be played!
var songs = new init([
  'Muzyka/muzyka1.mp3',
  'Muzyka/mazeofmayo.mp3',
  'Muzyka/alltime.mp4',
  'Muzyka/milkyways.mp3',
  'Muzyka/outbreaker.mp3',
  'Muzyka/kradness.mp3',
  'Muzyka/catgroove.mp3',
  'Muzyka/undertale.mp3',
  'Muzyka/supermario.mp3',
  'Muzyka/kilimanjaro.mp3',
  'Muzyka/hinkik.mp3'
]);
//end

// change volume
function changeVolume() {
var range = document.getElementById('range');
audio.volume=range.value;
if(audio.volume==0){
	document.getElementById("speaker1").src = "Obrazy/speakercrossed.png";
	
}
if(audio.volume!=0)
	document.getElementById("speaker1").src = "Obrazy/speaker.png";
}
//title
function currentSong(){
	
	if(audio.src == "https://reqs2.000webhostapp.com/muzyka/milkyways.mp3"){
document.getElementById("current-song-name").innerHTML = "Bossfight - Milky Ways ";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/outbreaker.mp3"){
document.getElementById("current-song-name").innerHTML = "Hinkik - Outbreaker";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/mazeofmayo.mp3"){
document.getElementById("current-song-name").innerHTML = "Bossfight - The Maze Of Mayonnaise";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/alltime.mp4"){
document.getElementById("current-song-name").innerHTML = "Keys N Krates - All The Time (Tove Lo Flip) ";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/kradness.mp3"){
document.getElementById("current-song-name").innerHTML = " ?kradness&???? ";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/muzyka1.mp3"){
document.getElementById("current-song-name").innerHTML = " Shawn Lees Ping Pong Orchestra feat. Nino Mochella - Kiss The Sky ";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/catgroove.mp3"){
document.getElementById("current-song-name").innerHTML = "Parov Stelar - Catgroove";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/undertale.mp3"){
document.getElementById("current-song-name").innerHTML = "Undertale OST 100 - Megalovania";
	}
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/supermario.mp3"){
document.getElementById("current-song-name").innerHTML = "Yoshis Island Music - Athletic";
	}	
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/kilimanjaro.mp3"){
document.getElementById("current-song-name").innerHTML = "Yu-Dachi - Kilimanjaro";
}	
else if(audio.src == "https://reqs2.000webhostapp.com/muzyka/hinkik.mp3"){
document.getElementById("current-song-name").innerHTML = "[Electro] Hinkik - Skystrike";
}	
}

function OpenAlert(time){
	document.getElementById("bioinfo").style.display = 'block';
	
	
}
function CloseAlert(){
	
	document.getElementById("bioinfo").style.display = 'none';
	
}
var r=256;
var g=0;
var b=0;
var ink=0;
function rgb(){
  var folder = document.getElementById("rgb").style.color =`rgb(${r},${g},${b})`;
  var folder = document.getElementById("napis").style.color =`rgb(${r},${g},${b})`;
if(ink==0){
  r-=1; 
  g+=1;
  if(g==256)
  ink=1;
  }
  if(ink==1){
    g-=1;
    b+=1;
    if(b==256)
    ink=2;
  }
  if(ink==2){
    b-=1;
    r+=1;
    if(r==256)
    ink=0;
  }




}
var myInterval = setInterval(rgb, 9);
