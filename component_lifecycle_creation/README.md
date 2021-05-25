# React Component Lifecycle - Create 

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
```
constructor -> getDerivedStateFromProps(props,state) -> render() -> Render Child Component -> componentDidMount()
```
Code Output 
```
App.js:11 In App.js constructor() 

App.js:15 In App.js getDerivedStateFromProps() 

App.js:28 In App.js render() 

AppChild.js:9 In AppChild.js constructor()  

AppChild.js:13 In AppChild.js getDerivedStateFromProps()

AppChild.js:25 In AppChild.js render()

AppChild.js:20 In AppChild.js componentDidMount()  

App.js:22 In App.js componentDidMount() 

```


# How to Run

First you have to install npm dependencies. for that use below command:
 
 `npm install`

To Run the Project:

`npm start` 