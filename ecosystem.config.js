module.exports = {
  apps : [{
    name: 'wohnzimmer-dessau',
    script: 'vapid',
    args: 'start .',

    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};