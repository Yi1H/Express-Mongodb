# Express-Mongodb
Express对MongoDB的增删改查等，实现网站的基础功能
导入package.json安装相应依赖
安装好Express后，采用全局安装express的目录生成器：install express-generator -g
Express目录结构为：
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
本项目运用的模板为ejs
需要启动MongoDB服务，开启服务后可以在浏览器输入http://localhost:27017/进行访问
连接数据库在./routes/index.js中mongoose.connect("mongodb://localhost/express_demo");
数据库结构具体在./models/model.js文件中。
可根据具体情况进行修改。
本项目根据实验书和网上资料进行编写。
