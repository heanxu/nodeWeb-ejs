/**
 * Created by heanhsu on 16/4/26.
 */
'use strict';

const _ = require('underscore');
const moment = require('moment');

exports.getHome = (req, res)=> {
  let time = {
    m: moment().format('MMMM'),
    d: moment().format('DD')
  }
    res.render('home', {time: time});
};

exports.getEssay = (req, res)=> {
  let essay_1 = {
    title: "你可能不知道的 Node.js",
    author: "佫侒",
    content: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一篇文章，致敬 Node.js 开发者。<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一：console.error() 方法。
               console.error() 方法用于进行标准错误流输出，在默认情况下，标准错误输出流将
              向控制台中输出一行错误信息。
              但一般这种信息存于控制台中很容易丢失，我们可以将它重定向输出到文件中。
              重定向只需要在启动服务时在启动命令后加 “2>error.log”，2 代表错误重定向标准错误
              输出流。
              此时只要...<br>`,
    content_all:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一篇文章，致敬 Node.js 开发者。<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一：console.error() 方法。
                  console.error() 方法用于进行标准错误流输出，在默认情况下，标准错误输出流将
                  向控制台中输出一行错误信息。
                  但一般这种信息存于控制台中很容易丢失，我们可以将它重定向输出到文件中。
                  重定向只需要在启动服务时在启动命令后加 “2>error.log”，2 代表错误重定向标准错误
                  输出流。
                  此时只要产生错误，就会保存在 error.log 文件中。<br>
                  例：运行 app.js ；<br>
                  "node app.js 2>error.log"`
  };
    res.render('essay', {essay:[essay_1]});
};

exports.getPhoto = (req, res)=> {
  let photoUrlArr = [
    "http://od9z9b83b.bkt.clouddn.com/psb.jpeg",
    "http://od9z9b83b.bkt.clouddn.com/psb.jpeg",
    "http://od9z9b83b.bkt.clouddn.com/psb.jpeg",
    "http://od9z9b83b.bkt.clouddn.com/psb.jpeg",
    "http://od9z9b83b.bkt.clouddn.com/psb%20%284%29.jpeg",
    "http://od9z9b83b.bkt.clouddn.com/psb%20%289%29.jpeg",
    "http://od9z9b83b.bkt.clouddn.com/psb%20%2810%29.jpeg",
    "http://od9z9b83b.bkt.clouddn.com/psb%20%284%29.jpeg"
  ];
    res.render('photo', {photoUrlArr: photoUrlArr});
};

exports.getContact = (req, res)=> {
    res.render('contact');
};
exports.test = (req, res)=> {
    res.render('test');
};
