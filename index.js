const express = require("express");
let author = process.argv[2];
let port = process.argv[3];
port = port ? port : 3000;

const app = express();
app.get("/", (req, resp)=>{
    resp.write("Hello world of Express JS Framework!\n");
    resp.end(`Author: ${author}`);
    console.log("get");
})

app.listen(port, ()=>{
    console.log(`Server starts at port ${port}`);
})