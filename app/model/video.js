module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const videoSchema = new Schema({
    title: { // 视频标题
      type: String,
      required: true
    },
    description: { // 视频介绍
      type: String,
      required: true
    },
    url: { // VOD 视频 地址
      type: String,
      required: true
    },
    thumbnail: { // 视频封面1
      type: String,
      required: true
    },
    user: {
      type: mongoose.ObjectId, // 视频作者
      required: true,
      ref: 'User'
    },
    commentsCount: { // 评论数量
      type: Number,
      default: 0
    },
    dislikesCount: { // 不喜欢数量
      type: Number,
      default: 0
    },
    likesCount: { // 喜欢数量
      type: Number,
      default: 0
    },
    viewsCount: { // 观看次数
      type: Number,
      default: 0
    },
    createdAt: { // 创建时间
      type: Date,
      default: Date.now
    },
    updatedAt: { // 更新时间
      type: Date,
      default: Date.now
    }
  })

  return mongoose.model('Video', videoSchema)
}
