const http = require("http");
const app = require("./app");
const { PORT } = require("./configs/app.config");
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
