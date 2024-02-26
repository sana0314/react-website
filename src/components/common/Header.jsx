import React from "react";
import { CiSearch } from "react-icons/ci";
import Dropdown from "react-bootstrap/Dropdown";

import DropdownButton from "react-bootstrap/DropdownButton";
import { FaRegBell } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LibraryAddOutlined } from "@mui/icons-material";

export const Header = () => {
  return (
    <>
      <header>
     <div className="wrapper">
      <div className="row py-2 ">
        <div className="col-4  ">
           <img className="h-img" src="./images/logo.png" />
         
        </div>
        <div className="col-4 d-flex ">
        <div className="td" id="logo2">
            <a href="#">
              <i className="fab fa-facebook-square" />
            </a>
          </div>
          <div className="td" id="search-form">
            <form method="get" action="#">
              <div className="row">
                <div className="col-1 search-icon">
                  <CiSearch />
                </div>
                <div className="col-10">
                  <input type="text" placeholder="Search" />
                </div>
              </div>

              <button type="submit">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div class="icon-holder">
                      <div class="pin icon"></div>
                    </div>
                    Canada
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </button>
            </form>
          </div>
        </div>
        <div className="col-4  cover-li d-flex justify-content-center   ">
          <li>  
             <DropdownButton id="dropdown-basic-button"  className="px-2" title="Explore">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
              </DropdownButton>
         </li>
     

             <li className="bell mx-2">    <FaRegBell />  </li>  
             <li className="bell mx-2">    <IoChatboxEllipsesOutline />  </li>  
             <li className="bell mx-2 primaryColor">      <FaPlus />   </li>  
            <li>
              <a href="#" id="p-link">
                  <img src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg" />
                </a>
            </li>
        </div>
      </div>
     </div>
      </header>
    </>
  );
};
