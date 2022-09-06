const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    this.ctx.body = '你好, egg 自动部署成功'
  }
}

module.exports = HomeController
