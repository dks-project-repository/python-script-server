# python-script-server
### This project is a NodeJS server that allows you to execute python scripts remotely.

## Installing NodeJS:
This project uses nodejs:
Nodejs is a javascript based server framework that is cross-platform.
Nodejs comes with its own package manager -- npm (node package manager).

To install nodejs run the following:
```
sudo apt-get install nodejs
```

## Setup
* Clone this Git repository folder to the server (pi - maybe on the desktop?).
* Install additional required js libraries with npm.
* Launch the server.

```	
git clone https://github.com/dks-project-repository/python-script-server
cd python-script-server
npm install
node app.js
```

Running ```node app.js``` launches launches the server on port 3000 in the terminal window.
You can verify this by going to http://localhost:3000/ on the browser or http://&lt;ipaddress&gt;:3000/ from any device on the same network.

Once the server is running calls can be made to various scripts in the 'python-script-server/scripts' folder.
Here is a python example:

```python
"client-side code for calling pi to control motors"
import urllib
import atexit

BASEURL = "http://localhost:3000/python/"

def turnoffmotors():
    "turns off motors"
    urllib.urlopen(BASEURL + "InitMotor.py").read()

atexit.register(turnoffmotors)

#initialize motors:
urllib.urlopen(BASEURL + "InitMotor.py").read()

#run motors:
for i in range(100):
    result = urllib.urlopen(BASEURL + "RunMotor.py").read()

#shutdown motors:
urllib.urlopen(BASEURL + "ShutdownMotor.py").read()
```
