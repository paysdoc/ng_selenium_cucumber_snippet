# To run with cucumber configure the following:  
## protractor.conf.js
`cucumberOpts: {}` for cucumber options
`framework: 'custom'`  
`frameworkPath: require.resolve('protractor-cucumber-framework')`  
`seleniumAddress: 'http://localhost:4444/wd/hub'`  
`specs: ['./src/features/**/*.feature']`

## NPM  
Install the following libraries (devDependencies - `-D`):
- cucumber
- protractor-cucumber-framework
- chai
- chai-as-promised
- q
- @types/cucumber
- @types/chai
- @types/chai-as-promised

# File structure
### features
Contains all the feature files for testing

### resources
Contains external resources possibly required by the tests

### step-definitions
Contains all step definitions used in the feature files

### support
Contains Page objects and other `.ts` files reuired for testing

#Help, it's not working!
- __error TS2339: Property should does not exist on type Promise<string>.__  
Check that you defined the chai and chai-as-promised typings in your tsconfig.e2e.json (standard typings are for Jasmine)
