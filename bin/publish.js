const ghPages = require('gh-pages');

// publish site to github pages

console.log("Publishing...");

ghPages.publish('public', {
    push: true,
    src: "**/!(*.map)",
    message: "Build and deploy to pages"
}, function(err) {
  if(err){
    console.log(err);
  } else {
    console.log("Success!");
  }
});
