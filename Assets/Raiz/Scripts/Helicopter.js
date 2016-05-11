#pragma strict

var FrontSpeed : float;
var UpSpeed : float;
var DownSpeed: float;
var SideSpeed: float;
var RotationSpeed: float;
var colour: float;
var hurtSound: AudioClip;

static var PlayersLife: int;
static var PlayersPosition: Vector3;
static var score: int;


var perSkin: GUISkin;
var posiX: float;
var posiY: float;
var altura: float;
var largura: float;

function Start () {

	altura = 100;
	largura = 100;

	posiX = 0.9*Screen.width - largura;
	posiY = 0.2*Screen.height - altura;

	PlayersLife = 1000;
	score = 0;
	GetComponent.<Renderer>().material.color = Color.blue;


}

function Update () {


	FrontSpeed = 400*Time.deltaTime;
	SideSpeed = 150*Time.deltaTime;
	RotationSpeed = 250*Time.deltaTime;

	if(Input.GetKey(KeyCode.UpArrow)){ // forwards
	
		transform.Translate(0,0,FrontSpeed);

	}

	if(Input.GetKey(KeyCode.DownArrow)){ //backwards

		transform.Translate(0,0,-FrontSpeed);

	}

	/*if(Input.GetKey("w")){ //up 

		transform.Translate(0,UpSpeed,0);

	}

	if(Input.GetKey("s")){ //down 

		transform.Translate(0,-DownSpeed,0);

	}*/

	if(Input.GetKey("a")){ 

		transform.Translate(-SideSpeed,0,0);

	}

	if(Input.GetKey("d")){ 

		transform.Translate(SideSpeed,0,0);
	
	}

	if(Input.GetKey(KeyCode.LeftArrow)){ 

		transform.Rotate(0,-RotationSpeed,0);

	}

	if(Input.GetKey(KeyCode.RightArrow)){ 

		transform.Rotate(0,RotationSpeed,0);
	
	}
	
	//if ((Input.GetKey(KeyCode.RightArrow)) && (Input.GetKey(KeyCode.UpArrow))){
	//	transform.Rotate(SideSpeed,/*RotationSpeed*/0,FrontSpeed);
	//}
	
	PlayersPosition = transform.position; //following the player
	
	if ((PlayersLife<=0) || (respaw.MaxEnemyCounter >= 20)){
		Application.LoadLevel("GameOverScene");
	}
	
	if ((score >= 5000)){
		Application.LoadLevel("WinScene");
	}
	
}

function OnGUI() {

	GUI.skin = perSkin;
	
	GUI.Label(Rect(posiX+100,posiY-50,largura,altura),"Score: "+Helicopter.score);//+" points");
	GUI.Label(Rect(posiX+100,posiY-30,largura,altura),"Life: "+Helicopter.PlayersLife);
	GUI.Label(Rect(posiX+100,posiY-10,largura,altura),"Enemies killed: "+Enemy.enemiesKilled);
	GUI.Label(Rect(posiX+100,posiY+20,largura,altura),"Bullets: "+Gun.bulletCounter);
	
	
}

function OnCollisionEnter (collision: Collision){

	if(collision.gameObject.tag == "Enemy"){
		
		if (!GetComponent.<AudioSource>().isPlaying){
			
			GetComponent.<AudioSource>().clip = hurtSound;
			GetComponent.<AudioSource>().Play();	
			PlayersLife = PlayersLife - 200;
		
		}
	}
	
	if (collision.transform.tag == "Wall"){

		Application.LoadLevel("GameOverScene");
	
	}
}