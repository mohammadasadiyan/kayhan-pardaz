import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Banner from "../images/picture.png";
import ArticlePhoto from "../images/article-photo.png";
import Mohammad from "../images/mohammadasadiyan.png";
import Footer from "./Footer"
const Home = () => {
  return (
    <div className="container-topbar">
      <header>
        <Link>
          <img src={logo} alt="Logo" width="100px" height="80px" />
        </Link>
        <Link to="/">
          <a>خانه</a>
        </Link>
        <Link to="/store">
          <a>خدمات</a>
        </Link>
        <Link to="/blog">
          <a>تیم</a>
        </Link>
        <Link to="/contact">
          <a>ارتباط</a>
        </Link>
        <button className="btn btn-primary">پنل کاربری</button>
      </header>
      <div className="wrapper">
        <div className="content">
          <h1 className="title">چرا کیهان پرداز؟</h1>
          <p className="paragraph">
            یک سامانه جامع هوشمند برای مدیریت کسب‌وکار به افزایش فروش، کاهش
            هزینه‌ها و تسهیل عملیات هر کسب‌وکار کمک کنیم.
          </p>
          <button className="btn-contact">ارتباط با ما</button>
        </div>
        <div id="showcase">
          <img src={Banner} />
        </div>
      </div>
      
      <section className="articles">
        <h3 className="topic">مقالات جدید</h3>
        <div className="article">
          <div className="card" style={{ width: "18rem" }}>
            <img src={ArticlePhoto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">card title</h5>
              <p className="card-text">
                ome quick example text to build on the card title and make up
                the bulk
              </p>
              <a href="#" className="btn btn-primary">
                read More
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={ArticlePhoto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">card title</h5>
              <p className="card-text">
                ome quick example text to build on the card title and make up
                the bulk
              </p>
              <a href="#" className="btn btn-primary">
                read More
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={ArticlePhoto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">card title</h5>
              <p className="card-text">
                ome quick example text to build on the card title and make up
                the bulk
              </p>
              <a href="#" className="btn btn-primary">
                read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="team-title">
          <h3 className="team-title">تیم با استعداد و مترجب</h3>
          <h6>تمامی اعضا و دوستان تیم</h6>
        </div>
        
      </section>
      <section className="team-profile">
      <div className="border-card">
          <div className="profile">
            <div className="mohammadasadiyan">
              <img className="profile-image" src={Mohammad} />
              <h3 className="profile-name">mohammad asadiyan</h3>
              <h6 className="profile-skills">front end developer</h6>
              <p className="profile-experience">
                برنامه نویس | فرانت اند | طراح رابط کاربری
              </p>
              <button className="btn btn-primary profile-readmore">
                درباره من
              </button>
            </div>
          </div>
        </div>
        <div className="border-card">
          <div className="profile">
            <div className="mahyarjamshidnezhad">
              <img className="profile-image" src={Mohammad} />
              <h3 className="profile-name">mohammad asadiyan</h3>
              <h6 className="profile-skills">front end developer</h6>
              <p className="profile-experience">
                برنامه نویس | فرانت اند | طراح رابط کاربری
              </p>
              <button className="btn btn-primary profile-readmore">
                درباره من
              </button>
            </div>
          </div>
        </div>
        <div className="border-card">
          <div className="profile">
            <div className="pejman">
              <img className="profile-image" src={Mohammad} />
              <h3 className="profile-name">mohammad asadiyan</h3>
              <h6 className="profile-skills">front end developer</h6>
              <p className="profile-experience">
                برنامه نویس | فرانت اند | طراح رابط کاربری
              </p>
              <button className="btn btn-primary profile-readmore">
                درباره من
              </button>
            </div>
          </div>
        </div>
        <div className="border-card">
          <div className="profile">
            <div className="ahmad">
              <img className="profile-image" src={Mohammad} />
              <h3 className="profile-name">mohammad asadiyan</h3>
              <h6 className="profile-skills">front end developer</h6>
              <p className="profile-experience">
                برنامه نویس | فرانت اند | طراح رابط کاربری
              </p>
              <button className="btn btn-primary profile-readmore">
                درباره من
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
