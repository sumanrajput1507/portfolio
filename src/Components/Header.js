import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => { 
  const [theme, setTheme] = useState('light_theme')
  const[nav,setNav]=useState(false)
 const toggleTheme = () =>{
    if(theme === 'light_theme'){
      setTheme('dark_theme')
      setNav(!nav)
    }else{
      setTheme('light_theme')
      setNav(!nav)

    }
    console.log("hello")
  }
    useEffect(() => {
    document.body.className = theme
  }, [theme]);

  const showMenu =()=>{
    
  }
  return (
    <>
      <header>
        <div>
          <img src="" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              {" "}
              <NavLink to="/">
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width={512}
                    height={512}
                    x={0}
                    y={0}
                    viewBox="0 0 511 511.999"
                    style={{
                      enableBackground: "new 0 0 512 512",
                    }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
                        fill="#44566c"
                        data-original="#000000"
                        opacity={1}
                      />
                    </g>
                  </svg>
                </span>
                <span>{props.home}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width={512}
                    height={512}
                    x={0}
                    y={0}
                    viewBox="0 0 512 512"
                    style={{
                      enableBackground: "new 0 0 512 512",
                    }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zm0 240c-57.897 0-105-47.103-105-105S198.103 30 256 30s105 47.103 105 105-47.103 105-105 105zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805zM61.66 482c7.515-85.086 78.351-152 164.34-152h60c85.989 0 156.825 66.914 164.34 152H61.66z"
                        fill="#44556c"
                        data-original="#000000"
                        opacity={1}
                      />
                    </g>
                  </svg>
                </span>
                <span>{props.about}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width={512}
                    height={512}
                    x={0}
                    y={0}
                    viewBox="0 0 462 462"
                    style={{
                      enableBackground: "new 0 0 512 512",
                    }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M397.35 132.52 287.76 22.93a9.61 9.61 0 0 0-7.07-2.93h-179a40 40 0 0 0-40 40v342a40 40 0 0 0 40 40h258.59a40 40 0 0 0 40-40V139.59a10.07 10.07 0 0 0-2.93-7.07zm-31.21-2.93h-60.45a15 15 0 0 1-15-15V54.14zM360.28 422H101.72a20 20 0 0 1-20-20V60a20 20 0 0 1 20-20h169v74.59a35 35 0 0 0 35 35h74.59V402a20 20 0 0 1-20.03 20z"
                        fill="#44566c"
                        data-original="#000000"
                        opacity={1}
                      />
                      <path
                        d="M190.83 174a40.5 40.5 0 1 0-40.5-40.5 40.55 40.55 0 0 0 40.5 40.5zm0-61a20.5 20.5 0 1 1-20.5 20.5 20.53 20.53 0 0 1 20.5-20.5zM132.22 251.5a10 10 0 0 0 10-10v-6.1a37.11 37.11 0 0 1 37.06-37.06h23.1a37.11 37.11 0 0 1 37.06 37.06v6.1a10 10 0 0 0 20 0v-6.1a57.13 57.13 0 0 0-57.06-57.06h-23.1a57.13 57.13 0 0 0-57.06 57.06v6.1a10 10 0 0 0 10 10zM126.65 324.67H248a10 10 0 0 0 0-20H126.65a10 10 0 1 0 0 20zM316.65 357.33h-190a10 10 0 1 0 0 20h190a10 10 0 0 0 0-20z"
                        fill="#44566c"
                        data-original="#000000"
                        opacity={1}
                      />
                    </g>
                  </svg>
                </span>
                <span>{props.resume}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/work">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width={512}
                    height={512}
                    x={0}
                    y={0}
                    viewBox="0 0 480 480"
                    style={{
                      enableBackground: "new 0 0 512 512",
                    }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M456 72H352V40c-.027-22.082-17.918-39.973-40-40H168c-22.082.027-39.973 17.918-40 40v32H24C10.746 72 0 82.746 0 96v178.078a24.105 24.105 0 0 0 16 22.586V408c0 13.254 10.746 24 24 24h400c13.254 0 24-10.746 24-24V296.672a24.113 24.113 0 0 0 16-22.594V96c0-13.254-10.746-24-24-24zM144 40c0-13.254 10.746-24 24-24h144c13.254 0 24 10.746 24 24v32h-16V40a8 8 0 0 0-8-8H168a8 8 0 0 0-8 8v32h-16zm160 32H176V48h128zm144 336a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V299.414l176 24.274V344c0 13.254 10.746 24 24 24h16c13.254 0 24-10.746 24-24v-20.313l176-24.273zm-192-64a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8zm208-69.922a8 8 0 0 1-6.879 7.93l-2.219.305L272 307.534V296c0-13.254-10.746-24-24-24h-16c-13.254 0-24 10.746-24 24v11.535L22.887 282.008a8.001 8.001 0 0 1-6.887-7.93V96a8 8 0 0 1 8-8h432a8 8 0 0 1 8 8zm0 0"
                        fill="#44566c"
                        data-original="#000000"
                        opacity={1}
                      />
                    </g>
                  </svg>
                </span>
                <span>{props.work}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsSvgjs="http://svgjs.com/svgjs"
                    width={512}
                    height={512}
                    x={0}
                    y={0}
                    viewBox="0 0 560 560"
                    style={{
                      enableBackground: "new 0 0 512 512",
                    }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M397.668 0H102.293c-34.512.016-62.488 27.988-62.5 62.5v27H10.418c-6.906 0-12.5 5.598-12.5 12.5s5.594 12.5 12.5 12.5h29.246v82H10.418c-6.906 0-12.5 5.594-12.5 12.5 0 6.902 5.594 12.5 12.5 12.5h29.246v82H10.418c-6.906 0-12.5 5.598-12.5 12.5 0 6.906 5.594 12.5 12.5 12.5h29.246v82H10.418c-6.906 0-12.5 5.598-12.5 12.5s5.594 12.5 12.5 12.5h29.246v27c.016 34.512 27.988 62.484 62.5 62.5H397.54c34.512-.016 62.492-27.988 62.5-62.5v-400C460.09 28.012 432.156.023 397.668 0zm37.5 462.5c-.063 20.684-16.816 37.441-37.5 37.5H102.293c-20.684-.059-37.441-16.816-37.5-37.5v-27h29.246c6.906 0 12.5-5.598 12.5-12.5s-5.594-12.5-12.5-12.5H64.793v-82h29.246c6.906 0 12.5-5.594 12.5-12.5 0-6.902-5.594-12.5-12.5-12.5H64.793v-82h29.246c6.906 0 12.5-5.598 12.5-12.5 0-6.906-5.594-12.5-12.5-12.5H64.793v-82h29.246c6.906 0 12.5-5.598 12.5-12.5s-5.594-12.5-12.5-12.5H64.793v-27c.059-20.684 16.816-37.441 37.5-37.5h295.375c20.684.059 37.437 16.816 37.5 37.5zm0 0"
                        fill="#44566c"
                        data-original="#000000"
                        opacity={1}
                      />
                      <path
                        d="M249.918 258.875c33.48 0 60.625-27.14 60.625-60.625s-27.145-60.625-60.625-60.625c-33.484 0-60.625 27.14-60.625 60.625.031 33.469 27.152 60.594 60.625 60.625zm0-96.375c19.672 0 35.625 15.953 35.625 35.625s-15.953 35.625-35.625 35.625c-19.676 0-35.625-15.953-35.625-35.625.035-19.656 15.96-35.59 35.625-35.625zM249.918 279c-52 0-92.754 42.125-92.754 96 .02 6.895 5.606 12.48 12.5 12.5h160.504c6.894-.02 12.48-5.605 12.5-12.5 0-53.875-40.754-96-92.75-96zm-66.754 83.5c5.379-34.125 32.254-58.5 66.754-58.5 34.496 0 61.5 24.375 66.75 58.5zm0 0"
                        fill="#44566c"
                        data-original="#000000"
                        opacity={1}
                      />
                    </g>
                  </svg>
                </span>
                <span>{props.contact}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="dark-theme-btn">
          { !nav && <div className="light-mode" onClick={toggleTheme}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnsSvgjs="http://svgjs.com/svgjs"
              width={512}
              height={512}
              x={0}
              y={0}
              viewBox="0 0 312.812 312.812"
              style={{
                enableBackground: "new 0 0 512 512",
              }}
              xmlSpace="preserve"
              className=""
            >
              <g>
                <path
                  d="M305.2 178.159c-3.2-.8-6.4 0-9.2 2-10.4 8.8-22.4 16-35.6 20.8-12.4 4.8-26 7.2-40.4 7.2-32.4 0-62-13.2-83.2-34.4-21.2-21.2-34.4-50.8-34.4-83.2 0-13.6 2.4-26.8 6.4-38.8 4.4-12.8 10.8-24.4 19.2-34.4 3.6-4.4 2.8-10.8-1.6-14.4-2.8-2-6-2.8-9.2-2-34 9.2-63.6 29.6-84.8 56.8-20.4 26.8-32.4 60-32.4 96 0 43.6 17.6 83.2 46.4 112s68 46.4 112 46.4c36.8 0 70.8-12.8 98-34 27.6-21.6 47.6-52.4 56-87.6 1.6-5.6-1.6-11.2-7.2-12.4z"
                  fill="#44556c"
                  data-original="#000000"
                  className=""
                  opacity={1}
                />
              </g>
            </svg>
          </div>}
          {nav && <div className="light-mode dark-mode" onClick={toggleTheme}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnsSvgjs="http://svgjs.com/svgjs"
              width={512}
              height={512}
              x={0}
              y={0}
              viewBox="0 0 599.343 599.343"
              style={{
                enableBackground: "new 0 0 512 512",
              }}
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M299.672 139.049c-88.512 0-160.623 71.963-160.623 160.623 0 88.512 71.963 160.623 160.623 160.623s160.623-72.11 160.623-160.623-72.111-160.623-160.623-160.623zm0 297.159c-75.361 0-136.537-61.323-136.537-136.537 0-75.361 61.323-136.537 136.537-136.537s136.537 61.323 136.537 136.537c-.001 75.362-61.176 136.537-136.537 136.537zM311.641 102.403V11.969c0-6.65-5.32-11.969-11.969-11.969s-11.969 5.32-11.969 11.969v90.433c0 6.65 5.32 11.969 11.969 11.969s11.969-5.319 11.969-11.968zM168.75 168.75a11.95 11.95 0 0 0 0-16.993l-63.983-63.983c-4.729-4.729-12.265-4.729-16.993 0s-4.729 12.265 0 16.993l63.983 63.983c2.364 2.364 5.467 3.546 8.423 3.546 3.103-.147 6.206-1.33 8.57-3.546zM11.969 311.641h90.433a11.92 11.92 0 0 0 11.969-11.969 11.92 11.92 0 0 0-11.969-11.969H11.969A11.919 11.919 0 0 0 0 299.672a11.92 11.92 0 0 0 11.969 11.969zM151.757 430.593l-63.983 63.983a11.95 11.95 0 0 0 0 16.993c2.364 2.364 5.467 3.546 8.423 3.546 3.103 0 6.206-1.182 8.423-3.546l63.983-63.983a11.95 11.95 0 0 0 0-16.993c-4.582-4.581-12.118-4.581-16.846 0zM311.641 587.374V496.94c0-6.65-5.32-11.969-11.969-11.969s-11.969 5.32-11.969 11.969v90.433c0 6.65 5.32 11.969 11.969 11.969s11.969-5.319 11.969-11.968zM447.586 430.593a11.95 11.95 0 0 0-16.993 0 11.95 11.95 0 0 0 0 16.993l63.983 63.983c2.364 2.364 5.467 3.546 8.423 3.546 3.103 0 6.206-1.182 8.423-3.546a11.95 11.95 0 0 0 0-16.993zM587.374 287.702H496.94a11.92 11.92 0 0 0-11.969 11.969 11.92 11.92 0 0 0 11.969 11.969h90.433a11.92 11.92 0 0 0 11.969-11.969 11.918 11.918 0 0 0-11.968-11.969zM511.569 87.774a11.95 11.95 0 0 0-16.993 0l-63.983 63.983a11.95 11.95 0 0 0 0 16.993c2.364 2.364 5.467 3.546 8.423 3.546 3.103 0 6.206-1.182 8.423-3.546l63.983-63.983c4.876-4.729 4.876-12.265.147-16.993z"
                  fill="#fff"
                  data-original="#fff"
                />
              </g>
            </svg>
          </div>}
          <div className="display_property">
            <span className="light-mode menu_bar" onClick={showMenu}>
              <svg
                xmlns="http://www.w3.org/2000/~svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnsSvgjs="http://svgjs.com/svgjs"
                width={512}
                height={512}
                x={0}
                y={0}
                viewBox="0 0 464.205 464.205"
                style={{
                  enableBackground: "new 0 0 512 512",
                }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z"
                    fill="#ffffff"
                    data-original="#000000"
                    opacity={1}
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
