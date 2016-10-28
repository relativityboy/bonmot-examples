require.config({
  baseUrl:'',
  paths:{
    'jquery':'/libs/jquery/jquery',
    'handlebars':'/libs/handlebars/handlebars.amd',
    'text':'/libs/requirejs-text/text',
    'stickit':'/libs/stickit/backbone.stickit',
    'underscore':'/libs/underscore/underscore-min',
    'backbone':'/libs/backbone/backbone',
    'dw-backbone':'/libs/dw-backbone/src/base',
    'bon-mot':'/libs/bonmot/bonmot'
  },
  shim: {
    handlebars: {
      exports: "Handlebars"
    },
    backbone: {
      exports: "Backbone"
    },
    underscore: {
      exports: "_"
    }
  },
  packages: [{
    // Include hbs as a package, so it will find hbs-builder when needed
    name: "hbs",
    location: "/libs/bonmot/libs",
    main: "hbs"
  }],
  hbs: {
    templateExtension: ".hbs",
    //compilerPath: "/static/common/handlebars/handlebars-4.0.5",
    compilerPath: "handlebars",
  },
  //I'm not a fan of the way this lib is packaged.
  map:{
    '*': {
      'css': '/libs/require-css/css.js'
    }
  }

});