#pragma strict

var PropellerSpeed: float;

function Start () {

}

function Update () {

PropellerSpeed = 3500*Time.deltaTime; //voltas por segundo

transform.Rotate(0,PropellerSpeed,0);

}