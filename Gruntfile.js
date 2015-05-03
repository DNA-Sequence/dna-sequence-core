module.exports = function (grunt) {
    'use strict';

    // configuração do projeto
    var gruntConfig = {
        min: {
            dist: {
                src: ['src/js/dna/**/*.js'],
                dest: 'src/js/all.min.js'
            }
        },
        cssmin: {
            dist: {
                src: ['src/css/*.css'],
                dest: 'src/css/all.min.css'
            }
        },
        jshint: {
            all: ['src/js/*.js', 'src/js/dna/**/*.js']
        }, nodewebkit: {
            options: {
                build_dir: './webkitbuilds', // Where the build version of my node-webkit app is saved
                mac: true, // We want to build it for mac
                win: true, // We want to build it for win
                linux32: true, // We don't need linux32
                linux64: true, // We don't need linux64
                keep_nw: true,
                zip: true
            },
            src: ['./src/**/*', 'package.json'] // Your node-webkit app
        }, jsdoc: {
            dist: {
                src: ['src/js/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        }
    };

    grunt.initConfig(gruntConfig);


    // carregando plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-min');
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-jsdoc');


    // tarefas
    grunt.registerTask('default', ['jsdoc', 'nodewebkit']);
};
