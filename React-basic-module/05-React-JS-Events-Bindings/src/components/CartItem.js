import React from 'react';

class CartItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product : {
                sno : '10ANB',
                image : 'https://images-na.ssl-images-amazon.com/images/I/61WKkuufjBL._AC_SL1500_.jpg',
                name : 'Smart Watch',
                price : 1500,
                qty : 2
            }
        }
    }

    incrQty = () => {
        this.setState({
            product : {
                ...this.state.product,
                qty : this.state.product.qty + 1
            }
        });
    };

    decrQty = () => {
        this.setState({
            product : {
                ...this.state.product,
                qty : (this.state.product.qty - 1 > 0) ? this.state.product.qty - 1 : 1
            }
        });
    };


    render() {
        let {product} = this.state;
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Cart Items</p>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias animi, architecto consequuntur dolore doloremque ducimus est facere, hic mollitia nam optio possimus praesentium quae reprehenderit sequi tempore. Sequi, suscipit?</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <pre>{JSON.stringify(this.state)}</pre>*/}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover text-center table-primary table-striped">
                                    <thead className="bg-dark text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>NAME</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{product.sno}</td>
                                        <td>
                                            <img src={product.image} width="50" height="50" alt=""/>
                                        </td>
                                        <td>{product.name}</td>
                                        <td>&#8377;{product.price}</td>
                                        <td>
                                            <i className="fa fa-minus-circle mx-1" onClick={this.decrQty}/>
                                            {product.qty}
                                            <i className="fa fa-plus-circle mx-1" onClick={this.incrQty}/>
                                        </td>
                                        <td>&#8377;{(product.price * product.qty)}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}
export default CartItem;

