'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const mkdirp = require('mkdirp');


module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

writing(){
    this._writingFolderStructure();
    this._writingGulp();
    this._writingPackageJSON();
    this._writingStyles();
    this._writingHTML();
    this._writingScripts();
    this._writingImg();

}
_writingFolderStructure(){
  mkdirp('css');
  mkdirp('en');
  mkdirp('en/about');
  mkdirp('en/my_services');
  mkdirp('en/my_services/service1');
  mkdirp('font');
  mkdirp('fr/a-propos');
  mkdirp('fr/mes_services');
  mkdirp('fr/mes_services/service1');
  mkdirp('img');
  mkdirp('js');
}



_writingGulp(){
  this.fs.copyTpl(
    this.templatePath('gulp.js'),
    this.destinationPath('gulpfile.js')
  );
}

_writingScripts(){
  this.fs.copyTpl(
    this.templatePath('js/bootstrap.js'),
    this.destinationPath('js/boostrap.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/bootstrap.min.js'),
    this.destinationPath('js/boostrap.min.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/contact_me.js'),
    this.destinationPath('js/contact_me.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/content.js'),
    this.destinationPath('js/content.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/gallery.js'),
    this.destinationPath('js/gallery.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/jqBootstrapValidation.js'),
    this.destinationPath('js/jqBootstrapValidation.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/jquery.1.11.1.js'),
    this.destinationPath('js/jquery.1.11.1.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/jquery.isotope.js'),
    this.destinationPath('js/jquery.isotope.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/main.js'),
    this.destinationPath('js/main.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/nivo-lightbox.js'),
    this.destinationPath('js/nivo-lightbox.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/nprogress.js'),
    this.destinationPath('js/nprogress.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/owl.carousel.js'),
    this.destinationPath('js/owl.carousel.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/portfolio.js'),
    this.destinationPath('js/portfolio.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/SmoothScroll.js'),
    this.destinationPath('js/SmoothScroll.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/tcf-team.js'),
    this.destinationPath('js/tcf-team.js')
  );
  this.fs.copyTpl(
    this.templatePath('js/wow.min.js'),
    this.destinationPath('js/wow.min.js')
  );
}

_writingHTML(){
  this.fs.copyTpl(
    this.templatePath('html/indexAbout.html'),
    this.destinationPath('en/about/index.html')
  );

  this.fs.copyTpl(
    this.templatePath('html/indexService1EN.html'),
    this.destinationPath('en/my_services/service1/index.html')
  );
  this.fs.copyTpl(
    this.templatePath('html/indexEN.html'),
    this.destinationPath('en/index.html')
  );
  this.fs.copyTpl(
    this.templatePath('html/indexAPropos.html'),
    this.destinationPath('fr/a-propos/index.html')
  );
  this.fs.copyTpl(
    this.templatePath('html/indexService1FR.html'),
    this.destinationPath('fr/mes_services/service1/index.html')
  );
  this.fs.copyTpl(
    this.templatePath('html/index.html'),
    this.destinationPath('index.html')
  );
}

_writingPackageJSON(){
  this.fs.copyTpl(
    this.templatePath('_package.json'),
    this.destinationPath('package.json')
  );
  this.fs.copyTpl(
    this.templatePath('bower.json'),
    this.destinationPath('bower.json')
  );
}

_writingStyles(){
  this.fs.copyTpl(
    this.templatePath('css/animate.min.css'),
    this.destinationPath('css/animate.min.css')
  );
  this.fs.copyTpl(
    this.templatePath('css/bootstrap.css'),
    this.destinationPath('css/bootstrap.css')
  );
  this.fs.copyTpl(
    this.templatePath('css/bootstrap.min.css'),
    this.destinationPath('css/bootstrap.min.css')
  );
  this.fs.copyTpl(
    this.templatePath('css/nprogress.css'),
    this.destinationPath('css/nprogress.css')
  );
  this.fs.copyTpl(
    this.templatePath('css/owl.carousel.css'),
    this.destinationPath('css/owl.carousel.css')
  );
  this.fs.copyTpl(
    this.templatePath('css/owl.theme.css'),
    this.destinationPath('css/owl.theme.css')
  );
  this.fs.copyTpl(
    this.templatePath('css/style-marielle.css'),
    this.destinationPath('css/style-marielle.css')
  );
  this.fs.copyTpl(
    this.templatePath('css/style.css'),
    this.destinationPath('css/style.css')
  );
}
_writingImg(){
  this.fs.copyTpl(
    this.templatePath('img/background_img.jpg'),
    this.destinationPath('img/background_img.jpg')
  );
}
};
