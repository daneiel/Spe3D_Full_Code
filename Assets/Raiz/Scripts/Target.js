#pragma strict

var posiX: float;
var posiY: float;
var altura: float;
var largura: float;
var perSkin: GUISkin;

function Start () {

	altura = 100;
	largura = 100;

	posiX = Screen.width/2 - largura/2;
	posiY = Screen.height/2 - altura/2;

}

function Update () {

}

function OnGUI() {

	GUI.skin = perSkin;
	
	GUI.Label(Rect(posiX+47,posiY-90,largura,altura),"+");
	
	
}