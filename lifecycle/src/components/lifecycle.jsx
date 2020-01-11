import React, { Component } from 'react';

class Lifecycle extends Component {
   constructor(props){
       super(props)
       this.state={
           data: "Ahmed"
           }
       }
   UNSAFE_componentWillMount(){
       console.log("compnonetwillmount is laoded")
   }

//    getData() {
//     setTimeout(() => {
//         console.log("Our fake data is getting fetched")
//         this.setState({
//             data: "SEI 9 Class"
//         })
//     // }, 2000);
// }

   UNSAFE_componentDidMount(){
       console.log("compnonetdidmount is laoded")
   }
    render() {
        return (
            <div>
                {this.state.date}
            </div>
         );
    }
}
export default Lifecycle;