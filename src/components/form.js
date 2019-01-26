import React from 'react';
import "./form.css";

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            discount: 0,
            typeD: "Type",
            des: "",
            sDate: 0,
            sMonth: 0,
            sYear: 0,
            eDate: 0,
            eMonth: 0,
            eYear: 0
        }
    }
    handleChange =  (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //submit to somewhere
    }

    render() {
        return(
            <div style={{ width: '375px'}}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>Title: </h3>
                        <input type="text" value={this.state.title} className="input" name="title" 
                        placeholder="Enter title" onChange={this.handleChange}
                        >
                        </input>
                    </div>

                    <div>
                        <h3>Discount: </h3>
                        <input type="text" value={this.state.discount} className="input1" name="discount" placeholder="eg. 50" onChange={this.handleChange}>
                        </input>
                        <select value={this.state.typeD} name="typeD" onChange={this.handleChange}>
                            <option value="percent"> % </option>
                            <option value="baht">Baht</option>
                        </select>
                    </div>
                    

                    <h3>Description: </h3>
                    <input type="text" value={this.state.des} className="input" name="des" placeholder="Enter your description"
                        onChange={this.handleChange}>
                    </input>

                    <h3>Validation: </h3>

                    <h6> From: </h6>
                    <div style={{margin: '0px 80px'}}>
                        <input type="text" value={this.state.sDate} className="input2" name="sDate" placeholder="Date" onChange={this.handleChange}>
                        </input>
                        <input type="text" value={this.state.sMonth} className="input2" name="sMonth" placeholder="Month" onChange={this.handleChange}>
                        </input>
                        <input type="text" value={this.state.sYear} className="input2" name="sYear" placeholder="Year" onChange={this.handleChange}>
                        </input>
                    </div>


                    <h6> Until: </h6>
                    <div style={{margin: '0px 80px'}}>
                        <input type="text" value={this.state.eDate} className="input2" name="sDate" placeholder="Date" onChange={this.handleChange}>
                        </input>
                        <input type="text" value={this.state.eMonth} className="input2" name="eMonth" placeholder="Month" onChange={this.handleChange}>
                        </input>
                        <input type="text" value={this.state.eYear} className="input2" name="eYear" placeholder="Year" onChange={this.handleChange}>
                        </input>
                    </div>

                    <div id="location">
                        <h3> Location </h3>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51UW1849rJL._SX466_.jpg"/>
                    </div>

                    <div id="button">
                        <button>Send Coupon!</button>
                    </div>
                </form>
                

            </div>
            
        );
    }
}