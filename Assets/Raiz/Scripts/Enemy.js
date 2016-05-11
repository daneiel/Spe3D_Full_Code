#pragma strict

var Distance: Vector3;
var TranslateSpeed: float;
var MinimumDistance: int;
var normX: float; 
var normZ: float; 
var RotationSpeed: float;
var tempo: float;
var cor: float;
var enemyPosition: Vector3;
static var enemiesKilled: int;

var damage: AudioClip;

function Start () {

	MinimumDistance = 1000;
	tempo = 0;
	//enemiesKilled = 0;

	cor = Random.value *100;

	if ((cor>0) && (cor<25)){
	 	
	 	GetComponent.<Renderer>().material.color = Color.red;
	 	
	}else if((cor>50) && (cor<75)) {
		
		GetComponent.<Renderer>().material.color = Color.yellow;
		
	}else if ((cor<100) && (cor>75)){
		
		GetComponent.<Renderer>().material.color = Color.blue;
	}

}

function Update () {

	TranslateSpeed = 100*Time.deltaTime;

	Distance = Helicopter.PlayersPosition - transform.position;

	normX = Distance.x;
	normX = Distance.z;
	print(normX+" - "+normZ);

	if(normX < 0) normX = -normX;
	if(normZ < 0) normZ = -normZ; //precisa das duas condições (as duas coordenadas) para que o inimigo ataque

	if((normX < MinimumDistance) && (normZ < MinimumDistance)){ //imagine um quadrante para poder atacar

			//attack
			
			transform.rotation.y = 0;
			
			if (Distance.x > 0) {
			
				transform.Translate(TranslateSpeed,0,0);
			
			}else{
			
				transform.Translate(-TranslateSpeed,0,0);
			
			}

			if (Distance.z > 0) {
			
				transform.Translate(0,0,TranslateSpeed);
			
			}else{
			
				transform.Translate(0,0,-TranslateSpeed);
			
			}
		
			/*if (Distance.y > 0) {
				transform.Translate(0,TranslateSpeed,0);
			}else{
				transform.Translate(0,-TranslateSpeed,0);
			}*/

		}else{
		
		//random moviments
		
		transform.Translate(0,0,-TranslateSpeed);
		
		tempo = tempo + 1*Time.deltaTime; //receiving one second 
		
		if (tempo > 3){
		
			RotationSpeed = 375*Random.value; //(degrees)*random number between 0 and 1
			transform.Rotate(0,RotationSpeed*Time.deltaTime,0);
			tempo = 0;
		}
		
		}
		
		if ((enemyPosition.x>-1000) && (enemyPosition.y>0)){
			Destroy(gameObject);		
		}
}

function OnCollisionEnter (collision: Collision){

	if(collision.gameObject.tag == "Bullet"){
		respaw.MaxEnemyCounter = respaw.MaxEnemyCounter -1;
		Helicopter.score = Helicopter.score+200;
		Helicopter.PlayersLife = Helicopter.PlayersLife+100;
		enemiesKilled = (Helicopter.score)/200;
		Destroy(gameObject);
		}
	
	if (collision.transform.tag == "Wall"){

		Destroy(gameObject);
	
	}
	
	if (collision.transform.tag == "GamePlayer"){

		respaw.MaxEnemyCounter = respaw.MaxEnemyCounter -1;
		Destroy(gameObject);
		
	}
	
}