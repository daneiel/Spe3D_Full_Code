#pragma strict

var cameraMouse: Camera;
var RotationSpeedBody: float;
var RotationSpeedBody2: float;

var rCam: float;

function Start () {

}

function Update () {

	rCam = transform.rotation.eulerAngles.x;

	RotationSpeedBody = 45;
	
	RotationSpeedBody = Input.GetAxis("Mouse X")*(RotationSpeedBody)*(Time.deltaTime);

	transform.Rotate(0,RotationSpeedBody,0);

	/*RotationSpeedBody2 = 45;

	RotationSpeedBody2 = Input.GetAxis("Mouse Y")*(RotationSpeedBody2)*(Time.deltaTime);

	if(rCam>=200){
		rCam = rCam - 360;
	}
	
	if ((rCam<45) && (rCam>-45)){

		transform.Rotate(-RotationSpeedBody2,0,0);

	}else{
			
		if (rCam>45){
			if(-RotationSpeedBody2<0){
				transform.Rotate(-RotationSpeedBody2,0,0);
			}
		}
			
		if (rCam<-45){
			if(-RotationSpeedBody2<0){
				transform.Rotate(-RotationSpeedBody2,0,0);
			}
		}
	}*/	
	
}