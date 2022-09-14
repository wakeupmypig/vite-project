// 用来mock数据的

export default [
  {
    url: "/api/login",
    method: "post",
    response: (res) => {
      // express
      return {
        code: 0, // code 0 成功  code 1失败
        data: {
          token: "Bearer Token ",
          username: res.body.username
        }
      }
    }
  }
]
