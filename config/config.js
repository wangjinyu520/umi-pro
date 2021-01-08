export default {
  routes: [
    {
      path: "/login",
      component: "./login.js",
    },
    {
      path: "/",
      component: "../layouts/index.js", //放置是项目的框架，作为所有路由的子路由
      routes: [
        {
          path: "/",
          exact: true,
          component: "./index.js", //
        },
        {
          path: "/home",
          component: "./home.js", //component里面的路径是相对于pages里面的
        },
        {
          path: "/about",
          component: "./about.js", //component里面的路径是相对于pages里面的
          Routes: ["./routes/PrivateRoute.js"], // Routes里面的路径是相对于根目录的，文件名的后缀不能少
        },
        {
          path: "/users",
          component: "./users.js",
        },
        {
          component: "./nullPage.js", //404页面里外都需要配置
        },
      ],
    },
    {
      component: "./nullPage.js", //404页面里外都需要配置
    },
  ],
  antd: {},
  dva: {},
  //引入antd
};
