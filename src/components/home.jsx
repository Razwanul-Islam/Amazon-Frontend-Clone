import React, { Component } from "react";
import Banner from "./banner";
import "./home.css";
import cards from "./cards";
import HProduct from "./hsproducts";
import { Product } from "./hsproducts";
import row from "./hcards";
import $ from "jquery";
import { string } from "prop-types";
class Home extends Component {
  state = {};
  componentDidMount() {
    const hh = $(".home").height();
    const hc = $(".content").height();
    const hf = String(hh + hc + 200) + "px";
    $(".home").css({ height: hf });
    
  }
  BackToTop=()=>{
    $("html,body").animate({ scrollTop: 0}, 1000);
  }
  render() {
    return (
      <div className="home">
        <Banner />
        <div className="pcontent">
          <div className="content">
            <CardContainer>
              {cards.map((data) => (
                <Card data={data} />
              ))}
            </CardContainer>
            {/* product lists in horizontal view*/}
            {row.map((crow, index) => (
              <HProduct key={index} title={crow.title}>
                {crow.products.map((data, ind) => (
                  <Product img={data} />
                ))}
              </HProduct>
            ))}
          </div>

          <div style={{ paddingTop: "20px", background: "white" }}>
            <div
              style={{
                height: "120px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <hr />
              <div className="rhf-header">
                Your recently viewed items and featured recommendations
              </div>
              <div className="rvi-container">
                <span className="no-rvi-message">
                  After viewing product detail pages, look here to find an easy
                  way to navigate back to pages you are interested in.
                </span>
                <div className="f">
                  <div className="ybh-edit-arrow"> › </div>
                  <div className="ybh-edit-link">
                    <a href="https://www.amazon.com/gp/yourstore/pym/ref=pd_pyml_rhf">
                      View or edit your browsing history
                    </a>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>

          {/* <!-- Back to top section --> */}
          <div className="back-to-top" onClick={this.BackToTop}>
            <div>Back to top</div>
          </div>

          {/*  Bottom Container           */}
          <div className="bottom-container">
            <div className="bottom-menu">
              <div>
                {/* <span className='title'>Get to Know Us</span> */}
                <ul>
                  <li className="title">
                    <a>Get to Know Us</a>
                  </li>
                  <li>
                    <a href="#"> Careers</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">About Amazon</a>
                  </li>
                  <li>
                    <a href="#">Sustainability</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Amazon Devices</a>
                  </li>
                  <li>
                    <a href="#">Amazon Tours</a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className="title">
                    <a> Make Money with Us</a>
                  </li>
                  <li>
                    <a href="#"> Sell on Amazon</a>
                  </li>
                  <li>
                    <a href="#">Sell on Amazon Business</a>
                  </li>
                  <li>
                    <a href="#">Sell Your Apps on Amazon</a>
                  </li>
                  <li>
                    <a href="#">Become an Affiliate</a>
                  </li>
                  <li>
                    <a href="#">Advertise Your Products</a>
                  </li>
                  <li>
                    <a href="#">Self-Publish with Us</a>
                  </li>
                  <li>
                    <a href="#">Host an Amazon Hub</a>
                  </li>
                  <li>
                    <a href="#">›See More Make Money with Us</a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className="title">Amazon Payment Products</li>
                  <li>
                    <a href="#">Amazon Business Card</a>
                  </li>
                  <li>
                    <a href="#">Shop with Points</a>
                  </li>
                  <li>
                    <a href="#">Reload Your Balance</a>
                  </li>
                  <li>
                    <a href="#">Amazon Currency Converter</a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className="title">Let Us Help You</li>
                  <li>
                    <a href="#">Amazon and COVID-19</a>
                  </li>
                  <li>
                    <a href="#">Your Account Your Orders</a>
                  </li>
                  <li>
                    <a href="#">Shipping Rates & Policies</a>
                  </li>
                  <li>
                    <a href="#">Returns & Replacements</a>
                  </li>
                  <li>
                    <a href="#">Manage Your Content and Devices</a>
                  </li>
                  <li>
                    <a href="#">Amazon Assistant</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*  end of bottom menu           */}
            <div className="button-container">
              <button>English</button>
              <button>USD = U.S Dollar</button>
              <button>United States</button>
            </div>
          </div>
          {/*  end of bottom container           */}

          <BottomLinks/>
<div className="footer">
<a href=''>Conditions of Uses</a><a href=''>Privacy</a> <a href=''>NoticeInterest-Based Ads©</a> <span>1996-2020, Amazon.com, Inc. or its affiliates</span>
</div>
        </div>
        {/* End of Content */}
      </div>
    );
  }
}

export default Home;

//Custom Component

// Card Container
class CardContainer extends Component {
  render() {
    return <div className="row">{this.props.children}</div>;
  }
}
//Card Component
class Card extends Component {
  render() {
    return (
      <div className="col-3 col-md-3 col-sm-6 col-xs-12">
        <div className="Card">
          <CardTitle>{this.props.data.title}</CardTitle>
          {this.props.data.image !== "" ? (
            <img src={this.props.data.image} />
          ) : (
            <button className="btn-card">Sign In Securly</button>
          )}
          {this.props.data.linktext !== "" && (
            <a class="card-link" href={this.props.data.link}>
              {this.props.data.linktext}
            </a>
          )}
        </div>
      </div>
    );
  }
}
//Card Title
class CardTitle extends Component {
  render() {
    return (
      <div className="card-title">
        <h4>{this.props.children}</h4>
      </div>
    );
  }
}

//Component for Bottom Links
class BottomLinks extends Component {
  state = {};
  render() {
    return <div className="bottom-links">

    <ul>
      <li><a href='#'><span> Amazon Music</span><span className='linkD'>Stream millions
of songs</span></a></li>
      <li><a href='#'><span> Alexa</span><span className='linkD'>Actionable Analytics
for the Web</span></a></li>
      <li><a href='#'><span> Amazon Rapids</span><span className='linkD'>Fun stories for
kids on the go</span></a></li>
      <li><a href='#'><span> CreateSpace</span><span className='linkD'>Indie Print Publishing
Made Easy</span></a></li>
      <li><a href='#'><span> IMDbPro</span><span className='linkD'>Get Info Entertainment
Professionals Need	</span></a></li>
      <li><a href='#'><span> Ring</span><span className='linkD'>Smart Home
Security Systems</span></a></li>
    </ul>


    <ul>
      <li><a href='#'><span> Amazon Advertising</span><span className='linkD'>Find, attract, and
engage customers</span></a></li>
      <li><a href='#'><span> Sell on Amazon</span><span className='linkD'>Start a Selling Account	</span></a></li>
      <li><a href='#'><span>Amazon Web Services</span><span className='linkD'>Scalable Cloud
Computing Services</span></a></li>
      <li><a href='#'><span> 	DPReview</span><span className='linkD'>Digital
Photography</span></a></li>
      <li><a href='#'><span> Kindle Direct Publishing</span><span className='linkD'>Indie Digital Publishing
Made Easy</span></a></li>
      <li><a href='#'><span> eero WiFi</span><span className='linkD'>Stream 4K Video
in Every Room</span></a></li>
    </ul>


    <ul>
      <li><a href='#'><span>	Amazon Drive </span><span className='linkD'>Cloud storage
from Amazon</span></a></li>
      <li><a href='#'><span> Amazon Business</span><span className='linkD'>Everything For
Your Business</span></a></li>
      <li><a href='#'><span> 	Audible</span><span className='linkD'>Listen to Books & Original
Audio Performances		Book Depository
</span></a></li>
      <li><a href='#'><span> 	East Dane</span><span className='linkD'>Designer Men's
Fashion</span></a></li>
      <li><a href='#'><span> Prime Video Direct</span><span className='linkD'>Video Distribution
Made Easy</span></a></li>
      <li><a href='#'><span> Neighbors App</span><span className='linkD'>Real-Time Crime
& Safety Alerts</span></a></li>
    </ul>


    <ul>
      <li><a href='#'><span>6pm</span><span className='linkD'>Score deals
on fashion brands</span></a></li>
      <li><a href='#'><span> AmazonGlobal</span><span className='linkD'>Ship Orders
Internationally</span></a></li>
      <li><a href='#'><span>Book Depository </span><span className='linkD'>Books With Free
Delivery Worldwide</span></a></li>
      <li><a href='#'><span>Fabric</span><span className='linkD'>Sewing, Quilting
& Knitting</span></a></li>
      <li><a href='#'><span> Shopbop</span><span className='linkD'>Designer
Fashion Brands</span></a></li>
      <li><a href='#'><span> Amazon Subscription Boxes
</span><span className='linkD'>Top subscription boxes – right to your door</span></a></li>
    </ul>
    

    <ul>
      <li><a href='#'><span> AbeBooks</span><span className='linkD'>Books, art
& collectibles</span></a></li>
      <li><a href='#'><span> Home Services</span><span className='linkD'>Experienced Pros
Happiness Guarantee</span></a></li>
      <li><a href='#'><span> Box Office Mojo</span><span className='linkD'>Find Movie
Box Office Data</span></a></li>
      <li><a href='#'><span> Goodreads</span><span className='linkD'>Book reviews
& recommendations</span></a></li>
      <li><a href='#'><span> Woot</span><span className='linkD'>Deals and
Shenanigans</span></a></li>
      <li><a href='#'><span> 	PillPack</span><span className='linkD'>Pharmacy Simplified	</span></a></li>
    </ul>

    
    <ul>
      <li><a href='#'><span> ACX</span><span className='linkD'>Audiobook Publishing
Made Eas</span></a></li>
      <li><a href='#'><span>	Amazon Ignite</span><span className='linkD'>Sell your original
Digital Educational
Resources</span></a></li>
      <li><a href='#'><span> ComiXology</span><span className='linkD'>Thousands of
Digital Comics</span></a></li>
      <li><a href='#'><span> IMDb</span><span className='linkD'>Movies, TV
& Celebrities</span></a></li>
      <li><a href='#'><span> Zappos</span><span className='linkD'>Shoes &
Clothing</span></a></li>
      <li><a href='#'><span>Amazon Second Chance </span><span className='linkD'>Pass it on, trade it in,
give it a second life</span></a></li>      
    </ul>

    </div>;
  }
}


