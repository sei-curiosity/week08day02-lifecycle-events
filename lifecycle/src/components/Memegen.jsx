import React, { Component } from 'react'
import memList from './data/memList'
import Meme from './Meme'
class Memegen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            allMemeImgs: memList
        }
    }
    // componentDidMount() {
    //     const memeList = [
    //         {
    //           id: 1,
    //           title: "Angry",
    //           image: "http://imgur.com/kH6o0mN.png"
    //         },
    //         {
    //           id: 2,
    //           title: "Aww Yeah",
    //           image: "http://imgur.com/vTSZ6CG.png"
    //         },
    //         {
    //           id: 3,
    //           title: "Cereal Guy",
    //           image: "http://imgur.com/SjnMMhd.png"
    //         },
    //         {
    //           id: 4,
    //           title: "Cereal Spitting",
    //           image: "http://imgur.com/rdw32yx.png"
    //         },
    //         {
    //           id: 5,
    //           title: "Challenge Accepted",
    //           image: "http://imgur.com/xHcS2LF.png"
    //         },
    //         {
    //           id: 6,
    //           title: "Heck Yea",
    //           image: "http://imgur.com/DRd0yKE.png"
    //         },
    //         {
    //           id: 7,
    //           title: "Concentrated",
    //           image: "http://imgur.com/t9uwvai.png"
    //         },
    //         {
    //           id: 8,
    //           title: "Derrrp",
    //           image: "http://imgur.com/kBSZgbG.png"
    //         },
    //         {
    //           id: 9,
    //           title: "Determined",
    //           image: "http://imgur.com/CATjyHj.png"
    //         },
    //         {
    //           id: 10,
    //           title: "Dude Come On",
    //           image: "http://imgur.com/8Tkr6ld.png"
    //         },
    //         {
    //           id: 11,
    //           title: "EWBTE",
    //           image: "http://imgur.com/ZaSaYAK.png"
    //         },
    //         {
    //           id: 12,
    //           title: "Excited Troll",
    //           image: "http://imgur.com/CFLPW9U.png"
    //         },
    //         {
    //           id: 13,
    //           title: "Fap Fap",
    //           image: "http://imgur.com/NImikb7.png"
    //         },
    //         {
    //           id: 14,
    //           title: "Forever Alone",
    //           image: "http://imgur.com/4L89AMP.png"
    //         },
    //         {
    //           id: 15,
    //           title: "Forever Alone Excited",
    //           image: "http://imgur.com/NyEoz2g.png"
    //         },
    //         {
    //           id: 16,
    //           title: "Oh Yea Female",
    //           image: "http://imgur.com/WMgvwaq.png"
    //         },
    //         {
    //           id: 17,
    //           title: "Full Panel",
    //           image: "http://imgur.com/iN5P0r4.png"
    //         },
    //         {
    //           id: 18,
    //           title: "Happy",
    //           image: "http://imgur.com/JqhcMU4.png"
    //         },
    //         {
    //           id: 19,
    //           title: "Hehehe",
    //           image: "http://imgur.com/U9GK6jL.png"
    //         },
    //         {
    //           id: 20,
    //           title: "Laughing",
    //           image: "http://imgur.com/wJUtNXR.png"
    //         },
    //         {
    //           id: 21,
    //           title: "Me Gusta",
    //           image: "http://imgur.com/6otWkQZ.png"
    //         },
    //         {
    //           id: 22,
    //           title: "Milk",
    //           image: "http://imgur.com/bxMhEKZ.png"
    //         },
    //         {
    //           id: 23,
    //           title: "Newspaper Guy",
    //           image: "http://imgur.com/MhbPTSQ.png"
    //         },
    //         {
    //           id: 24,
    //           title: "Okay",
    //           image: "http://imgur.com/X6niVYQ.png"
    //         },
    //         {
    //           id: 25,
    //           title: "Original Rage",
    //           image: "http://imgur.com/CD0nLh8.png"
    //         },
    //         {
    //           id: 26,
    //           title: "Original Troll",
    //           image: "http://imgur.com/sV4AReH.png"
    //         },
    //         {
    //           id: 27,
    //           title: "Poker Face",
    //           image: "http://imgur.com/EFHsGkJ.png"
    //         },
    //         {
    //           id: 28,
    //           title: "Prrrr",
    //           image: "http://imgur.com/gXmsig6.png"
    //         },
    //         {
    //           id: 29,
    //           title: "Smile",
    //           image: "http://imgur.com/Bp2y4zT.png"
    //         },
    //         {
    //           id: 30,
    //           title: "Thoughtful",
    //           image: "http://imgur.com/HdmBrwX.png"
    //         },
    //         {
    //           id: 31,
    //           title: "Troll Dad Full",
    //           image: "http://imgur.com/Mgyz87x.png"
    //         },
    //         {
    //           id: 32,
    //           title: "Troll Dad Jump",
    //           image: "http://imgur.com/PFzOfO7.png"
    //         },
    //         {
    //           id: 33,
    //           title: "Wait A Minute",
    //           image: "http://imgur.com/rxlv8TX.png"
    //         },
    //         {
    //           id: 34,
    //           title: "What",
    //           image: "http://imgur.com/0JmUzko.png"
    //         },
    //         {
    //           id: 35,
    //           title: "Why With Hands",
    //           image: "http://imgur.com/gEZW60M.png"
    //         },
    //         {
    //           id: 36,
    //           title: "YUNO",
    //           image: "http://imgur.com/uXKy3RJ.png"
    //         }
    //       ];
    //       this.setState({allMemeImgs: memeList})
    // }
    handleSubmit = event => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].image
        this.setState({randomImg: randMemeImg})
    }
handleChange = event => {
    const {name, value} = event.target
    this.setState({ [name]: value})
}
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={this.state.topText}
                    onChange={this.handleChange} />
                    <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={this.state.bottomText}
                    onChange={this.handleChange} />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img
                    src={this.state.randomImg} alt="" width="100" height="100"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                {this.state.allMemeImgs.map((element)=> {
                    return(<Meme title={element.title} image={element.image} />)
                })}
                
           </div>
        )
    }
}
export default Memegen