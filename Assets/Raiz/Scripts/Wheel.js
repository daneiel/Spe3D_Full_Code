#pragma strict

var WheelSpeed: float;
var colour: float;

function Start () {

	GetComponent.<Renderer>().material.color = Color.black;

}

function Update () {

	WheelSpeed = 300*Time.deltaTime; 

	transform.Rotate(0,WheelSpeed,0);

}