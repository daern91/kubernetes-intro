const http = require("http");

const cpuIntensiveCalculation = baseNumber => {
  console.time("cpuIntensiveCalculation");
  let result = 0;
  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  console.log("result", result);
  console.time("cpuIntensiveCalculation");
};

const handleRequest = function(request, response) {
  response.writeHead(200);
  const { url } = request;
  if (url === "/crash") {
    throw Error("Server crashed!");
  } else if (url === "/health") {
    response.end("Healthy");
  } else {
    cpuIntensiveCalculation(10);
    response.end("Hi there!");
  }
};

const server = http.createServer(handleRequest);
server.listen(process.env.PORT || 8080);
