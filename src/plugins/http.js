//插件模板
import axios from 'axios'

const myHttpServer = {};
myHttpServer.install = (Vue) => {
    //接口的基准地址
    axios.defaults.baseURL = 'http://localhost:8080/api/private/v1/'
        // 4. 添加实例方法
    Vue.prototype.$http = axios
}
export default myHttpServer;