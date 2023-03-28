const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.extensions.add('.ts')

    config.resolve.alias.set(
      '@formily/element',
      path.resolve(__dirname, './src/index.ts')
    )

    config.module
      .rule('ts')
      .test(/\.ts$/)
      .exclude.add(path.resolve(__dirname, 'node_modules'))
      .end()
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        transpileOnly: true, // 关闭类型检查，即只进行转译(类型检查交给webpack插件(fork-ts-checker-webpack-plugin)在另一个进程中进行,这就是所谓的多进程方案,如果设置transpileOnly为false, 则编译和类型检查全部由ts-loader来做, 这就是单进程方案.显然多进程方案速度更快)
        appendTsSuffixTo: ['\\.vue$'],
        happyPackMode: false,
      })
      .end()

    config.entryPoints
      .clear()
      .end()
      .entry('main')
      .add(path.resolve(__dirname, './example/src/main.js'))

    config.plugin('html').tap((args) => {
      return [
        {
          template: path.join(__dirname, './example', 'index.html'),
        },
      ]
    })

    config.devtools = 'source-map'
  },
}
