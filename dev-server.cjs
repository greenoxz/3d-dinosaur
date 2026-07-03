const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 4173);
const root = process.cwd();

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
};

http
  .createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const file = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
    const target = path.resolve(root, file);

    if (!target.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(target, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "Content-Type": types[path.extname(target)] || "application/octet-stream",
      });
      response.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`3D Dino Run: http://127.0.0.1:${port}/`);
  });
