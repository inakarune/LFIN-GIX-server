module.exports = {
    apps: [{
      name: 'gix-angular',
      script: './app.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-13-58-11-131.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/gix-angular.pem',
        ref: 'origin/master',
        repo: 'https://github.com/inakarune/LFIN-GIX-server.git',
        path: '/home/ubuntu/server',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }