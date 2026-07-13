# Velorah

> 在寂静中，梦想悄然升起。

Velorah 是一个为设计工作室打造的电影级品牌展示网站，致力于为深度思考者、大胆创造者和安静的反叛者设计工具。基于 React、TypeScript、Tailwind CSS v4 和 Framer Motion 构建。

![Hero Section](https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=630&fit=crop)
*备用图片：替换为首页全屏 Hero 截图*

---

## 技术栈

| 层级 | 技术 |
|-------|-----------|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 8 |
| 样式 | Tailwind CSS v4 |
| 动画 | Framer Motion 12 |
| 路由 | React Router DOM v7 |
| SEO | react-helmet-async |
| 国际化 | 自定义 React Context (EN / 中文) |

---

## 页面

| 路由 | 页面 | 描述 |
|-------|------|-------------|
| `/` | 首页 | 全屏视频 Hero + 品牌故事 + 特色亮点 + 精选作品 |
| `/studio` | 作品 | 带分类筛选的项目网格展示 |
| `/about` | 关于 | 品牌叙事 + 团队成员卡片 |
| `/journal` | 日志 | 文章列表（标签、日期） |
| `/journal/:slug` | 文章详情 | 富文本全文展示 |
| `/reach-us` | 联系 | 联系表单 + 地址 + 社交链接 |

---

## 功能特性

### 电影级 Hero

![Hero](https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=800&h=400&fit=crop)
*备用图片：替换为 Hero 区域截图*

- 全屏循环视频背景（autoPlay, loop, muted, playsInline）
- 标题渐入动画（staggered fade-up）
- 液态玻璃 CTA 按钮（渐变边框效果）

### 液态玻璃 UI（Liquid Glass）

应用于按钮和交互元素的定制 CSS 效果：

- `backdrop-filter: blur(4px)` 半透明背景
- 通过 `mask-composite: exclude` 伪元素实现的渐变边框
- 内嵌阴影增加层次感

### 中英文双语支持

导航栏的切换按钮可一键切换全站内容语言，包括：

- 导航标签和 CTA 按钮
- 所有页面内容（首页、作品、关于、日志、联系）
- 文章正文（每语言 6 篇完整文章）
- 页脚和元数据

### 作品网格

![Studio Grid](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop)
*备用图片：替换为 Studio 页面截图*

- 按分类筛选（全部 / 工具 / 体验 / 装置 / 界面）
- 切换筛选时带有 `AnimatePresence` 布局动画
- 图片上叠加渐变遮罩确保文字可读

### 滚动触发动画

页面区块和卡片在滚动时通过 Framer Motion 的 `whileInView` 渐入，支持错开延迟。

### 页面切换过渡

路由切换时通过 `AnimatePresence mode="wait"` 实现淡入淡出过渡。

### SEO

每个页面通过 react-helmet-async 设置独立的 `<title>` 和 `<meta description>`，包含 Open Graph 标签。

### 日志详情页

![Journal](https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop)
*备用图片：替换为 Journal 页面截图*

- 每语言 6 篇文章，包含完整正文
- 富文本支持（粗体引导语、有序列表、段落）
- 标签筛选和日期格式化

### 联系表单（Formspree 就绪）

表单提交已集成 Formspree — 替换 `src/pages/ReachUs.tsx` 中的 endpoint ID 即可启用。

---

## 色彩主题

```
--background: 201 100% 13%   (深海军蓝)
--foreground: 0 0% 100%      (白色)
--muted-foreground: 240 4% 66%
--border: 0 0% 18%
```

## 字体

- **展示字体:** Instrument Serif (Google Fonts) — 用于标题
- **正文字体:** Inter (Google Fonts) — 字重 400 / 500

---

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview
```

---

## 项目结构

```
src/
├── components/
│   ├── Footer.tsx               # 页脚（导航 + 社交 + 联系方式）
│   ├── GradientPlaceholder.tsx   # 确定性渐变背景工具
│   ├── Layout.tsx                # 根布局
│   ├── Navbar.tsx                # 导航栏 + 语言切换
│   ├── Reveal.tsx                # 滚动触发动画包装器
│   └── SEO.tsx                   # Helmet 元标签组件
├── i18n/
│   ├── context.tsx               # 语言提供者 + useLanguage hook
│   ├── en.ts                     # 英文翻译
│   └── zh.ts                     # 中文翻译
├── pages/
│   ├── Home.tsx                  # Hero + 品牌故事 + 特色 + 作品
│   ├── Studio.tsx                # 可筛选项目网格
│   ├── About.tsx                 # 品牌故事 + 团队
│   ├── Journal.tsx               # 文章列表
│   ├── JournalDetail.tsx         # 文章详情页
│   └── ReachUs.tsx               # 联系表单 + 信息
├── App.tsx                       # 路由 + 提供者
├── index.css                     # Tailwind + 自定义样式 + 关键帧
└── main.tsx                      # 入口文件
```

---

## 截图展示

![Home Page](https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&h=630&fit=crop)
*备用图片：替换为完整首页截图*

![Studio Grid](https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&h=630&fit=crop)
*备用图片：替换为 Studio 作品网格截图*

![About Page](https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=630&fit=crop)
*备用图片：替换为 About 页面截图*

![Journal Page](https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=630&fit=crop)
*备用图片：替换为 Journal 页面截图*

![Reach Us Page](https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=630&fit=crop)
*备用图片：替换为 Reach Us 页面截图*

---

## 部署

```bash
npm run build
# 将 dist/ 目录部署到任意静态托管服务 (Vercel, Netlify, Cloudflare Pages 等)
```

## 许可证

MIT
