# python-script-server
##This project is a nodejs server that allows you to execute python scripts remotely.

This project uses nodejs:
Nodejs is a javascript based server framework that is cross-platform.
Nodejs comes with its own package manager -- npm (node package manager).

Install node:
    sudo apt-get install nodejs


#Setup
On the pi (server) create a folder that will house the code.

```	
mkdir PythonScriptServer
cd PythonScriptServer
git clone https://github.com/dks-project-repository/python-script-server
npm install
node app.js
```

At this point the server running and is accessible at port 3000.
You can verify this by going to http://localhost:3000/ on the browser.
To verify success of this you can also visit http://<ipAddress>:3000/ on another device connected to the same network.
	
On Laptop (client):
	Update the SampleHttp.py to have a correct base url.
	The BASEURL variable of the python code uses "localhost" (127.0.0.1) as the hostname. 
	When the pi is hooked up to wifi or ethernet you need to determine the ip address
	Run the sample 
