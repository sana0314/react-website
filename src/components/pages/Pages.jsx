import React from "react";
import { Header } from "../common/Header";
import Footer from "../common/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditProfile from "../common/EditProfile";
import { CiImageOn } from "react-icons/ci";
import { GiHeartPlus } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { IoChatboxOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiFaceSmile } from "react-icons/ci";
import { RiAttachment2 } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import ProfileHeader from "../common/ProfileHeader";

export const Pages = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="wrapper">
          <div className="row">
            <div className="col-12 pb-4">
              <ProfileHeader />
            </div>
            <div className="col-12 pt-2">
              <div className="content py-4">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="row">
                      <div className="col-12   pt-4 ">
                        <Card>
                          <Card.Body>
                            <Card.Title>About</Card.Title>
                            <div className="mb-2 color-primary">
                              consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam,
                            </div>
                            <Card.Text>
                              <section class="section pt-4">
                                <div class="section__item border-right">
                                  <p className="color-primary">Posts</p>
                                  <div className="text-size">1.3k</div>
                                </div>
                                <div class="section__item border-right">
                                  <p className="color-primary">Following</p>
                                  <div className="text-size">3,154</div>
                                </div>

                                <div class="section__item">
                                  <p className="color-primary">Followers</p>
                                  <div className="text-size">2054</div>
                                </div>
                              </section>
                            </Card.Text>
                            <div className="icons-links color-primary">
                              <li className="py-2" href="#">
                                <IoLocationOutline />
                                <span className="px-2">Yogyakarta, ID</span>
                              </li>
                              <li className="py-2">
                                <GiHeartPlus />
                                <span className="px-2">Single</span>
                              </li>
                              <li className="py-2">
                                <IoCalendarOutline />
                                <span className="px-2">Joined June 2012</span>
                              </li>
                              <li className="py-2" href="#">
                                <TbWorld />
                                <span className="px-2">dribble.com/fawait</span>
                              </li>
                              <li className="py-2" href="#">
                                <LuShoppingBag />
                                <span className="px-2">
                                  Working at Sebo Studio
                                </span>
                              </li>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-12  pt-4 ">
                        <Card>
                          <Card.Body>
                            <div className="row">
                              <div className="col-6">
                                <Card.Title>Photos</Card.Title>
                              </div>
                              <div className="col-6 text-end">
                                <span className="primaryColor">View All</span>
                              </div>
                            </div>

                            <div className="row viewall-pic ">
                              <div className="col-6">
                                <div className="row ">
                                  <div className="col-12 ">
                                    <img
                                      src="https://www.katherinesflorists.co.uk/wp-content/uploads/2020/10/pexels-ylanite-koppens-776653.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-12">
                                    <img
                                      src="https://png.pngtree.com/background/20230522/original/pngtree-cute-flower-hd-wallpapers-for-mobile-picture-image_2693269.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="row">
                                  <div className="col-12">
                                    <img
                                      src="https://infobyatee.com/wp-content/uploads/2023/12/5313a0926a5b2ef53b3001335b03c846.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-12">
                                    <img
                                      src="https://c0.wallpaperflare.com/preview/399/148/866/4k-wallpaper-beautiful-beautiful-flowers-bloom.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="row">
                      <div className="col-12 pt-4 ">
                        <Card>
                          <Card.Body>
                            <div className="row">
                              <div className="col-1">
                                <img
                                  className="cards-image"
                                  src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                                  alt="Profile pic"
                                />
                              </div>
                              <div className="col-11">
                                <div className="" id="composer">
                                  <div id="c-c-main">
                                    <div className="" id="c-inp">
                                      <input
                                        type="text"
                                        placeholder="Post Something...."
                                      />
                                    </div>

                                    <div id="c-image">
                                      <CiImageOn />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-12 pt-4 ">
                        <Card>
                          <Card.Body>
                            <div className="row">
                              <div className="col-2 col-md-1">
                                <img
                                  className="cards-image"
                                  src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                                  alt="Profile pic"
                                />
                              </div>
                              <div className="col-9 col-md-10">
                                <div className="size">Ahmad Nur Fawaid</div>
                                <div className="p-dt">
                                  <span> 12 April at 09.28 PM </span>
                                </div>
                              </div>
                              <div className="col-1">
                                <HiOutlineDotsHorizontal />
                              </div>
                              <div className="col-12 p-4">
                                Peace On Earth A Wonderful Wish But No Way
                              </div>

                              <div className="row px-4 ">
                                <div className="border-tb d-flex ">
                                <div className="col col-sm-4">
                           
                                  <IoChatboxOutline />
                                  <span className="px-2">7 comments</span>
                                </div>
                                <div className="col col-sm-4"> 
                                <CiHeart />
                                    <span className="px-2">12 Likes</span></div>
                                <div className="col col-sm-4 ">
                                <IoMdShare />
                                    <span className="">0 Share</span>
                                </div>
                              </div>
                         
                              <div className="">
                                <div className="row pt-4">
                                  <div className="col-2 col-md-1">
                                    <img
                                      className="cards-image"
                                      src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                                      alt="Profile pic"
                                    />
                                  </div>
                                  <div className="col-10 col-md-11 comment-section">
                                    <div className="" id="composer">
                                      <div id="c-c-main">
                                        <div className="" id="c-inp">
                                          <input
                                            type="text"
                                            placeholder="Write your comment"
                                          />
                                        </div>

                                        <div id="c-image">
                                          <RiAttachment2 />
                                          <CiFaceSmile />
                                          <CiImageOn />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-12 pt-4 ">
                        <Card>
                          <Card.Body>
                            <div className="row">
                              <div className="col-2 col-md-1">
                                <img
                                  className="cards-image"
                                  src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                                  alt="Profile pic"
                                />
                              </div>
                              <div className="col-9 col-md-10">
                                <div className="size">Ahmad Nur Fawaid</div>
                                <div className="p-dt">
                                  <span> 12 April at 09.28 PM </span>
                                </div>
                              </div>
                              <div className="col-1">
                                <HiOutlineDotsHorizontal />
                              </div>
                              <div className="col-12 p-4">
                                One of the perks of working in an international
                                company is sharing knowledge with your
                                colleagues.
                              </div>
                              <div className="row pb-4 ">
                                <div className="col-6">
                                  <div className="row ">
                                    <div className="col-12 post">
                                      <img
                                        className=" p-image"
                                        style={{
                                          height: "324px",
                                          width: "100%",
                                        }}
                                        src="https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6 ">
                                  <div className="row">
                                    <div className="col-12 mb-4">
                                      <img
                                        className=" p-image"
                                        style={{
                                          height: "150px",
                                          width: "100%",
                                        }}
                                        src="https://24slides.com/presentbetter/content/images/wordpress/2018/12/company-profile-presentation-tips.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="col-12">
                                      <img
                                        className=" p-image"
                                        style={{
                                          height: "150px",
                                          width: "100%",
                                        }}
                                        src="https://24slides.com/presentbetter/content/images/wordpress/2018/12/company-profile-presentation-tips.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row px-4 ">
                                <div className="border-tb d-flex ">
                                <div className="col col-sm-4">
                           
                                  <IoChatboxOutline />
                                  <span className="px-2">7 comments</span>
                                </div>
                                <div className="col col-sm-4"> 
                                <CiHeart />
                                    <span className="px-2">12 Likes</span></div>
                                <div className="col col-sm-4 ">
                                <IoMdShare />
                                    <span className="">0 Share</span>
                                </div>
                              </div>
                         
                              <div className="">
                                <div className="row pt-4">
                                  <div className="col-2 col-md-1">
                                    <img
                                      className="cards-image"
                                      src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                                      alt="Profile pic"
                                    />
                                  </div>
                                  <div className="col-10 col-md-11 comment-section">
                                    <div className="" id="composer">
                                      <div id="c-c-main">
                                        <div className="" id="c-inp">
                                          <input
                                            type="text"
                                            placeholder="Write your comment"
                                          />
                                        </div>

                                        <div id="c-image">
                                          <RiAttachment2 />
                                          <CiFaceSmile />
                                          <CiImageOn />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                               
                              </div>
                            
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-12">
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
