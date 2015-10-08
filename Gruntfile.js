module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        output : {
            fileName: '<%= pkg.name %>.<%= pkg.version %>.js',
            minFileName : '<%= pkg.name %>.<%= pkg.version %>.min.js'
        },
        // concat: {
        //     options: {
        //         separator: ';'
        //     }
        //
        //
        // }
       //
      //  ,jasmine: {
      //       pivotal: {
      //         src: './dist/<%=output.fileName %>',
      //         coverage: './dist/<%=output.fileName %>',
      //         options: {
      //           // '--web-security' : false,
      //           // '--local-to-remote-url-access' : true,
      //           // '--ignore-ssl-errors' : true,
      //           specs: './test/spec/*Spec.js',
      //           keepRunner: true,
      //           //host: 'http://127.0.0.1:8808/',
      //           vendor: ['node_modules/jasmine-ajax/lib/mock-ajax.js'],
      //           template: require('grunt-template-jasmine-istanbul'),
      //           templateOptions: {
      //               template : 'test/template/DefaultRunner.tmpl',
      //               coverage: 'bin/coverage/coverage.json',
      //               report: 'bin/coverage',
      //               files:'./dist/<%=output.fileName %>'
      //           }
      //         }
      //       }
       //
      //      ,mini: {
      //         src: './dist/<%= output.minFileName %>',
      //         options: {
      //           template: 'test/template/DefaultRunner.tmpl',
      //           specs: './test/spec/*Spec.js',
      //           keepRunner:true,
      //           vendor: ['node_modules/jasmine-ajax/lib/mock-ajax.js'],
      //         }
      //       }
      //   }
      //  ,uglify: {
      //     mini: {
      //       files: {
      //         './dist/<%= output.minFileName %>': ['./dist/<%= output.fileName %>']
      //       }
      //     }
      //   }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-jasmine');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.registerTask('default', [ 'concat', 'uglify', 'jasmine']);
    // grunt.registerTask('package', [ 'concat', 'uglify']);
    // grunt.registerTask('debug', [ 'concat', 'jasmine:pivotal']);
    grunt.registerTask("concatPages", "your description", function() {
      // read all subdirectories from your modules folder
      grunt.file.expand("./src/pages/*").forEach(function (dir) {
        dir = dir.match(/\/([^\/]+)$/)[1];
        // get the current concat config
        var concat = grunt.config.get('concat') || {};
        // set the config for this modulename-directory
        concat[dir] = {
          src: [
            './src/pages/' + dir + '/*.js'
          //  '!/modules/' + dir + '/js/compiled.js'
          ],

          dest: './dest/pages/' + dir + '.js'
        };
         // save the new concat configuration
         grunt.config.set('concat', concat);
      });
      // when finished run the concatinations
      grunt.task.run('concat'); });
    };
