#pragma strict

var bullet: GameObject;
static var bulletCounter: int;
var colour: float;

function Start () {

	bulletCounter = 50;
	GetComponent.<Renderer>().material.color = Color.yellow;

}

function Update () {


if(Input.GetKeyDown(KeyCode.Space)){

	if (bulletCounter > 0){
		Instantiate(bullet,transform.position,transform.rotation);
		bulletCounter = bulletCounter - 1;
	}
}

}