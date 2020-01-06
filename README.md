# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Events

React documention is great, so let's not forget that we can use React documenation as a resource.

- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [Forms](https://reactjs.org/docs/forms.html)

## Code along

To learn more about React events, we are going to build an application that will 
1.  That will generate random memes
2.  A form That will add the given text to our random generated meme with each submit action.

### The final version should look like below
<img src="https://i.imgur.com/vtIQOXb.jpg" width="900px" height="auto" />


## Let's plan out our steps!

### Memes Data
```js
[
  {
  "id": 1,
  "title": "Angry",
  "image": "http://imgur.com/kH6o0mN.png"
  },
  {
  "id": 2,
  "title": "Aww Yeah",
  "image": "http://imgur.com/vTSZ6CG.png"
  },
  {
  "id": 3,
  "title": "Cereal Guy",
  "image": "http://imgur.com/SjnMMhd.png"
  },
  {
  "id": 4,
  "title": "Cereal Spitting",
  "image": "http://imgur.com/rdw32yx.png"
  },
  {
  "id": 5,
  "title": "Challenge Accepted",
  "image": "http://imgur.com/xHcS2LF.png"
  },
  {
  "id": 6,
  "title": "Heck Yea",
  "image": "http://imgur.com/DRd0yKE.png"
  },
  {
  "id": 7,
  "title": "Concentrated",
  "image": "http://imgur.com/t9uwvai.png"
  },
  {
  "id": 8,
  "title": "Derrrp",
  "image": "http://imgur.com/kBSZgbG.png"
  },
  {
  "id": 9,
  "title": "Determined",
  "image": "http://imgur.com/CATjyHj.png"
  },
  {
  "id": 10,
  "title": "Dude Come On",
  "image": "http://imgur.com/8Tkr6ld.png"
  },
  {
  "id": 11,
  "title": "EWBTE",
  "image": "http://imgur.com/ZaSaYAK.png"
  },
  {
  "id": 12,
  "title": "Excited Troll",
  "image": "http://imgur.com/CFLPW9U.png"
  },
  {
  "id": 13,
  "title": "Fap Fap",
  "image": "http://imgur.com/NImikb7.png"
  },
  {
  "id": 14,
  "title": "Forever Alone",
  "image": "http://imgur.com/4L89AMP.png"
  },
  {
  "id": 15,
  "title": "Forever Alone Excited",
  "image": "http://imgur.com/NyEoz2g.png"
  },
  {
  "id": 16,
  "title": "Oh Yea Female",
  "image": "http://imgur.com/WMgvwaq.png"
  },
  {
  "id": 17,
  "title": "Full Panel",
  "image": "http://imgur.com/iN5P0r4.png"
  },
  {
  "id": 18
  "title": "Happy",
  "image": "http://imgur.com/JqhcMU4.png"
  },
  {
  "id": 19,
  "title": "Hehehe",
  "image": "http://imgur.com/U9GK6jL.png"
  },
  {
  "id": 20,
  "title": "Laughing",
  "image": "http://imgur.com/wJUtNXR.png"
  },
  {
  "id": 21,
  "title": "Me Gusta",
  "image": "http://imgur.com/6otWkQZ.png"
  },
  {
  "id": 22,
  "title": "Milk",
  "image": "http://imgur.com/bxMhEKZ.png"
  },
  {
  "id": 23,
  "title": "Newspaper Guy",
  "image": "http://imgur.com/MhbPTSQ.png"
  },
  {
  "id": 24,
  "title": "Okay",
  "image": "http://imgur.com/X6niVYQ.png"
  },
  {
  "id": 25,
  "title": "Original Rage",
  "image": "http://imgur.com/CD0nLh8.png"
  },
  {
  "id": 26,
  "title": "Original Troll",
  "image": "http://imgur.com/sV4AReH.png"
  },
  {
  "id": 27,
  "title": "Poker Face",
  "image": "http://imgur.com/EFHsGkJ.png"
  },
  {
  "id": 28,
  "title": "Prrrr",
  "image": "http://imgur.com/gXmsig6.png"
  },
  {
  "id": 29,
  "title": "Smile",
  "image": "http://imgur.com/Bp2y4zT.png"
  },
  {
  "id": 30,
  "title": "Thoughtful",
  "image": "http://imgur.com/HdmBrwX.png"
  },
  {
  "id": 31,
  "title": "Troll Dad Full",
  "image": "http://imgur.com/Mgyz87x.png"
  },
  {
  "id": 32,
  "title": "Troll Dad Jump",
  "image": "http://imgur.com/PFzOfO7.png"
  },
  {
  "id": 33,
  "title": "Wait A Minute",
  "image": "http://imgur.com/rxlv8TX.png"
  },
  {
  "id": 34,
  "title": "What",
  "image": "http://imgur.com/0JmUzko.png"
  },
  {
  "id": 35,
  "title": "Why With Hands",
  "image": "http://imgur.com/gEZW60M.png"
  },
  {
  "id": 36,
  "title": "YUNO",
  "image": "http://imgur.com/uXKy3RJ.png"
  }
] 
```


1\. Creating the boilerplate and rendering an App component
-----------------------------------------------------------

The first thing we need to do is to create the boilerplate code for the app. To do this, we import `React` and `ReactDOM` and use `ReactDOM` to render a component called `App`, which we will create later. We then put the `App` component at the 'root'. We also import `App` from its file `"./App"`, which we will create shortly.

    // index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    
    ReactDOM.render(<App />, document.getElementById('root'));
    

We then create our `App.js` file. In it, we create a functional component called `App` which, for now, returns a simple `<h1>`. We then export it. The `<h1>` allows us to check that the app is displaying correctly to the screen.

    import React from 'react';
    function App() {
      return <h1>Hello world!</h1>;
    }
    export default App;


2\. Creating the Header and MemeGen components
----------------------------------------------------

Next up, we create the Header and MemeGen components. The Header will only display elements, while MemeGen will load the provided meme data and retain the data in state.

Let's start by creating the `Header.js` file. Since Header is a component which is only used to display, it should be a functional component. For now, the component should return a simple `<h1>`. After creating it, we then export Header.

    import React from 'react';
    function Header() {
      return <h1>HEADER</h1>;
    }
    export default Header;
    

Next, we create the `MemeGen.js` file. As the `MemeGen` component will be holding data, it needs to be a class component. We still need to import React, and since it is going to be a class component, we'll import `Component` as well.

MemeGen needs a `constructor()` which calls `super()` and as it will be holding state, we add some empty state to it now. Like in the Header component, we render a simple `<h1>` to start with. We then export MemeGen.

    import React, { Component } from 'react';
    class MemeGen extends Component {
      constructor() {
        super();
        this.state = {}; //empty state
      }
      render() {
        return <h1>MEME GENERATOR SECTION</h1>;
      }
    }
    export default MemeGen;
    

Now, we import both Header and MemeGen into `App.js` and create an instance of each one in our App component. In order to display the components correctly, we wrap them in a `<div>`.

    import React from 'react';
    import Header from './Header';
    import MemeGen from './MemeGen';
    function App() {
      return (
        <div>
          <Header />
          <MemeGen />
        </div>
      );
    }
    export default App;
    

3\. Completing the Header component.
------------------------------------

To complete the `<Header>` component, we add a trollface image by inserting an `<img>` tag and setting the src to the image's URL. We then add a `<p>` tag with the name of our app and wrap them both in the semantic HTML5 `<header>` tag.

    function Header() {
      return (
        <header>
          <img
            src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
            alt=''
          />
          <p>Meme Generator</p>
        </header>
      );
    }
    
Custom Styling is applied henceforth.

4\. Initializing state
----------------------


We now have to initialize state so that it saves a top text, a bottom text and a random image, which is already supplied.

To do this, we build up the empty object we placed in the `<MemeGen/>` when we originally built it. We initialize `topText` and `bottomText` as empty strings and `randomImg` as the provided URL.

    class MemeGen extends Component {
      constructor() {
        super();
        this.state = {
          topText: '',
          bottomText: '',
          randomImg: 'http://i.imgflip.com/1bij.jpg'
        };
      }
    }
    

5\. Working with the lifecycle event
------------------------------------

Next, we start working on the lifecycle event and save the data (passed either via props or declared within the lifecycle) to a new state property called `allMemeImgs`.  
When we need to load data from an endpoint to use in our component, a good place to make the request is the `componentDidMount()` lifecycle method. This waits for my component to mount first before working on the data.

    componentDidMount() { 
      const { meme } = this.props
    }
    

Now, we save the results to a new state property called `allMemeImgs`. To do this, we initialize `allMemeImgs` as an empty array.

    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
    

Now, back in `componentDidMount()`, we set state. As we are not interested in what the previous state was, we set `allMemeImgs` to memes.

     componentDidMount() {
      const { meme } = this.props //Can pass the meme data here directly rather than as a prop
      this.setState({ allMemeImgs: meme });
    }
    

6\. Creating the input form
---------------------------

We now want to create a form which will eventually allow the user to input the top and bottom texts. We do this with an HTML `<form>` tag and a simple `<button>` which says 'Generate'. We style it with the pre-provided CSS.

    render() {
      return (
        <div>
          <form className="meme-form">
            <button>Generate</button>
          </form>
        </div>
      )
    }
    


7\. Adding input fields to the form
-----------------------------------

Next, it is up to us to add the two input fields (one for the top text and one for the bottom text). The form should be a controlled form, so we will need to add all the attributes needed in order for that to work. We will create the `onChange` handler later.

We create two input fields which both have the type `text` and appropriate name attributes (`topText` and `bottomText`). Rather than using labels, we use placeholders: 'Top Text' and 'Bottom Text'.

Lastly, in order to make this a [controlled form](https://reactjs.org/docs/forms.html#controlled-components), we set the value as equal to the current value in `state` with `{this.state.topText}` and `{this.state.bottomText}`.

    render() {
      return (
        <div>
          <form className="meme-form">
            <input
              type="text"
              name="topText"
              placeholder="Top Text"
              value={this.state.topText}
            />
            <input
              type="text"
              name="bottomText"
              placeholder="Bottom Text"
              value={this.state.bottomText}
            />
            <button>Generate</button>
          </form>
        </div>
      )
    }
    

8\. Creating the onChange handler.
----------------------------------


Now, we create the onChange handler, which will update the corresponding state on every change of the input field.

First, we create a `handleChange()` function which receives an event.

    handleChange(event) {
    
    }
    

Now, we set the `onChange` of both input fields to equal `handleChange`.

    <form className='meme-form'>
      <input
        type='text'
        name='topText'
        placeholder='Top Text'
        value={this.state.topText}
        onChange={this.handleChange}
      />
      <input
        type='text'
        name='bottomText'
        placeholder='Bottom Text'
        value={this.state.bottomText}
        onChange={this.handleChange}
      />
      <button>Generate</button>
    </form>
    

We need to remember to bind the method in the constructor — a common gotcha for React developers.

    constructor() {
      super()
      this.state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
      }
      this.handleChange = this.handleChange.bind(this)
    }
    

To test the new `handleChange()` function, we add a simple `console.log`:

    handleChange(event) {
      console.log("Working!")
    }
    

If it is correctly firing, when you input any text.

Now to fill in the `handleChange()` function. To do this, we want to pull the name and value properties from event.target so that we can get the name of the state we are supposed to update (`topText` or `bottomText`) and the value which is typed into the box.

    handleChange(event) {
      const { name, value } = event.target
    }
    

We will now use these to update state. As we are not interested in what the previous state was, we can just provide an object in which we set the `[name]` to the value typed into the input field.

    handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
    }
    

