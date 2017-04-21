# python-script-server
This project is a Nodejs server that allows you to execute python scripts remotely.

Nodejs is a javascript based server framework that is cross-platform.
It also comes with its own package manager -- npm (node package manager).

Install node:
    sudo apt-get install nodejs


Setup is as follows:
•On the pi (server) create a folder that will house the code.
•cd into the new folder in a terminal window
    git clone https://github.com/dks-project-repository/python-script-server
    npm install
    node app.js
    



	• Make a directory that will house the node server code as well as the python scripts for controlling the motor.
	• In a terminal window cd into the folder that was just created.
	• Run the following command which will download the code I wrote:
	    git clone https://github.com/dks-project-repository/python-script-server
    • Run the following command which will download some further dependencies of this application.
		npm install
	• to launch the server run the following command will launch the server on TCP port 3000 on the Pi.
		node app.js
	• At this point the server running on the Pi is accessible at port 3000.
	• You can verify this by going to http://localhost:3000/ on the browser on the pi.
	• To verify success of this you can also visit http://<ipAddressOfPi>:3000/ on the laptop connected to the same network.
	
On Laptop (client):
	•Update the SampleHttp.py to have a correct base url.
	 The BASEURL variable of the python code uses "localhost" (127.0.0.1) as the hostname. 
	 When the pi is hooked up to wifi or ethernet you need to determine the ip address
•Run the sample 
