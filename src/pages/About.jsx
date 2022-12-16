import React from 'react'
import Brands from '../components/Brands';
import Featured from '../components/Featured';
import GoogleMapReact from 'google-map-react';
const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function About() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div className='about'>
        <section>
            <div class="wrapper">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/c1xTDSIXit8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <div style={{ height: '40vh', width: '100%' }}> 
            <GoogleMapReact bootstrapURLKeys={{ key: "" }} 
                    defaultCenter={defaultProps.center} 
                    defaultZoom={defaultProps.zoom} 
                    yesIWantToUseGoogleMapApiInternals > 
                <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> 
            </GoogleMapReact> 
        </div>
      <ul class="accordion">
        <h2>Frequently Asked Questions</h2>
        <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">Product</label>
            <div class="content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex deleniti omnis repellat, illum aliquam enim? Non vitae 
                    ea voluptates commodi dolorum deserunt. Totam, accusamus. 
                    Saepe quas perferendis veritatis suscipit amet.
                </p>
            </div>
        </li>

        <li>
            <input type="radio" name="accordion" id="second" />
            <label for="second">Product</label>
            <div class="content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex deleniti omnis repellat, illum aliquam enim? Non vitae 
                    ea voluptates commodi dolorum deserunt. Totam, accusamus. 
                    Saepe quas perferendis veritatis suscipit amet.
                </p>
            </div>
        </li>

        <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">Product</label>
            <div class="content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex deleniti omnis repellat, illum aliquam enim? Non vitae 
                    ea voluptates commodi dolorum deserunt. Totam, accusamus. 
                    Saepe quas perferendis veritatis suscipit amet.
                </p>
            </div>
        </li>
    </ul>
      <Featured />
      <Brands />
    </div>
  )
}

export default About
