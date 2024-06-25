//node js basic revision last :

const http=require("http")
const routes=require("./route")

const server=http.createServer(routes.handling)
server.listen(3000)