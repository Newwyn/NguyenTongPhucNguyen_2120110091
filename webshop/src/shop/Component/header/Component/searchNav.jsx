import React from 'react';

const searchNav = () => {
    return (
        <div className="header-search-mobile">
  <div className=" search-box wpo-wrapper-search">
    <form action="/search" className="searchform-mobile searchform-categoris ultimate-search">
      <div className="wpo-search-inner">
        <input type="hidden" name="type" defaultValue="product" />
        <input required id="inputSearchAuto-mb" className="input-search" name="q" maxLength={40} autoComplete="off" type="text" size={20} placeholder="Tìm kiếm sản phẩm..." />
      </div>
      <button type="submit" className="btn-search btn" id="search-header-btn-mb">
        <span className="search-icon"><svg version="1.1" className="svg search" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style={{enableBackground: 'new 0 0 24 27'}} xmlSpace="preserve"><path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z" /><rect x={17} y={17} transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width={4} height={8} /></svg></span>	
        <span className="search-close"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg></span>	
      </button>
    </form>
    <div id="ajaxSearchResults-mb" className="smart-search-wrapper ajaxSearchResults" style={{display: 'none'}}>
      <div className="resultsContent" />
      <div className="search-suggest">
        <p>Gợi ý cho bạn: </p>
        <ul>
        </ul>
      </div>
    </div>
  </div>
</div>


    );
};

export default searchNav;