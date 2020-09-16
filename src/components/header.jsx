import React, { Component } from "react";
import category from "./categories";
import "./header.css"
import $ from "jquery"
class Header extends Component {
  state = {selection:"All"};
  componentDidMount(){
    let w=$(".form-inline").width()-($(".drop").width()+$(".submit").width());
  $(".input-field").css({"width":String(w-13)+'px'});
 
;
  
  }
collapseShow=()=>{
  
    $(".togler-cross,.togler-menu").show();
    $(".togler-main").animate({left:0},1000);
    $(".togler-links").animate({left:0},1000);
}
collapseHide=()=>{
     $(".togler-cross,.togler-menu").hide();
    $(".togler-main").animate({left:-400},1000);
    $(".togler-links").animate({left:-400},1000);
}
  componentDidUpdate(){
    let w=$(".form-inline").width()-($(".drop").width()+$(".submit").width());
    $(".input-field").css({"width":String(w-13)+'px'});
    
  }
  onSelect=(name)=>{
    this.setState({selection:name})
  }
  render() {
    return (
      <nav class="nav">
        <button className="toggler" onClick={this.collapseShow}>
          <img src='./assets/toggle.jpg'/>
        </button>
        {/* Toggler  Menu */}
        <div className="togler-main">
            <span><h5>Hello Dear, Please Sign-In</h5></span>
              <div className='togler-links'>
                  <ul>
                    <li><a>Link Goes Here</a></li>
                  </ul>
              </div>
              </div>
          <div className="togler-menu">
            <span className='togler-cross' onClick={this.collapseHide}>X</span>
           {/* End of Togler menu  */}
          </div>

        <span class="logo">
          <img src="./assets/logo.png" />
        </span>
        <form className="form-inline">
          <Drop lebel={this.state.selection}>
              {category.map((item,index)=><DropItem  key={index} onSelect={this.onSelect}>{item}</DropItem>)}
          </Drop>
          <input type="text" className="input-field" />
          <input type="submit" className="submit" value="S" />
        </form>
        <div className="flag">Flag</div>

        <div className="account"><p>Hello, Sign In</p><p><h6>Account & Lists</h6></p>
        <AccountDetails/>

        
        </div>

        <div className="order"><p>Return</p><p><h6>& Orders</h6></p></div>
        <div className="cart">Cart</div>
      </nav>
    );
  }
}

export default Header;

class Drop extends Component {
  state = { clicked: false };
  click = (e) => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="drop" tabindex="1" onClick={this.click} >
        <div className='label'>{this.props.lebel}</div>
        
        {this.state.clicked && <div className="drop-list">
            {this.props.children}
            </div>}
      </div>
    );
  }

}

class DropItem extends Component {
    state = { children:this.props.children }
    render() { 
        return ( 
        
        <div className="drop-item" onClick={()=>this.props.onSelect(this.props.children)}>
            {this.props.children}
        </div> );
    }
}

class  AccountDetails extends Component {
  state = {  }
  render() { 
    return ( <div className="details">
<div className="head">
  <button>Sign In</button>
 <span>New Customer ? <a href="/">Start Here.</a></span>
</div>
<hr/>
<div class="menus">
  <div className="left">
    <ul>
   <h5>Your Lists</h5> 
<li><a>Create a List</a></li>
<li><a>Find a List or Registry</a></li>
<li><a>Find a Gift</a></li>
<li><a>Save Items from the Web</a></li>
<li><a>Wedding Registry</a></li>
<li><a>Baby Registry</a></li>
<li><a>AmazonSmile Charity Lists</a></li>
<li><a>Pantry Lists</a></li>
<li><a>Explore Idea Lists</a></li>
<li><a>Explore Showroom</a></li>
<li><a>Take the Home Style Quiz</a></li>
    </ul>
  </div>
    
  <div className="right">
  <ul>
   <h5>Your Lists</h5> 
<li><a>Create a List</a></li>
<li><a>Find a List or Registry</a></li>
<li><a>Find a Gift</a></li>
<li><a>Save Items from the Web</a></li>
<li><a>Wedding Registry</a></li>
<li><a>Baby Registry</a></li>
<li><a>AmazonSmile Charity Lists</a></li>
<li><a>Pantry Lists</a></li>
<li><a>Explore Idea Lists</a></li>
<li><a>Explore Showroom</a></li>
<li><a>Take the Home Style Quiz</a></li>
</ul>
  </div>

    </div> 
    </div>
    );
  }
}
 