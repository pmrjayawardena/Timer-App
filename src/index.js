import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {

    constructor(props){

        super(props);

        this.state ={

            date:new Date()
        };
    }

    tick(){

        this.setState({

            date: new Date()
        });
    }

    componentDidMount(){

this.timerID = setInterval(() => {
    this.tick();
}, 1000);
    }

    componentWillUnmount(){

        clearInterval(this.timerID);
    }


    render(){

        return(
<div>

    <h1>Prabodha React Js</h1>
    <h2>
        it is {this.state.date.toLocaleTimeString()}
    </h2>
</div>
        );
    }

}

ReactDOM.render(<Clock />, document.getElementById('root'));

// const products  = [

// {category:'Sporting Goods', price:'$49.99',stocked:true,name:'Football'},
// {category:'Sporting Goods', price:'$4.99',stocked:true,name:'Baseball'},
// {category:'Sporting Goods', price:'$49.99',stocked:true,name:'Football'},
// {category:'Sporting Goods', price:'$49.99',stocked:true,name:'Football'},
// {category:'Electronics', price:'$498.99',stocked:true,name:'Ipod Touch'},
// {category:'Sporting Goods', price:'$49.99',stocked:false,name:'Nexus 7'}

// ];


// class FilterableProductTable extends React.Component {

//     constructor(props){

//     super(props);

//         this.state = {
//             filterText:'',
//             inStockOnly:'false'
//         };

//         this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

//         this.handleInStockChange = this.handleInStockChange.bind(this);
//     }
//     handleFilterTextChange(filterText){

//         this.setState({

//             filterText:filterText
//         });
//     }

//     handleInStockChange(inStockOnly){

// this.setState({

//     inStockOnly:inStockOnly
// });
//     }

//     render() {
//         return (
//             <div>
//               <SeachBar 
//               filterText= {this.state.filterText}  
//               inStockOnly={this.state.inStockOnly} 
//               onFilterChange = {this.handleFilterTextChange} onInStockChange={this.handleInStockChange}/>  

//               <ProductTable 
//               products={this.props.products} 
//               filterText={ this.state.filterText} 
//               inStockOnly={this.state.inStockOnly}/>
//             </div>
//         );
//     }
// }

// class SeachBar extends React.Component {
// constructor(props){
//     super(props);

//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

//     this.handleInStockChange = this.handleInStockChange.bind(this);
// }
  
// handleFilterTextChange(e){

// this.props.onFilterTextChange(e.target.value);
// }

// handleInStockChange(e){

// this.props.onInStockChange(e.target.checked);
// }

// render(){

//     return(

//         <form>

//             <input type="text" placeholder="search" value={this.props.filterText} onChange={this.handleFilterTextChange} />
//             <p>
//                 <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockChange} /> {' '}

//                 only show products in stock
//             </p>
//         </form>
//     );

    
// }
// }

// class ProductTable extends React.Component {

//  render(){

//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     const rows = [];
//     let lastCategory = null ;
//     this.props.products.forEach((product) => {

//         if(product.name.indexOf(filterText) === -1){

//             return ;
//         }

//         if(inStockOnly && !product.stocked){
//             return;
//         }

//         if(product.category !==  lastCategory){
//             rows.push(
//                 <ProductCategoryRow 
//                 category={products.category} 
//                 key={product.category}/>
//             );
//         }

//         rows.push(

//            <ProductRow 
//            product = {product}  
//            key={product.name} />
//         );
//         lastCategory = product.category;
//     });


//  }
// }

// class ProductCategoryRow extends React.Component {

// render(){

//     const category = this.props.category;

//     return (
//         <tr>
//            <th colSpan="2">

//               {category} 
//            </th> 
//         </tr>
//     );
// }
// }

// class ProductRow extends React.Component {

// render(){

// const product = this.props.products;
// const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>;

// return (

//     <tr>

//         <td>
//             {name}
//         </td>
//         <td>
//             {product.price}
//         </td>
//     </tr>
// );
// }
// }








// export default filterableProductTable;
// ReactDOM.render(

//    <FilterableProductTable  products={products} />,

//    document.getElementById('root')
// );