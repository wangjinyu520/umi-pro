// 跟服务器接口操作的都放在models里
import { history } from "umi";
// import axios from "../../mock/user.js";
const userInfo = localStorage.getItem("userInfo") || {
  token: "",
  role: "",
  username: "",
  balance: 0,
};
function loginFun(payload) {
  return axios.post("/api/login", payload);
}
export default {
  namespace: "user",
  state: userInfo,
  // 于处理异步操作和业务逻辑,不直接修改 state,相当于vue的action
  effects: {
    *login({ payload }, { call, put }) {
      const res = yield call(loginFun, payload); //call用于调用请求数据接口函数
      console.log(res);
      if (res.code == 0) {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        yield put({ type: "init", payload: { userInfo: res.data } }); //执行reducer是，同vue的commit存储数据
        history.push("/");
      }
    },
  },
  // 相当于vue的mutation
  reducers: {
    init(state, action) {
      return action.payload;
    },
  },
};
