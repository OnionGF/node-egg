const Controller = require('egg').Controller
// const OSS = require('ali-oss')
// const path = require("path")
// const headers = {
//   // 指定Object的存储类型。
//   'x-oss-storage-class': 'Standard',
//   // 指定Object的访问权限。
//   'x-oss-object-acl': 'private',
//   // 设置Object的标签，可同时设置多个标签。
//   'x-oss-tagging': 'Tag1=1&Tag2=2',
//   // 指定PutObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
//   'x-oss-forbid-overwrite': 'true',
// };

class VodController extends Controller {
  async createUploadVideo () {
    const query = this.ctx.query
    const { Base64 } = this.ctx.helper;
    this.ctx.validate(
      {
        Title: { type: 'string' },
        FileName: { type: 'string' },
      },
      query
    )
    try {
      const res = await this.app.vodClient.request('CreateUploadVideo', query, {})
      const { UploadAddress, UploadAuth } = res;
      // const add = Base64.decode(UploadAddress);
      // const auth = Base64.decode(UploadAuth);
      // const { Region, AccessKeyId, AccessKeySecret } = add;
      // const { Endpoint, Bucket, FileName } = auth;
      // const client = new OSS({
      //   // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
      //   region: Region,
      //   // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
      //   accessKeyId: AccessKeyId,
      //   accessKeySecret: AccessKeySecret,
      //   // 填写Bucket名称。
      //   bucket: Bucket,
      // });
      // // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
      // // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
      // const result = await client.put('exampleobject.txt', path.normalize('D:\\localpath\\examplefile.txt')
      // // 自定义headers
      // ,{headers}
      // );
      // console.log(1111,result)

      this.ctx.body = {
        UploadAddress,
        UploadAuth
      }
    } catch (e) {
      console.log(e);
    }
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

  async uplodaVideo () {
    const body = this.ctx.request.body
    console.log(32, body)
    this.ctx.validate(
      {
        SourceURL: { type: 'string' },
        Title: { type: 'string' }
      },
      body
    )

    this.ctx.body = await this.app.vodClient.request('UploadMediaByURL ', query, {})
  }

}

module.exports = VodController
