#pragma strict

var target: AudioClip;

function Start () {

}

function Update () {

}

function OnCollisionEnter (collision: Collision){

	if(collision.gameObject.tag == "GamePlayer"){
		Gun.bulletCounter = Gun.bulletCounter+100;
		Destroy(gameObject);
		
		GetComponent.<AudioSource>().clip = target;
		GetComponent.<AudioSource>().Play();		
		
	}
}