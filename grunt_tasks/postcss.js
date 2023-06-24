// Transforming styles with JS plugins
module.exports = {
  dev: {
    options: {
      processors: [
        require('autoprefixer')({
          overrideBrowserslist: [
            "> 1%",
            "last 2 versions"
          ],
          cascade: true
        })
      ]
    },
    files:[{
      expand: true,
      cwd: '<%= paths.build.css %>',
      src: ['*.min.css'],
      dest: '<%= paths.build.css %>'
    }]
  },
  build: {
    options: {
      processors: [
        require('postcss-csso')({
          keepSpecialComments: '*',
          restructure: false
        })
      ]
    },
    files:[{
      expand: true,
      cwd: '<%= paths.build.css %>',
      src: ['*.min.css'],
      dest: '<%= paths.build.css %>'
    }]
  }
}
