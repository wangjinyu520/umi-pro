export default {
  // mock就是模拟前端的接口数据，实现前端自己模拟接口
  "post /api/login": (req, res) => {
    const { username, password } = req.body;
    if (username == "admin" && password == "123") {
      return res.json({
        code: 0,
        data: {
          token: "xvxvxcvcb",
          role: "admin",
          balance: 1000,
          username: "admin",
        },
      });
    }
    if (username == "tcyy" && password == "123") {
      return res.json({
        code: 0,
        data: {
          token: "tttcccyyy",
          role: "admin",
          balance: 1000,
          username: "tcyy",
        },
      });
    }
    return res.json({ code: -1, msg: "登录失败" });
  },
};
