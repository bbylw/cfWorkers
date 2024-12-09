# Particle Text Effect Worker

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

一个基于 Cloudflare Workers 的交互式粒子文字效果项目。通过简单的部署，即可创建炫酷的粒子动画效果，支持多设备自适应和用户交互。

[在线演示](https://pbs.pyhjs.ggff.net/) | 

## ✨ 特性

- 🎨 炫酷的粒子动画效果
- 📱 完美支持移动端和桌面端
- 🔄 实时交互响应
- 🌈 多种颜色主题切换
- 🌍 多语言文字展示
- 📐 自适应屏幕尺寸
- 🚀 基于 Cloudflare Workers，部署简单




## 🛠️ 技术栈

- Cloudflare Workers
- HTML5 Canvas
- JavaScript
- CSS3


## 🔨 使用方法

### 基础使用

直接访问部署后的 Worker URL 即可看到效果。

### 交互方式

- 鼠标移动：粒子会随鼠标位置产生互动效果
- 触摸屏幕：在移动设备上可通过触摸进行互动
- 点击"更换文字"：切换不同语言的问候语
- 点击"更换颜色"：切换粒子颜色主题

### 自定义配置

你可以通过修改以下参数来自定义效果：

// 自定义显示文字

## 📝 配置说明

### 环境要求

- Node.js 14.0+
- Wrangler CLI
- Cloudflare 账户

### 配置选项

| 参数 | 说明 | 默认值 |
|------|------|--------|
| size | 粒子大小 | 2 |
| maxDistance | 交互距离 | 100 |
| density | 粒子密度 | 1-30 |

## 🤝 贡献指南

欢迎提交 Pull Request 或 Issue！

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 开源协议

本项目基于 MIT 协议开源，详见 [LICENSE](LICENSE) 文件。



## 🙏 致谢

- 感谢 Cloudflare Workers 提供的服务支持
- 感谢所有贡献者的付出



---

如果觉得这个项目对你有帮助，欢迎给一个 ⭐️ Star！
