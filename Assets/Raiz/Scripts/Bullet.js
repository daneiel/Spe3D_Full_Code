#pragma strict

var BulletSpeed: float;
var impact: GameObject;

//var target: AudioClip;

function Start () {

}

function Update () {

	BulletSpeed = 700*Time.deltaTime;
	transform.Translate(0,0,BulletSpeed);
	GetComponent.<Renderer>().material.color = Color.yellow;

}


function OnCollisionEnter (collision: Collision){

	if (collision.transform.tag == "Enemy"){

		Instantiate(impact,transform.position,transform.rotation);
		//audio.clip = target;
		//audio.Play();
		Destroy(gameObject);
	
	}
	
	if (collision.transform.tag == "Wall"){

		Destroy(gameObject);
	
	}
	
}