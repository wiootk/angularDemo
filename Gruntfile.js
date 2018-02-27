module.exports = function(grunt) {
    grunt.initConfig({
        meta: {
            version: '0.1.0'
        },
        // 读取package.json文件
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= meta.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>*/\n',
        // 任务配置

        //concat用来合并js文件  
        concat: {
            options: {
                // 定义一个用于插入合并输出文件之间的字符  
                separator: ';',
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                // 将要被合并的文件  
                src: ['js/*.js', 'js/**/*.js'],
                // 合并后的JS文件的存放位置  
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        //uglify用来压缩js文件  
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                files: {
                    //uglify会自动压缩concat任务中生成的文件  
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
                // src: '<%= concat.dist.dest %>',
                // dest: 'dist/<%= pkg.name %>.min.js' 
            }
        },


        //jshint用来检查js代码规范  
        jshint: {
            // files: ['Gruntfile.js', 'js/*.js', 'js/**/*.js'],  
            gruntfile: {
                src: 'Gruntfile.js'
                // files: {'build/js/base.min.js' : ['assets/js/base.js'] }
            },
            lib_test: {
                src: ['js/*.js', 'js/**/*.js']
            },
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: false,
                expr: true,
                asi: true, //允许省略分号
                boss: true,
                eqnull: true,
                browser: true,
                force: true,
                globals: {
                    jQuery: false,
                    $: false,
                    define: false,
                    require: false,
                    console: false,
                    module: false,
                    document: true
                }
            },
        },
        //htmlhint用来检查html代码规范  
        htmlhint: {
            build: {
                // htmlhintrc: '.htmlhintrc'
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': false,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['views/**/*.html']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test']
            }
        },


        karma: {
            unit: {
                configFile: 'karma.require.config.js',
                // port: 9999,
                // singleRun: true,
                // browsers: ['Chrome'],
                // logLevel: 'ERROR'
            }
        }


    });
    // 加载grunt插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');





    // grunt karma
    grunt.registerTask('test', ['karma']);

    // 配置default任务（顺序）
    grunt.registerTask('default', ['jshint', 'htmlhint', 'concat', 'uglify', 'watch']);





};