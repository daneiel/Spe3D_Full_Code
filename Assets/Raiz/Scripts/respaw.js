#pragma strict

static var MaxEnemyCounter : int;
var inimigo : GameObject;
var posicaoInimigo : Vector3;
var tempo : float;

function Start () {

	MaxEnemyCounter = 0;
	tempo = 0;

}

function Update () {

tempo = tempo + 1*Time.deltaTime;

    if((tempo>2)){
    
	    if (Random.value>0.5){
	    
		    posicaoInimigo.x = Helicopter.PlayersPosition.x + (Random.value*10) +200; //+10 because we dont want (by any chance) the enemy "starting" above the player
		
		}else{
		
			posicaoInimigo.x = Helicopter.PlayersPosition.x - (Random.value*10) -50;    
		}
		
		if (Random.value>0.5){
	    
		    posicaoInimigo.y = Helicopter.PlayersPosition.y + (Random.value*10) +50; //+10 because we dont want (by any chance) the enemy "starting" above the player
		
		}else{
		
			posicaoInimigo.y = Helicopter.PlayersPosition.y - (Random.value*10) -50;    
		}
		            
		    posicaoInimigo.z = Helicopter.PlayersPosition.z + (Random.value*10) +50;
		    posicaoInimigo.y = 17;//688744;
		    
		    Instantiate(inimigo,posicaoInimigo,transform.rotation);
		    MaxEnemyCounter =  MaxEnemyCounter + 1;
		    
		    tempo = 0;

    }

}