const Controller = require('egg').Controller

class VodController extends Controller {
  async createUploadVideo () {
    const query = this.ctx.query
    console.log(6, query)
    this.ctx.validate(
      {
        Title: { type: 'string' },
        FileName: { type: 'string' }
      },
      query
    )

    this.ctx.body = await this.app.vodClient.request('CreateUploadVideo', query, {})
  }

  async refreshUploadVideo () {
    const query = this.ctx.query
    this.ctx.validate(
      {
        VideoId: { type: 'string' }
      },
      query
    )

    this.ctx.body = await this.app.vodClient.request('RefreshUploadVideo', query, {})
  }

  async GetPlayInfo () {
    const query = this.ctx.params
    console.log(32, query)
    this.ctx.validate(
      {
        VideoId: { type: 'string' }
      },
      query
    )

    this.ctx.body = await this.app.vodClient.request('GetPlayInfo', query, {})
  }
}

module.exports = VodController
