'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const mkdirp = require('mkdirp');


module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('TCF-GENERATOR!')
    ));

      const prompts = [{
        type: 'checkbox',
        name: 'features',
        message: 'Projet avec SASS ou CSS ?',
        choices: [{
          name: 'Sass',
          value: 'includeSass',
          checked: true
        }, {
          name: 'Bootstrap',
          value: 'includeBootstrap',
          checked: true
        }]
      }];

      return this.prompt(prompts).then(answers => {
        const features = answers.features;
        const hasFeature = feat => features && features.indexOf(feat) !== -1;

  this.includeSass = hasFeature('includeSass');
  this.includeBootstrap = hasFeature('includeBootstrap');

});
    }

writing(){
    this._writingFolderStructure();
    this._writingGrunt();
    this._writingPackageJSON();
    this._writingStyles();
    this._writingHTML();
    this._writingScripts();

}
_writingFolderStructure(){
  mkdirp('app/fonts');
  mkdirp('app/images');
  mkdirp('css');
  mkdirp('dist');
  mkdirp('en');
  mkdirp('fonts');
  mkdirp('fr');
  mkdirp('img');
  mkdirp('js');
  mkdirp('model');
}



_writingGrunt(){
  this.fs.copyTpl(
    this.templatePath('grunt.js'),
    this.destinationPath('gruntfile.js'),
    {
      date: (new Date).toISOString().split('T')[0]
    }
  );
}

_writingScripts(){
  this.fs.copyTpl(
    this.templatePath('script.js'),
    this.destinationPath('main.js')
  );
}

_writingHTML(){
  let stylePath, stylePlugins, scriptPath, scriptPlugins;

  stylePath = './css/'
  scriptPath = './js/'
  stylePlugins = [
    'animate',
    'boostrap',
    'nprogress',
    'owl.carousel',
    'owl.them',
    'style',
    'style-marielle'
  ];
  scriptPlugins = [
    'boostrap',
    'contact_me',
    'content',
    'gallery',
    'jqBootstrapValidation',
    'jquery.1.11.1',
    'jquery.isotope',
    'main',
    'nivo-lightbox',
    'nprogress',
    'owl.carousel',
    'porfolio',
    'SmoothScroll',
    'tcf-team',
    'wow.min'
  ];

  this.fs.copyTpl(
    this.templatePath('index.html'),
    this.destinationPath('index.html'),
    {
      stylePath: stylePath,
      stylePlugins : stylePlugins,
      scriptPath : scriptPath,
      scriptPlugins : scriptPlugins
    }
  );
}

_writingPackageJSON(){
  this.fs.copyTpl(
    this.templatePath('_package.json'),
    this.destinationPath('package.json')
  );
}

_writingStyles(){
  this.fs.copyTpl(
    this.templatePath('style.css'),
    this.destinationPath('style.css')
  );
}

};
