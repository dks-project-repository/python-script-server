/**************/
/***INCLUDES***/
/**************/
    var express = require('express');
    var PythonShell = require('python-shell');

/****************************************/
/*******FUNCTION TO DO PYTHON STUFF******/
/****************************************/  
    var runScript = (scriptName) => {
        //EXECUTE PYTHON SCRIPT TO INIT MOTORS:
        PythonShell.run(scriptName, (err,results) => {
            if(err){ 
                throw err;
            } else{
                console.log(results);
            }
        });
        console.log('Motor initialized');
    };

/*****************************************************/
/*****FUNCTIONS THAT EXECUTE ON SERVER REQUESTS:******/
/*****************************************************/
    //function that executes on startup of the server
    var serverStart = () => { 
        console.log('Server started on port 3000')
    };

    //function that executes when a GET request is made to 'http://localhost:3000/
    var rootGet = (req, res) => { 
        res.send('Server Works!'); 
    };

    //function that executes when a GET request is made to 'http://localhost:3000/python/<SOMESCRIPTNAME>
    var pythonGet = (req, res) => {
        try{
            runScript('scripts/' + req.params.scriptName)
            res.send('Executing script ./scripts/' + req.params.scriptName);
        } catch (error) {
            res.err(error);
        }

    };

/******************************************************/
/*****START EXPRESS SERVER WITH SPECFIED ROUTES********/
/******************************************************/
    var app = express();
    app.get('/', rootGet);
    app.get('/python/:scriptName', pythonGet);
    app.listen(3000, serverStart);

/**************************/
/*****EXIT HANDLING********/
/**************************/
    //
    var exitHandler = (options, err) => {
        if (options.cleanup) runScript('./scripts/ShutdownMotor.py');
        if (err) console.log(err.stack);
        if (options.exit) process.exit();
    };

    //do something when app is closing
    process.on('exit', exitHandler.bind(null,{cleanup:true}));

    //catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(null, {exit:true}));

    //catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

