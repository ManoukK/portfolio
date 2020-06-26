
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
    './public/css/styles.css',
    './public/css/footer.css',
    './public/css/aboutStyles.css',
    './public/css/navigation.css',
    './public/css/cvPage.css'
  ])
  .pipe(concat('index.css'))
  .pipe(cleanCSS())
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest('./static/css/'))