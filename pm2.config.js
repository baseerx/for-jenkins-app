module.exports = {
  apps: [
    {
      name: 'react-app',
      script: 'server.js', // The entry point for your server if you have one
      cwd: './build', // Directory where the built React app is located
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};

