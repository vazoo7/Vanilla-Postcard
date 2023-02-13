# Canonical - Blog Posts Assignment

Submitted by Vaseem Ali Molanthala on 24th January 2023


## Brief Description

-- Canonical - Blog Posts Assignment -- is a simple responsive web page developed using Vanilla framework. I've used the Vanilla[vanilla-framework": "^3.10.0"] and Express Web application framework ["express": "^4.18.1"].For a full list of dependencies please consult the `package.json` file.


### Specifications

Vanilla framework: vanillaframework.io/docs  - v3.10.0 ( You can install Vanilla Framework or Use the latest CDN - https://assets.ubuntu.com/v1/vanilla-framework-version-3.10.0.min.css")

WordPress API: https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json 

Node Version: v16.13.1 (Node version of 12.0.0 or higher should be installed)

Port: 5500 ( Please make sure that the port is free. If not, you can change the port in app.js)


## Usage

```
1. // Navigate to the repository root

2. " npm install " - [for installing all dependencies or devDependencies from a package.json file]

3. " npm start "
```


## Approach

The approach selected in this project is very simple and clean as there were no other major specifications mentioned in the project. The only specifications were the usage of vanilla framework and fetching the given API. This project uses the HTML/CSS/JS approach using the node and express as its server aid. The styling part of CSS links to to its simple and extensible Vanilla Framework. 

The only assumption made in this project was limiting the loop for rendering only 3 times using a switch case as it was mentioned in the project. If the loop has to be expanded, a simple function can be added to render additional cards on to the existing container.

The colour code used in the css file were selected precisely using the help of an colour picker tool. One can find them in the index.css file.
