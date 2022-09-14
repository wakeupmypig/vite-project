const express = require("express")
const app = express()

app.post("/login", function (req, res) {
  res.send({
    code: 0,
    data: { username: "zf", token: "server token" }
  })
})

app.listen(3000)
// 反向代理 对于用户是无感的
