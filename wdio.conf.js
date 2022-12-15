exports.config = {
    
    hostname: "mobile-hub.lambdatest.com",
    port: 80,
   
    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",

    product: 'appAutomation',

    specs: ['./examples/run-test/specs/single_test.js'],
    
    exclude: [],
  
    maxInstances: 10,

    capabilities: [{
        build: "NodeJS WebDriverIO Android",
    //   name: "Sample Test - WebDriverIO",
      isRealMobile: true,
      platformName: "Android",
      deviceName: "Galaxy S9",
      platformVersion: "10",
      app: "lt://APP10160551841662018882237913", //Set your APP URL
      }],
    logLevel: 'info',

    bail: 0,
    
    baseUrl: '',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['lambdatest'],
    
    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },   
}