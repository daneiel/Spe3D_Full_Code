#pragma strict

var perSkin: GUISkin;
var posiX: float;
var posiY: float;
var altura: float;
var largura: float;
var winSong: AudioClip;


function Start () {

	altura = 100;
	largura = 100;

	posiX = Screen.width/2 - largura/2;
	posiY = Screen.height/2 - altura/2;
	
	GetComponent.<AudioSource>().clip = winSong;
	GetComponent.<AudioSource>().Play();

}

function Update () {

	

}

function OnGUI() {

	GUI.skin = perSkin;
	
	GUI.Label(Rect(posiX+20,posiY-115,largura,altura),"Forwards: Up Arrow");
	GUI.Label(Rect(posiX+20,posiY-70,largura,altura),"Backwards: Down Arrow");
	GUI.Label(Rect(posiX+20,posiY-25,largura,altura),"Turn Left: Left Arrow");
	GUI.Label(Rect(posiX+20,posiY+25,largura,altura),"Turn right: Right Arrow");
	GUI.Label(Rect(posiX+20,posiY+70,largura,altura),"Squeeze to left: A");
	GUI.Label(Rect(posiX+20,posiY+115,largura,altura),"Squeeze to right: D");
	GUI.Label(Rect(posiX+20,posiY+160,largura,altura),"Shoot: Spacebar");
	
	GUI.skin = perSkin;

	if (GUI.Button(Rect(posiX-75,posiY+200,largura,altura), "Play")){
	
		Application.LoadLevel("Terreno");		
	
	}
	
	if (GUI.Button(Rect(posiX+100,posiY+200,largura,altura), "Exit")){
		
			Application.Quit();				
		
	}
	
	if (GUI.Button(Rect(posiX+13,posiY+325,largura,altura), "Menu")){
		
			Application.LoadLevel("MenuPrincipal");				
		
	}
	
}