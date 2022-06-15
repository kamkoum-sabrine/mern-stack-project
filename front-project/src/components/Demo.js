import image from '../assets/images/heading-line-dec.png';
import image2 from '../assets/images/about-right-dec.png';

export function Demo (){
    return (
        <div>
             <div id="demo" className="about-us section">
                <div className="container">
                    
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                    <div data-aos="fade-right" data-aos-duration="1500">
                    <div className="section-heading">
                        <h4>Voulez-vous essayer <em>XD-META</em> ? </h4>
                        <img src={image} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="gradient-button">
                            <a href="#">Essayer gratuitement</a>
                        
                        </div>
                        <span></span>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="right-image">
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <img src={image2} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}


