import React, { useContext } from "react";
import MyContext from "../../Context/data/Mycontext";

function Testimonials() {
  const context = useContext(MyContext);
  const { mode } = context;

  return (
    <section className="text-gray-800 ">
      <div className="container mx-auto px-5 py-12">
        {/* title */}
        <div className="text-center">
          <h1 className="  text-3xl font-bold text-black"style={{
            color:mode === 'dark' ? 'white' : ''
          }}>Testimonial</h1>
          <h2 className="text-2xl font-semibold mb-10 "
          style={{
            color:mode === 'dark' ? 'white' : ''
          }}>
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>
        </div>

        {/* testimonials */}
        <div className="flex flex-wrap -m-4">
          {/* 1 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div
              className="h-full text-center p-4 shadow-md rounded-md"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://ecommerce-sk.vercel.app/img/kamal.png"
              />
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="leading-relaxed"
              >
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
              <h2
                style={{ color: mode === "dark" ? "#ff4162" : "" }}
                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
              >
                Kamal Nayan Upadhyay
              </h2>
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="text-gray-500"
              >
                Senior Product Designer
              </p>
            </div>
          </div>
           
           {/* 2 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div
              className="h-full text-center p-4 shadow-md rounded-md"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
              />

              <p
                style={{ color: mode === "dark" ? "" : "" }}
                className="leading-relaxed"
              >
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk.
              </p>

              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />

              <h2
                style={{ color: mode === "dark" ? "#ff4162" : "" }}
                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
              >
                React Js
              </h2>
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="text-gray-500"
              >
                UI Develeoper
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div
              className="h-full text-center p-4 shadow-md rounded-md"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />

              <p
                style={{ color: mode === "dark" ? "" : "" }}
                className="leading-relaxed"
              >
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk.
              </p>

              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />

              <h2
                style={{ color: mode === "dark" ? "#ff4162" : "" }}
                className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
              >
                React Js
              </h2>
              <p
                style={{ color: mode === "dark" ? "white" : "" }}
                className="text-gray-500"
              >
                UI Develeoper
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
