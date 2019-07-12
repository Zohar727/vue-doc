## 介绍
### 如何编写你的组件说明
***
- 在`document/pages`文件夹下新增你的组件说明`markdown`文档
- 在`document/router`文件夹下配置该文档路由
```javascript
  {
    path: '/introduction',
    name: 'introduction',
    component: introduction
  }
```
- 在`document/App.vue`文件里配置左侧菜单栏

### 项目结构介绍
***
```javascript
├─document  // 文档目录
│  │  App.vue //主页文件
│  │  main.js //文档项目入口文件
│  │
│  ├─pages // 文档书写markdown文件夹
│  │
│  ├─compoents // 文档平台用到的组件
│  ├─style // 文档相关样式文件夹
│  └─router
│          index.js //路由配置文件
│
├─example // 组件demo文件夹 引用组件生成的demo页面写在这里，demo页面路由须与document对应组件文档路由相同，这样在文档页面预览框中可以直接显示demo组件页面
│  │  App.vue 
│  │  main.js //demo项目入口文件
│  │
│  ├─pages // demo写在这里
│  └─router
│          index.js //路由配置文件
│ 
├─src // 用于编写存放组件 
│  │  index.js  //组件集成统一访问文件配置
│  │
│  ├─components  //组件文件夹
│

```

### 多入口配置
***
> 升级`vue-cli3`后，vue项目配置多入口要简单方便多了，直接在`vue.config.js`使用vue-cli3提供的API配置即可

#### `vue.config.js`配置多入口
```javascript
// 多入口配置
let page = {
  // 入口A
  index: {
    entry: 'document/main.js',
    template: 'public/index.html',
    filename: 'index.html',
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  },
  // 入口B
  example: {
    entry: 'example/main.js',
    template: 'public/example.html',
    filename: 'example.html',
    chunks: ['chunk-vendors', 'chunk-common', 'example']    
  }
}
module.exports = {
  pages: page
}
```