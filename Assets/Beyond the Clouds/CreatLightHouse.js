var LHM : Transform;

private var number : int = 0;

function Start () {

	transform.position.y = 0;

}

function Update () {

	if (number<100) {
		number ++;   
		Instantiate(LHM, transform.position, transform.rotation);
		transform.position.y += 12;
	}
	
}