# 致晓 · 相识一周年

一座月下樱花小世界，落款：榕。

仓库根目录为可直接发布的静态文件。本地完整 Vite 项目另存为 `source.zip`，解压后即可修改与重新构建。

## 本地预览

```sh
npm install
npm run dev
```

生产构建：`npm run build`，产物位于 `dist/`。构建后可运行 `npm run preview` 检查。

## 修改内容

- `src/content.ts`：称呼、标题、章节文字、信件和落款。
- `src/gallery-data.ts`：照片、游戏截图、替代文字和说明。
- `src/style.css`：排版、配色、移动端构图。
- `src/scene.ts`：月下湖畔的插画场景、水波、花瓣和性能降级。
- `src/star-sky.ts`：章节间的旷远星空与银河。
- `src/ambient-particles.ts`：月下星辰、流星和暖金色萤光。
- `src/music.ts`：背景音乐、曲目信息与播放音量。

图片均位于 `public/images/`，保留原始比例。若要重新处理桌面 `xiao_imgs` 中的素材，运行 `npm run prepare:assets`；也可给脚本传入素材目录参数。网站不会自动读取访客的本地文件。

页面使用全部20张赠礼素材：6张真实风景、7张插画与诗页、7张共同游戏相关画面。每张都能在页面浏览并点击放大。

## 字体

网站自托管 Noto Serif SC 与 Noto Sans SC 的正文字符子集。SIL Open Font License 随字体置于 `public/fonts/`。修改文案后，若需要加入新汉字，可重新制作字体子集；系统中文字体会作为缺字后备。

`scripts/subset-fonts.py` 使用 fontTools 与 brotli。应在独立 Python 环境安装它们。将 Google Fonts 官方的完整 `NotoSerifSC.ttf`、`NotoSansSC.ttf` 放入 `.tools/font-sources/`，再使用该环境的解释器运行脚本。源字体地址：

- https://github.com/google/fonts/tree/main/ofl/notoserifsc
- https://github.com/google/fonts/tree/main/ofl/notosanssc

## 交互与兼容

打开页面时尝试自动播放背景音乐。若浏览器限制有声自动播放，首次轻触页面或按键后开始；右下角按钮可随时暂停或继续。普通滚动阅读，点击照片查看大图，左右方向键或手机滑动切换，Escape 关闭；信封按钮展开信件。轻触湖面会产生涟漪。

背景音乐为 MONACA《きっと彼女は_（她一定是。）》的纯音乐版。音频随站点自托管于 `public/audio/`，提供 AAC 与原始 Ogg 两种格式；播放时轻柔渐入，暂停后保留播放位置。

星空有缓慢闪烁与漂移的光点，偶尔有流星划过。装饰画布不拦截操作，非可见时停止动画，手机减少粒子数量，系统减少动态模式保留静态星空。

支持系统“减少动态效果”设置；较弱设备降低像素密度与动态数量，WebGL 不可用时使用同一幅静态插画。图片查看器和信件可使用键盘。

## 发布

部署目标为 GitHub Pages：`https://aurora1218-ai.github.io/`。发布目录使用构建后的静态文件，包含 `.nojekyll`。个人聊天原文、聊天分析、原始素材目录和工具环境均不属于发布内容。

`npm run prepare:publish` 额外生成 `.publish/`，将生产资源平铺并同步改写站内路径，便于从已登录的浏览器一次上传至仓库根目录。源项目保留在本地；字体许可证随站点发布。
