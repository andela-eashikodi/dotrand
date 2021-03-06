// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://www.dotrand.com/blog',
        mail: {
          transport: 'SMTP',
          host: 'smtp.mandrillapp.com',
          port: 587,
          options: {
            service: 'Mandrill',
            auth: {
              user: process.env.MANDRILL_USERNAME,
              pass: process.env.MANDRILL_APIKEY
            }
          }
        },
        fileStorage: false,
        database: {
            client: 'postgres',
            connection: process.env.DATABASE_URL,
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        },
        paths: {
          contentPath: path.join(__dirname, '/content/')
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://localhost:2368/blog',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        mail: {
          transport: 'SMTP',
          host: 'smtp.mandrillapp.com',
          port: 587,
          options: {
            service: 'Mandrill',
            auth: {
              user: 'ashikodiemeka@gmail.com',
              pass: 'D4MvabypFN57VpKxlOBvqg'
            }
          }
        },

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }
  };

module.exports = config;