import React from 'react'
import {
            BrowserRouter as Router,
            Switch,
            Route,
            Link
} from "react-router-dom"; 





import logo from '../assets/images/logo/logo.png';

import slider1 from '../assets/images/slider/1.jpg';
import slider2 from '../assets/images/slider/2.jpg';
import slider3 from '../assets/images/slider/3.jpg';

import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/fonts/flaticon.css';

export default function Header() {
  return (
    <Router>
    <div className="Header">
    
     <div class="header-top">
            <div class="container clearfix">
            
                <div class="top-left pull-left">
                    <ul class="links-nav clearfix">
                        <li><a href="#"><span class="fa fa-phone"></span> Call:  123 4561 5523 </a>
                        </li>
                        <li><a href="#"><span class="fa fa-envelope"></span>Email:  info@templatepath.com</a>
                        </li>
                    </ul>
                </div>

               
                <div class="top-right pull-right">
                    <ul class="social-links clearfix">
                        <li><a href="#"><span class="fa fa-facebook-f"></span></a>
                        </li>
                        <li><a href="#"><span class="fa fa-twitter"></span></a>
                        </li>
                        <li><a href="#"><span class="fa fa-linkedin"></span></a>
                        </li>
                        <li><a href="#"><span class="fa fa-instagram"></span></a>
                        </li>
                        <li><a href="#"><span class="fa fa-pinterest-p"></span></a>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
        <section class="mainmenu-area stricky">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="main-logo">
                            <a href="index-2.html"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                    <div class="col-md-5 menu-column">
                        <nav class="main-menu">
                            <div class="navbar-header">     
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="navbar-collapse collapse clearfix">
                                <ul class="navigation clearfix">

                                    <li class="current"><a href="index-2.html">Home</a>
                                    </li>
                                    <li><a href="/about">About</a>
                                    </li>
                                    <li class="dropdown"><a href="#">Services</a>
                                        <ul>
                                            <li><a href="service.html">Services</a>
                                            </li>
                                            <li><a href="courses.html">Courses</a>
                                            </li>
                                            <li><a href="course-details.html">Course Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="gallery.html">Gallery</a>
                                            </li>
                                            <li><a href="team.html">Teachers</a>
                                            </li>
                                            <li><a href="team-profile.html">Teachers Profile</a>
                                            </li>
                                            <li><a href="Faq.html">Faq</a>
                                            </li>
                                            <li><a href="error.html">Error</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="dropdown"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog-with-sidebar.html">Blog With Sidebar</a>
                                            </li>
                                            <li><a href="blog-details.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a>
                                    </li>
                                </ul>

                                <ul class="mobile-menu clearfix">

                                    <li class="current"><a href="/">Home</a>
                                </li>
                                <li><a href="/about">About</a>
                                </li>
                                <li class="dropdown"><a href="#">Services</a>
                                    <ul>
                                        <li><a href="service.html">Services</a>
                                        </li>
                                        <li><a href="courses.html">Courses</a>
                                        </li>
                                        <li><a href="course-details.html">Course Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="gallery.html">Gallery</a>
                                        </li>
                                        <li><a href="team.html">Teachers</a>
                                        </li>
                                        <li><a href="team-profile.html">Teachers Profile</a>
                                        </li>
                                        <li><a href="Faq.html">Faq</a>
                                        </li>
                                        <li><a href="error.html">Error</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="dropdown"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-with-sidebar.html">Blog With Sidebar</a>
                                        </li>
                                        <li><a href="blog-details.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a>
                                </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="col-md-2">
                        <div class="right-area pull-right">
                            <div class="top-search-box">
                                <button><i class="fa fa-search"></i>
                                </button>
                                <ul class="search-box">
                                    <li>
                                       


                                    </li>
                                </ul>
                            </div>
                            <div class="cart">
                                <a href="#"><span class="fa fa-shopping-bag"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

    </div>

    <Switch>
  
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/contact">
                    <Contact></Contact>
                </Route>
                <Route path="/users">
                    <Users></Users>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>

            </Switch>
    </Router>
  );
}

function Home()
{
    return <div>
    laksdflj
    <section class="rev_slider_wrapper">
            <div id="slider1" class="rev_slider" data-version="5.0">
                <ul>

                    <li data-transition="fade">
                        <img src={slider1} alt="" width="1920" height="700" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />


                        <div class="tp-caption  tp-resizeme" data-x="center" data-hoffset="0" data-y="top" data-voffset="230" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="700">
                            <div class="slide-content-box">
                                <h1>Kindergarten Education for your Child</h1>
                            </div>
                        </div>
                        <div class="tp-caption  tp-resizeme" data-x="center" data-hoffset="0" data-y="top" data-voffset="310" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="700">
                            <div class="slide-content-box">
                                <p>Cupidatat non proident sunt culpa qui officia deserunt mollit
                                    <br/> anim idest laborum </p>
                            </div>
                        </div>
                        <div class="tp-caption tp-resizeme" data-x="center" data-hoffset="0" data-y="top" data-voffset="400" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="700">
                            <div class="slide-content-box">
                                <div class="button">
                                    <a class="thm-btn yellow-bg" href="contact.html">contact us</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li data-transition="fade">
                        <img src={slider2} alt="" width="1920" height="700" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />


                        <div class="tp-caption  tp-resizeme" data-x="center" data-hoffset="0" data-y="top" data-voffset="230" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="700">
                            <div class="slide-content-box">
                                <h1>Kindergarten Education for your Child</h1>
                            </div>
                        </div>
                        <div class="tp-caption  tp-resizeme" data-x="center" data-hoffset="0" data-y="top" data-voffset="310" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="700">
                            <div class="slide-content-box">
                                <p>Cupidatat non proident sunt culpa qui officia deserunt mollit
                                    <br/> anim idest laborum </p>
                            </div>
                        </div>
                        <div class="tp-caption tp-resizeme" data-x="center" data-hoffset="0" data-y="top" data-voffset="400" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="700">
                            <div class="slide-content-box">
                                <div class="button">
                                    <a class="thm-btn yellow-bg" href="contact.html">contact us</a>
                                </div>
                            </div>
                        </div>

                    </li>
                    <li data-transition="fade">
                        <img src={slider3} alt="" width="1920" height="700" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />


                        <div class="tp-caption  tp-resizeme" data-x="center" data-hoffset="0" data-y="top" data-voffset="230" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="700">
                            <div class="slide-content-box">
                                <h1>Kindergarten Education for your Child</h1>
                            </div>
                        </div>
                        <div class="tp-caption  tp-resizeme" data-x="center" data-hoffset="0" data-y="top" data-voffset="310" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="700">
                            <div class="slide-content-box">
                                <p>Cupidatat non proident sunt culpa qui officia deserunt mollit
                                    <br/> anim idest laborum </p>
                            </div>
                        </div>
                        <div class="tp-caption tp-resizeme" data-x="center" data-hoffset="0" data-y="top" data-voffset="400" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="700">
                            <div class="slide-content-box">
                                <div class="button">
                                    <a class="thm-btn yellow-bg" href="contact.html">contact us</a>
                                </div>
                            </div>
                        </div>

                    </li>


                </ul>
            </div>
        </section>
    </div>;
}
function About()
{
    return <h2>Hello About Us</h2>;
}
function Contact()
{
    return <h2>Hello Contact Us</h2>;
}
function Users()
{
    return <h2>Hello Users</h2>;
}