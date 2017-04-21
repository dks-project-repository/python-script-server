# python-script-server
### This project is a nodejs server that allows you to execute python scripts remotely.

NOTE:


## Installing NodeJS:
This project uses nodejs:
Nodejs is a javascript based server framework that is cross-platform.
Nodejs comes with its own package manager -- npm (node package manager).

To install nodejs run the following:
```
    sudo apt-get install nodejs
```

## Setup
On the pi (server) create a folder that will house the code.
Clone this Git repository to the folder.
Install additional required js libraries with npm.
Launch the server.

```	
mkdir PythonScriptServer
cd PythonScriptServer
git clone https://github.com/dks-project-repository/python-script-server
npm install
node app.js
```

Running ```node app.js``` launches launches the server on port 3000 in the terminal window.
You can verify this by going to http://localhost:3000/ on the browser or http://<ipAddress>:3000/ from any device on the same network.

	
On Laptop (client):
	Update the SampleHttp.py to have a correct base url.
	The BASEURL variable of the python code uses "localhost" (127.0.0.1) as the hostname. 
	When the pi is hooked up to wifi or ethernet you need to determine the ip address
	Run the sample 
