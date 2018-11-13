## NodeJS

#### npm init

* Runs through a command line wizard to create a package.json file

#### package.json

* Contains all information you could want about a project:
  * Scripts to run and test it
  * The list of dependent NPM packages
  * GitHub link
  * Author
  * Licensing
  * Search keywords
  * and more

#### npm install --save <package>

* Downloads a package's latest version and stores the dependency in the package.json file

#### npm install --save-dev <package>

* Downloads a package's latest version and stores the dependency in the package.json file
* The dependency is listed as only needed for developers of the project

#### npm install

* Downloads all the dependencies located in the package.json file

#### node_modules

* The name of the folder where NodeJS installs its packages
* It's okay to delete this folder at any time assuming you have run all installs with the `--save` or `--save-dev` flags

#### npm run <script_name>

* The package.json allows you to define scripts which can be run using npm run
* Try these:
```
  "build": "webpack --config webpack.config.js",
  "dev-server": "webpack-dev-server --open --hot --history-api-fallback"
```

#### npm run build / npm build (if configured)

* Compiles and minifies all code into three files:
  * `index.html`
  * `style.css`
  * `bundle.js`
* These three files are then placed in the `./dist/` folder

#### npm run dev-server

* Runs the Webpack development server on localhost:8080

#### package-lock.json

* Complete record of the exact versions of all the nested dependencies that need to be installed
* Security feature
* Meant to be committed to GitHub

#### Installing Stuff

* `npm install --save autoprefixer css-loader node-sass postcss-cli postcss-loader sass-loader style-loader webpack`
* `npm install --save-dev copy-webpack-plugin css-hot-loader extract-text-webpack-plugin@^4.0.0-beta.0 webpack-cli webpack-dev-server`
* `npm run build`

#### Add to .gitignore

* It is a good idea to add the `dist/` and `node_modules/` folders to the .gitignore file
