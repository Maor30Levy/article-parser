const {
    extract
  } = require('article-parser');
const { removeHTMLelements ,mapText} = require('./utils');
  
  const url = process.argv[2]
  
  extract(url).then((article) => {
      console.log(`${url}`)
      console.log(article)
    const content = removeHTMLelements(article.content);
    const map = mapText(content);
    console.log(map)
  }).catch((err) => {
    if(err.status==500)
    console.log("Server is not available");
    else console.log("invalid Input, ", err.message);
  });