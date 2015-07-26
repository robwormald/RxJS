var gulp = require('gulp');

//build tasks TODO

//docs tasks

gulp.task('docs_bower',function(){
    return gulp.src(['docs/bower_components/**'])
      .pipe(gulp.dest('dist/docs/lib'));
});

gulp.task('docs_app',function(){
    return gulp.src(['docs/app/**'])
      .pipe(gulp.dest('dist/docs'));
});

gulp.task('docs',['docs_app', 'docs_bower']);