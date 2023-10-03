import React from 'react';

const index = () => {
    return (
        <div>
  <div className="col-lg-cus">
    <div className="main-menu mainMenujs setHeight">	</div>
  </div>
  <div className="col-lg block-slider">
    <div className="row">
      <div className="col-lg-8 col-md-12 col-12  p-0 left-slider" id="left-slider">
        <div className="home-slider" id="home-slider">
          <div className="slider-owl owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 652}}><div className="owl-item active" style={{width: '651.938px'}}><div className="slider-item">
                    <div className="slide--image">
                      <a href="https://ttgshop.vn/pages/salepct8" title="TTG PC Sale tháng 8">
                        <picture>
                          <source media="(max-width: 767px)" srcSet="images/slide_1_mb.jpg" />
                          <source media="(min-width: 768px)" srcSet="images/slide_1_img.jpg" />
                          <img src="images/slide_1_img.jpg" alt="TTG PC Sale tháng 8" />
                        </picture>
                      </a>
                    </div>
                  </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev disabled" /><button type="button" role="presentation" className="owl-next disabled" /></div><div className="owl-dots disabled"><button role="button" className="owl-dot active" aria-label={1}><span /></button></div></div> 
        </div>
      </div>
    </div></div></div>
    );
};

export default index;