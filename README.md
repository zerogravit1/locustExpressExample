# Self-Contained Locust.io Example

Locust.io is load testing tool built with python and a web based client.
See http://locust.io/ for more information.

Python 2.7.x is required and should installed on the system prior to using Locust.
https://www.python.org/downloads/

Locust may require the python dev tools in Linux.
```
install python-devel
```

The local server uses Express, so NodeJS needs to be install. This repo was developed using v4.4.5, however any version that supports Express should be adequate. See https://nodejs.org/en/ for information on how to install for your environment.

---
Install Locust.io
```
pip install locustio
```

Run to install express
```
npm install
```

To launch the Express server run command. The server will listen on port 1337.
```
npm start
```

To start Locust use a separate terminal window and run:
```
locust -f baseLocustTest.py
```
Once Locust.io is running, open a browser and navigate to localhost:8089

## End Point
/locust-test

### METHODS
  GET  
  POST  
  PUT  
  DELETE
