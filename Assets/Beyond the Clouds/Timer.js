private var t : int;

function Start () {
	Screen.showCursor = false;
	Screen.lockCursor = true;
}

function Update () {
	
	t = Time.time - 6;
	if(Input.GetKeyDown(KeyCode.Escape)) Application.Quit();
	
}

function OnGUI () {
	GUI.Label(Rect(Screen.width - 100, 20, 100, 100),"Time Spent: "+ t);
	if (t < 10) {
		GUI.Label(Rect(20, 20, 300, 100),"Now Playing: Peer Gynt Suite");
		GUI.Label(Rect(20, Screen.height - 40, 300, 100),"http://inpla.net/thread-4980-1-1.html");
		}
	if (transform.position.y > 1200) GUI.Label(Rect(Screen.width/2 - 100,Screen.height/2 - 100, 200, 200),"Beyond the cloud, there is nothing else under the sky. \nAnd where is the cloud? \nIn your dream.");
	if (transform.position.y < -120) GUI.Label(Rect(Screen.width/2 - 100,Screen.height/2 - 100, 200, 200),"Under the very world, your dream will come true in your dream.");
	if (transform.position.y < -12000) GUI.Label(Rect(Screen.width/2 - 100,Screen.height/2 - 100, 200, 200),"Gosh, are you still playing this game? Nothing else will happen after this!");
}