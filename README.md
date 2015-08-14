# Traffic Simulation
The implementation of traffic simulation exercise task, made with webpack, react and redux (flux)

## Install
```
git clone git@github.com:bonbonez/traffic-simulation.git
cd ./traffic-simulation
```

## Run with dev server
It is very simple, `npm start` command will do all the job
```
npm start
```
By default, web server is listening localhost at 8080 port (http://localhost:8080).
It can be changed by editing `/webpack/host.js` file

## Run without web server, as simple .html file
```
npm run build
open ./index.html
```

P.S. Yes, it is a total overkill for traffic simulation app, but now it can be scaled to GoogleMaps size!

## What is not included
For the speed purposes, I decided not spend time on this features
* mobile version
* covering with tests
