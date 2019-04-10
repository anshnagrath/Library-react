import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types'
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'
//maintaining state in a Cmponent
export class Library extends Component{
      //to pass the  default props if not passed
static defaultProps={
    books:[
        {"title":"Tahoe Tales","author":"Cnet Whitley","pages":1000}
    ]
}    
componentDidMount(){
console.log('component Mounted')
this.setState({loading:true})
fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1').then((data)=>data.json()).then(data=>this.setState({data,loading:false}))
 }
 componentDidUpdate(){
     console.log('the component updated')
 }
 componentWillUnmount(){
      console.log('the component unmounted')
 }
state = {
    open:true,
    freeBookmark:true,
    hiring:true,
    data:[],
    loading:false,
}
// this.toggleState = this.toggleState.bind(this)
toggleState=()=>{

    this.setState(prevState=>({
        open:!prevState.open

    })
   )
}    
render(){
   // console.log(this.state)
        const {books} = this.props
       return (
            <div>
             {this.state.hiring?<Hiring/>:<NotHiring/>}
             {this.state.loading? 'loading...':<div>
             {this.state.data.map(product=>{
                 return(
                     <div key={product.id}>
                     <h3>Library Product of the week</h3>
                     <h4>{product.name}</h4>
                     <img src={product.image} alt={product.name} height={100}/>
                     </div>
                     )
                     })                   
            }
             
             </div>
             }
            <h1>The Library is {this.state.open ? 'open':'closed'}</h1>

            <button onClick={this.toggleState}>Change</button>
            {books.map((boo,index)=>
       <Book key={index} title={boo.title.toString()} author={boo.author.toString()} pages={boo.pages.toString()} freeBookmark={this.state.freeBookmark}/>
            )}
            </div>
            )
}
}
Library.propTypes={
    books:PropTypes.array
}
Book.propTypes = {
    title:PropTypes.string,
    author:PropTypes.string,
    pages:PropTypes.number,
    freeBookmark:PropTypes.bool
}
export default Library