import imageMin from "gulp-imageMin"
import webp from "gulp-webp";

export const img = () => {
    return app.gulp.src(app.path.src.img) // путь к папке со скриптами
        .pipe(app.plugins.plumber(                      //Ошибки в виндоус
            app.plugins.notify.onError({
                title: "img",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.newer(app.path.build.img))
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interLaced: true,
            optimizationLevel: 3// 0 to 7 
        })
        )
        .pipe(app.gulp.dest(app.path.build.img)) // в какой файл выгрузить

        .pipe(app.plugins.sharpResponsive({
            
                formats: [
            
                // smallOrigin
                { width: 768, rename: { suffix: "-sm" } },
                // webp
                { width: 1024, format: "webp"},
                // avif
                { width: 1024, format: "avif"},
                ]
        }))

        

        .pipe(app.gulp.dest(app.path.build.img))

        //формат webp
        // .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browserSync.stream())
}