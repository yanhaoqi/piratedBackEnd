module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'piratedBackEnd',
      script    : './bin/www.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '101.201.64.108',
      ref  : 'origin/master',
      repo : 'git@github.com:yanhaoqi/piratedBackEnd.git',
      path : '/root/server/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'root',
      host : '101.201.64.108',
      ref  : 'origin/dev',
      repo : 'git@github.com:yanhaoqi/piratedBackEnd.git',
      path : '/root/server/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
