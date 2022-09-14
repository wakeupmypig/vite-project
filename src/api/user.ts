import http from "@/utils/http"

// 封装接口路径
const enum USERAPI_LIST {
  login = "/login" // 请求路径
}

// 封装用户的信息
export interface IUserData {
  username: string
  password: string
}

// 后续方法可以继续扩展  用户调用的jiekou
export async function login<T>(data: IUserData) {
  return http.post<T>(USERAPI_LIST.login, data)
}
