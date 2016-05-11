#pragma strict

var PauseControl: boolean;
var posiX: float;
var posiY: float;
var perSkin: GUISkin;
var altura: float;
var largura: float;

function Start () {

	PauseControl = true;

	altura = 100;
	largura = 100;

	posiX = Screen.width/2 - largura/2;
	posiY = Screen.height/2 - altura/2 + 120; 

}

function Update () {

if (Input.GetKeyDown(KeyCode.Escape)){
	
	if (PauseControl){ 
		
		Time.timeScale = 0; 
		PauseControl = false;
		
	}else{
		
		Time.timeScale = 1;
		PauseControl = true;		
		
	}
}

}

function OnGUI() {

	GUI.skin = perSkin;

	if (!PauseControl){
	
		GUI.Box(Rect(0,0,Screen.width,Screen.height)," ");
		GUI.Label(Rect(posiX,posiY-100,largura,altura),"Score: "+Helicopter.score+" points");
		GUI.Label(Rect(posiX,posiY-60,largura,altura),"Life: "+Helicopter.PlayersLife);
		
		if (GUI.Button(Rect(posiX,posiY-30,largura,altura), "Resume")){
		
			Time.timeScale = 1;
			PauseControl = true;				
		
		}
		
		if (GUI.Button(Rect(posiX,posiY+altura-20,largura,altura), "Exit")){
		
			Application.Quit();				
		
		}
		
		if (GUI.Button(Rect(posiX,posiY+190,largura,altura), "Menu")){
		
			Application.LoadLevel("MenuPrincipal");				
		
	}
	}

}