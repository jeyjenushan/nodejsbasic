

const fs=require("fs")

const handling=(req,res)=>{


const url=req.url
const method=req.method
if( url === "/"){
    res.setHeader("content-type","text/html")
    res.write("<html>")
    res.write("<head><title>MYNODEJS</title></head>")
    res.write("<body><form action = '/message' method = 'POST'><input type='text' name='message'><input type='submit' value='submit'></form></body>")
    res.write("<html>")
    return res.end()
}
if(url === "/message" && method === "POST"){
     const body=[]
     req.on('data',(chunk)=>{
        body.push(chunk)
     })
     return req.on('end',()=>{
        const parserbody=Buffer.concat(body).toString()
        const message=parserbody.split("=")
        fs.writeFile("helloworld.txt",message[1],(err)=>{
            res.setHeader("Location","/")
           res.statusCode=302
          return res.end()
        
        })})}}

module.exports={
    handling:handling
}