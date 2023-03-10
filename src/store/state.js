const defaultAvatar = require('@/assets/image/default-avatar.jpg')

// 根级别的 state
const state = {
  socketStatus: false,
  // 头像加载失败后的默认头像
  defaultAvatar: "this.src='" + defaultAvatar + "'",
}

export default state
