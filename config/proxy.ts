/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */

export const API_HOST = 'http://172.26.105.176:8080/';
export default {
  dev: {
    '/api/': {
      target: API_HOST,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: API_HOST,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: API_HOST,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
