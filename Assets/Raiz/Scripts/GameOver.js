#pragma strict

var posiX: float;
var posiY: float;
var altura: float;
var largura: float;
var perSkin: GUISkin;
var gameOverSong: AudioClip;


function Start () {

	altura = 100;
	largura = 100;

	posiX = Screen.width/2 - largura/2 - 75;
	posiY = Screen.height/2 - altura/2;
	
	/*audio.clip = menuSong;
	audio.Play();*/

}

function Update () {
	
	GetComponent.<AudioSource>().clip = gameOverSong;
	GetComponent.<AudioSource>().Play();

}

function OnGUI() {

	GUI.skin = perSkin;
	
	GUI.Label(Rect(posiX+100,posiY-100,largura,altura),"GAME OVER!");
	GUI.Label(Rect(posiX+100,posiY-50,largura,altura),"Score: "+Helicopter.score);
	GUI.Label(Rect(posiX+100,posiY-30,largura,altura),"Life: "+Helicopter.PlayersLife);
		
	if (GUI.Button(Rect(posiX,posiY+50,largura,altura), "Restart")){
	
		Application.LoadLevel("Terreno");		
	
	}
	
	if (GUI.Button(Rect(posiX+175,posiY+50,largura,altura), "Exit")){
		
			Application.Quit();				
		
	}
	
	if (GUI.Button(Rect(posiX+87,posiY+175,largura,altura), "Menu")){
		
			Application.LoadLevel("MenuPrincipal");				
		
	}		
	
}