9\. Displaying a meme image alongside the top and bottom text
-------------------------------------------------------------

We now want the app to display a meme image alongside the top and bottom text. We insert an `<img>` tag underneath the `<form>` and set the `randomImg` which we initialized as its source by using `src={this.state.randomImg}`. We then add two `<h2>` tags which display the corresponding text which is also saved in state. All of this is wrapped in a `div` and styled with the pre-provided `meme` class.

    <div className='meme'>
      <img src={this.state.randomImg} alt='' />
      <h2 className='top'>{this.state.topText}</h2>
      <h2 className='bottom'>{this.state.bottomText}</h2>
    </div>
    

We can now test the app by typing into the text boxes. As state is being correctly set on every keystroke, the text displayed on the image changes each time we type.


10\. Displaying a random meme image alongside the Top and Bottom text
---------------------------------------------------------------------


Now, we need to create a method which displays a meme image which it randomly chooses from our `allMemeImgs` array when the `Generate` button is clicked. The property on the chosen image in the array is `.image`.  
We can break this task down into smaller parts.

Firstly, we set the form's `onSubmit` to equal the name of our new method, which we will call `handleSubmit()`.

`<form className="meme-form" onSubmit={this.handleSubmit}>`

We now create the `handleSubmit()` function above the `render()` function. We need to preventDefault on the event, otherwise, the method will try to refresh the page.

    handleSubmit(event) {
      event.preventDefault()
    }
    

We also need to bind `handleSubmit()` in our `constructor()`.

    constructor() {
      super()
      this.state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    

Now, we need to get a random number, get the meme from that index and set `randomImg` to the `.image` of the random item.

    handleSubmit(event) {
      event.preventDefault()
      // get a random int (index in the array)
      // get the meme from that index
      // set `randomImg` to the `.image` of the random item I grabbed
    }
    

To get a random number, we use `Math.floor(Math.random)`. To make sure that it is one of the indices in our `allMemeImgs` array, we multiply by the length of the array.

    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    

We now set `randMemeImg` to equal `allMemeImgs`, with the index of `allMemeImgs` as the `randNum` we just got. We then add `.image` to the end of it.

    const randMemeImg = this.state.allMemeImgs[randNum].image;
    

Now, all we need to do is update the state by updating the randomImg property with `randMemeImg`.

    this.setState({ randomImg: randMemeImg });
    

Our completed `handleSubmit()` function looks like this:

    handleSubmit(event) {
      event.preventDefault()
      const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
      const randMemeImg = this.state.allMemeImgs[randNum].image
      this.setState({ randomImg: randMemeImg })
    }

