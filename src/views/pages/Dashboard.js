import { Carousel, Row } from "antd";
import classNames from "classnames";
import React, { useRef } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import logo1  from '../../assets/images/1.jpg';
import logo2  from '../../assets/images/2.jpg';
import logo3  from '../../assets/images/3.jpg';
import logo4  from '../../assets/images/4.jpg';
import logo5  from '../../assets/images/5.jpg';
import logo6  from '../../assets/images/6.gif';
import logo7  from '../../assets/images/7.png';
import CountUp from 'react-countup';
// import assam  from '../../assets/images/8.png';
const Dashboard = () => {
  const [collapsed, setCollapsed] = useOutletContext() || [];
  const carousel = useRef({});
  const { innerWidth: width } = window;
  const contentStyle = {
    height: "250px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <React.Fragment>
      <div className=" bg-gray-200 h-full overflow-x-scroll">
        <Row className="w-full flex justify-center items-center justify-items-stretch">
          <Carousel
            style={{
              width: collapsed
                ? window?.screen?.availWidth - 5
                : window?.screen?.availWidth - 205,
            }}
            autoplay
          >
            <div>
            <img src={logo1} style={contentStyle}
                    className="text-sm "
                    alt="logo"
                  />
            </div>
            <div>
            <img src={logo2} style={contentStyle}
                    className="text-sm "
                    alt="logo"
                  />
            </div>
            <div>
            <img src={logo3} style={contentStyle}
                    className="text-sm "
                    alt="logo"
                  />
            </div>
            <div>
                <img src={logo4} style={contentStyle}
                    className="text-sm "
                    alt="logo"
                  />
            </div>
            <div>
                <img src={logo5} style={contentStyle}
                    className="text-sm "
                    alt="logo"
                  />
            </div>
            <div>
                <img src={logo6} style={contentStyle}
                    className="text-sm "
                    alt="logo"
                  />
            </div>
            <div>
                <img src={logo7} style={contentStyle}
                    className="text-sm "
                    alt="logo"
                  />
            </div>
          </Carousel>
        </Row>
        <Row className="relative">
        <div className="flex flex-row justify-center items-center m-4" >
          <div className="w-[400px] h-[200px] aspect-square shadow-sm bg-white snap-center">
              <CountUp start={0} end={158} duration={5} />   
		          <h4><span> Departments </span> </h4>
          <div style={{fontSize:'15px' }}>
            <CountUp start={0} end={158} duration={5} />   
		        <h4>state<span> Departments </span>  </h4>
          </div>
	        <div style={{fontSize:'15px' }}>
            <CountUp start={0} end={162} duration={5} />   
		        <h4>Central<span> Departments </span> </h4> 
          </div>
          </div>
      </div>

      <div className="flex flex-row justify-center items-center m-4">
          <div className="w-[400px] h-[200px] aspect-square shadow-sm bg-white snap-center">
              <CountUp start={0} end={158} duration={3} />   
		          <h4><span> Departments </span> </h4>
          <div style={{fontSize:'15px' }}>
            <CountUp start={0} end={158} duration={3} />   
		        <h4>state<span> Departments </span>  </h4>
          </div>
	        <div style={{fontSize:'15px' }}>
            <CountUp start={0} end={162} duration={3} />   
		        <h4>Central<span> Departments </span> </h4> 
          </div>
          </div>
      </div>


      <div className="flex flex-row justify-center items-center m-4">
          <div className="w-[400px] h-[200px] aspect-square shadow-sm bg-white snap-center">
              <CountUp start={0} end={158} duration={3} />   
		          <h4><span> Departments </span> </h4>
          <div style={{fontSize:'15px' }}>
            <CountUp start={0} end={158} duration={3} />   
		        <h4>state<span> Departments </span>  </h4>
          </div>
	        <div style={{fontSize:'15px' }}>
            <CountUp start={0} end={162} duration={3} />   
		        <h4>Central<span> Departments </span> </h4> 
          </div>
          </div>
      </div>
        </Row>

        <Row className="relative">
          <div
            ref={carousel}
            className="w-full relative overflow-x-scroll scrollbar-none scroll-smooth snap-x"
          >
            <div className="flex w-max py-3 gap-4 px-4 snap-x">
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
              {/* <img
                    src={assam}
                    className="text-sm h-[48px_!important]"
                    alt="logo"
                  /> */}
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                2
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                3
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                4
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                5
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                6
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                7
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                8
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                9
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                10
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                11
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                12
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                13
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                14
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                15
              </div>
              <div className="w-[250px] aspect-square shadow-sm bg-white snap-center">
                16
              </div>
            </div>
          </div>
          <div
            className="absolute left-0 top-[40%] p-5 bg-sky-700 aspect-square rounded-full flex justify-center items-center  z-50"
            onClick={() =>
              carousel?.current?.scroll(carousel?.current?.scrollLeft - 250, 0)
            }
          >
            <span className=" font-bold text-left  text-slate-700 leading-[0px]">
              <FaLessThan size={24} color="white" />
            </span>
          </div>
          <div
            className="absolute right-0 top-[40%] p-5 bg-sky-700 aspect-square rounded-full flex justify-center items-center  z-50"
            onClick={() =>
              carousel?.current?.scroll(250 + carousel?.current?.scrollLeft, 0)
            }
          >
            <span className=" font-bold text-right  text-slate-700 leading-[0px]">
              <FaGreaterThan size={24} color="white" />
            </span>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
