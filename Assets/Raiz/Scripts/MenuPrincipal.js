#pragma strict

var posiX: float;
var posiY: float;
var altura: float;
var largura: float;
var perSkin: GUISkin;
var menuSong: AudioClip;
//var winSong: AudioClip;

function Start () {

	altura = 100;
	largura = 100;

	posiX = Screen.width/2 - largura/2;
	posiY = Screen.height/2 - altura/2;

}

function Update () {
	
	GetComponent.<AudioSource>().clip = menuSong;
	GetComponent.<AudioSource>().Play();
	
}

function OnGUI() {

	GUI.skin = perSkin;

	if (GUI.Button(Rect(posiX,posiY,largura,altura), "Play")){
	
		Application.LoadLevel("Terreno");		
	
	}
	
	if (GUI.Button(Rect(posiX,posiY+110,largura,altura), "Exit")){ 
	
		Application.Quit();		
	
	}
	
	if (GUI.Button(Rect(posiX,posiY+220,largura,altura), "Commands")){ 
	
		Application.LoadLevel("CommandsScene");		
	
	}
	
}