### gulp 和 gulp-webpack

#### 主要作用:
* 合理的减少每个页面的http请求数量
* 压缩js css html 让请求更快
* 模块化的代码 让逻辑更加清晰

#### 主要功能:
* 合并多个js，css 为1个css
* 添加md5 合理利用前端缓存和避免上线更新代码有缓存
* 添加gulp-file-include 分离代码块
* 压缩代码
* 可以用less sass 等css预处理器

#### 备注:
> 这个主要用于中小型项目的代码压缩，和模块化。很多不足之处