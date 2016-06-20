###React Babel Webpack Starter Kit
----------------------------------

An simple react babel webpack starter kit, that allows you to set up your React environment in ES6 without any issues!

###Why build another starter kit?
----------------------------
I want to use and understand the `package.json` on my project. Other kits where so damn tough to understand on what it does! It pulls out of MBs of data for simple hellp world in react!

Look at the current project `package.json`:

```
"dependencies": {
    "react": "^15.0.2",
    "react-dom": "^15.0.2"
}
```

And thats it! Thats the only thing we need for React!!

###To Run
------------------

Clone the project:

```
git clone https://github.com/antoaravinth/react-babel-webpack-starter-kit.git
```

And pull out all depedencies:

```
npm install
```

once done. Run :

```
webpack --minimize
npm start
```

or

```
npm start dev
```

this will start bundle the project using webpack and starts the server at 8080. Now browse to:

```
http://localhost:8080/
```

If you want to minify the bundle then do the additional set up:

```
export NODE_ENV='PROD'
webpack --minimize
npm start
```

or

```
npm start prod
```

thats it!
