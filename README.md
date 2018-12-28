




# React ES6 Boilerplate
### A simple `create-react-app` boilerplate with a few additional add-ons and an image gallery template.

[View Demo](https://react-es6-boilerplate.herokuapp.com/) 


## Customizations
**Styled Components**
```
  styled-components
  styled-icons`
  styled-media-query
  styled-reset
```
**Enzyme Unit Testing w/ Jest**
  ```
enzyme
enzyme-adapter-react-16
jest-enzyme
   ```

**Other Additions**
```
  axios
```
Updated the  "test":  key in package to:
```
"test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!styled-icons)/\"",
```
To avoid problems that currently exist when testing with jest and styled icons.


**Container / Component pattern**
The demo page makes use of the container / component pattern and a series of api call to:

 `https://random.dog/doggos` 


 The results from the api allow the container to feed data (in this case a bunch of random and cute dog photos) to its children components for rendering. and renders the demo page using the container component pattern.


**Built w/:**

- React, ES6
- Unit Testing w/ Jest, Enzyme
- Container / Component Pattern
- Styled Components
- CSS Grid Spec, Responsive
---

### Installation

```
git clone git@github.com:scottjason/react-es6-boilerplate.git
```
then:

```
yarn && yarn start
```

and point your browser to localhost:3000

To test:
```
yarn test 
```

![enter image description here](https://s3-us-west-1.amazonaws.com/sj-portfolio/readme-img-boilerplate.jpg)