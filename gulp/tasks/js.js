import webpack from "webpack-stream"
import sourcemaps from "gulp-sourcemaps"
import ifPlugin from "gulp-if"
import uglify from "gulp-uglify"

export const js = () => {
    // путь к папке со скриптами
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev }) 

    //Ошибки в виндоус
        .pipe(app.plugins.plumber(                      
            app.plugins.notify.onError({
                title: "js",
                message: "Error: <%= error.message %>"
            })
        ))

        //если на продакшен
        .pipe(ifPlugin(app.isBuild, 
            webpack({
                mode: app.isBuild ? "production" : "none",
                    optimization: {
                                minimize: true
                            },
                            output: {
                    filename: 'main.js'
                },
                
                module: {
                    rules: [
                        {
                            test: /\.(sass|less|css)$/,
                            use: ["style-loader", "css-loader", 'sass-loader'],
                        },
                    ],
                }
                
                
            })
        ))

        //если на разработку
        .pipe(ifPlugin(app.isDev, 
            webpack({
            mode: app.isBuild ? "production" : "none",
                optimization: {
                            minimize: false
                        },
                        output: {
                filename: 'main.js'
            },
            
            module: {
                rules: [
                    {
                        test: /\.(sass|less|css)$/,
                        use: ["style-loader", "css-loader", 'sass-loader'],
                    },
                ],
            },
            
            })
        ))

        //карта для минифицированного js
        .pipe(sourcemaps.init("/"))
        .pipe(sourcemaps.write("/"))

        // в какой файл выгрузить
        .pipe(app.gulp.dest(app.path.build.js))
        // Следить за изменениями 
        .pipe(app.plugins.browserSync.stream())
}


