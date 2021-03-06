let api;
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  // 生产环境api接口地址
  api = {
    apiURL: "/",
    publicPath: "/",
    apiPath: "/",
    staticPath: "/"
  };
} else if (process.env.NODE_ENV === "development") {
  // 开发环境
  api = {
    apiURL: "/",
    publicPath: "/",
    apiPath: "http://192.168.1.150:3006/api",
    staticPath: "/"
  };
}

const config = {
  api: api,
  publicPath: api.publicPath,
  staticPath: api.staticPath,
  apiPath: api.apiPath
};

export default config;
