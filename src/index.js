import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types'
import {Library} from './Library'
// var style={
//     backgroundColor:'orange',
//     color:'white',
//     fontFamily:'Araial'
// }
// var data={
//     total:20,
//     powder:13,
//     backcountry:2,
//     goal:5,
// }

// componet approach

// class SkiDayCounter extends Component{
//    getPercenteage=(decimal)=>{
//        return decimal*100 + '%';
//    } 
//    calculateProgress=(total,goal)=>{
//        return this.getPercenteage(total/goal)
//    }
//  render(){
//      let {total,powder,backcountry,goal,style}= this.props
//      return (
//          <section style={{background:style.backgroundColor}}>
//          <div>
//          <p>Total Days: {total}</p>
//          </div>
//          <div>
//          <p>Powder Days: {powder}</p>
//          </div>
//          <div>
//          <p>BackCountry Days: {backcountry}</p>
//          </div>
//           <div>
//          <p>Goal Percentage: {this.calculateProgress(total,goal)}</p>
//          </div>
//          </section>
//      )
//  }   
// }

// render(<SkiDayCounter total={data.total} powder={data.powder} style={style} backcountry={data.backcountry} goal={data.goal}/>,document.getElementById('root'))


// functional approach

// var bookList=[
//     {"title":"Hunger","author":"Roxane Gay","pages":320},
//     {"title":"The Sun AlsoRises","author":"Ernest Hemingway","pages":500},
//     {"title":"fault in our stars","author":"peter venhontan","pages":789}
//     ]
//     const Book = ({title,author,pages})=>{
//         console.log(title,author,pages)
//         return(
//             <section>
//             <h2>{title}</h2>
//             <p>by:{author}</p>
//             <p>Pages:{pages}</p>
//             </section>
//         )
//     }
//     const Library=({books})=>{
//         return (
//             <div>
//             {books.map((boo,index)=>
//           //  console.log(boo.title,boo.author,boo.pages)
//        <Book key={index} title={boo.title.toString()} author={boo.author.toString()} pages={boo.pages.toString()}/>
//             )}
//             </div>
//             )
//     }
//     render(
//         <Library books={bookList}/>,document.getElementById('root')
//     )



//conditional components
//library content






 var bookList=[{"title":"Hunger","author":"Roxane Gay","pages":320},

    {"title":"The Sun AlsoRises","author":"Ernest Hemingway","pages":500},
    {"title":"fault in our stars","author":"peter venhontan","pages":789}]
    



render(
        <Library books={bookList}/>,document.getElementById('root')
    )

// class FavouriteColorForm extends Component{
//     state={
//         value:'',
//     }
//     newColor = (e)=>{
//         this.setState({value:e.target.value})
//     }
//     submit = (f)=>{
//         console.log(this.state.value,'new color code');
//         f.preventDefault();
//     }
//     render(){
//         return(
//         <form onSubmit={this.submit}>
//         <label>Favourite Color:</label>
//         <input onChange={this.newColor} type="color"/>
//         <button type="submit">Submit</button>
//         </form>)
//     }
// }
// render(<FavouriteColorForm/>,document.getElementById('root'))
