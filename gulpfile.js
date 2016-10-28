/**
 * It's a terrible gulp file. Sorry. Focusing on the examples.
 */

//Gulp
var gulp = require('gulp');

//Plugins
var rename = require('gulp-rename');
var changeContents = require('gulp-change');
var Handlebars = require('handlebars');
var Backbone = require('dw-backbone');
var fs = require('fs');
var _ = require('underscore');
var ExamplePage = Backbone.Model.extend({
  idAttribute:'num',
  defaults:{
    num:0,
    dirname:'00',
    menuText:'no description',
    exampleDescription:'no example description'
  },
  initialize:function() {
    this.on('change:dirname', this.setDirnameFields, this);
    if(this.attributes.dirname !== '00') {
      this.setDirnameFields();
    }
  },
  setDirnameFields:function() {
    this.set('num', parseInt(this.get('dirname')));
    this.set('example_number', parseInt(this.get('dirname')));
  }
});

var examples = new (Backbone.Collection.extend({
  comparator:'num',
  model:ExamplePage
}))();

gulp.task('css', function() {
  return gulp.src('src/css/**.css')
    .pipe(gulp.dest("./public/css"));
});


gulp.task('example-subfolders', function() {
  return gulp.src('src/examples/*/*/**.*')
    .pipe(gulp.dest("./public/examples"));
});


gulp.task('example-app-js', function() {
  var exampleAppHBS =  Handlebars.compile(fs.readFileSync('./src/example_template/app.hbs.js', 'utf8'));
  return gulp.src('src/examples/*/app_person_data.json')
    .pipe(changeContents(function(contents) {
      return exampleAppHBS({app_data:contents});
    }))
    .pipe(rename(function (path) {
      path.basename = "app";
      path.extname = ".js";
      return path;
    }))
    .pipe(gulp.dest("./public/examples"));
});


gulp.task('example-index-html', function() {
  examples.reset();
  var exampleIndexHBS =  Handlebars.compile(fs.readFileSync('./src/example_template/index.hbs', 'utf8'));

  return gulp.src('src/examples/*/index_content.html')
    .pipe(changeContents(function(contents) {
      var page = new ExamplePage({
        dirname:this.fname.substring(0, this.fname.indexOf('/')),
        menuText: contents.match(/^\<\!\-\-.*-->/g)[0].replace('<!--','').replace('-->', '')
      });
      examples.add(page);
      contents = Handlebars.compile(contents)({example_number:'Example ' + page.get('num') + '. '});
      return exampleIndexHBS({index_content:contents, example_number:page.get('num')});
  }))
    .pipe(rename(function (path) {
      //menuItems.get(0).set('dirname',path.dirname);
      path.basename = "index";
      path.extname = ".html";
      return path;
    }))
    .pipe(gulp.dest("./public/examples"));
});

gulp.task('index-html', ['example-index-html'], function() {

  gulp.src('src/index.html')
    .pipe(changeContents(function(contents) {
      examples.sort();
      return Handlebars.compile(contents)({examples:examples.toJSON()});
    }))
    .pipe(gulp.dest("./public"));
  gulp.src('src/examples/*/index.html')
    .pipe(gulp.dest("./public/examples"));
});

gulp.task('js', ['example-app-js'], function() {
  gulp.src('src/libs/**.js')
    .pipe(gulp.dest("./public/libs"));

  return gulp.src('src/examples/*/**.js')
    .pipe(gulp.dest("./public/examples"));
});

// Watch Files For Changes
gulp.task('watch', ['default'], function() {
  gulp.watch('src/examples/*/*/**.*', ['example-subfolders']);
  gulp.watch('src/examples/*/**.js', ['js']);
  gulp.watch('src/examples/*/app_person_data.json', ['example-app-js']);
  gulp.watch('src/examples/*/index_content.html', ['index-html']);
  gulp.watch('src/index.html', ['index-html']);
  gulp.watch('src/css/**.*', ['css']);
});

// Default Task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
gulp.task('default', ['css', 'js', 'example-subfolders','index-html']);