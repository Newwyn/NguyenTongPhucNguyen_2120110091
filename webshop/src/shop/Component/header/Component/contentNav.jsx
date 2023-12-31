import React from 'react';

const contentNav = () => {
  return (
    <div className="mainHeader-middle">
  <div className="container-fluid container-pd">
    <div className="flex-container-header">
      <div className="header-wrap-iconav header-wrap-action">
        <div className="header-action">
          <div className="header-action-item header-action_menu header-menu-parent">							
            <div className="header-action_text">
              <a className="header-action__link menu-parent__clicked" href="javascript:void(0)" rel="nofollow" id="site-menu-handle" aria-label="Menu" title="Menu">
                <span className="box-icon">								
                  <span className="hamburger-menu" aria-hidden="true">
                    <span className="bar" />
                  </span>
                  <span className="box-icon--close">
                    <svg viewBox="0 0 19 19" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule="evenodd" /></svg>
                  </span>											
                </span>	
                <span className="box-tmenu">MENU</span>
              </a>
              <span className="box-triangle">
                <svg viewBox="0 0 20 9" role="presentation">
                  <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-wrap-logo">
        <div className="wrap-logo" itemScope itemType="http://schema.org/Organization">
          <a href="https://ttgshop.vn" itemProp="url">
            <img itemProp="logo" src="images/logo.png" alt="TTGShop - Phụ kiện Game Thủ |Tư vấn Build PC| giá rẻ - www.ttgshop.vn" className="img-responsive logoimg ls-is-cached lazyloaded" />
          </a>			
          <h1 style={{display: 'none'}}><a href="https://ttgshop.vn" itemProp="url">TTGShop - Phụ kiện Game Thủ |Tư vấn Build PC| giá rẻ - www.ttgshop.vn</a></h1>
        </div>
      </div>
      <div className="header-wrap-search">
        <div className="header-search">
          <div className="search-box wpo-wrapper-search">
            <form action="/search" className="searchform-product searchform-categoris ultimate-search">
              <div className="wpo-search-inner">
                <input type="hidden" name="type" defaultValue="product" />
                <input required id="inputSearchAuto-3" className="input-search" name="q" maxLength={40} autoComplete="off" type="text" size={20} placeholder="Tìm kiếm sản phẩm..." />
              </div>
              <button type="submit" className="btn-search btn">
                <svg className="svg search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 27" style={{enableBackground: 'new 0 0 24 27'}} xmlSpace="preserve"><path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z" /><rect x={17} y={17} transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width={4} height={8} /></svg>
              </button>
            </form>
            <div id="ajaxSearchResults-3" className="smart-search-wrapper ajaxSearchResults" style={{display: 'none'}}>
              <div className="resultsContent" />
              <div className="search-suggest">
                <p>Gợi ý cho bạn: </p>
                <ul>
                </ul>
              </div>
            </div>
          </div>	
        </div>
      </div>
      <div className="header-wrap-action">
        <div className="header-action">	
          <div className="header-action-item header-action_search">							
            <div className="header-action_text">
              <button className="header-action__link header-action_clicked" id="site-search-handle" aria-label="Tìm kiếm" title="Tìm kiếm" type="button">
                <span className="box-icon">								
                  <svg className="svg-ico-search" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 451 451" style={{enableBackground: 'new 0 0 451 451'}} xmlSpace="preserve">
                    <g>
                      <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" />
                    </g>
                  </svg>
                  <span className="box-icon--close">
                    <svg viewBox="0 0 19 19" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule="evenodd" /></svg>
                  </span>											
                </span>	
              </button>
            </div>
          </div>
          <div className="header-action-item header-action_account">							
            <div className="header-action_text">
              <button className="header-action__link  header-action_clicked " id="site-account-handle" aria-label="Tài khoản" title="Tài khoản" type="button">
                <span className="box-icon">								
                  <svg className="svg-ico-account" viewBox="0 0 1024 1024">
                    <path className="path1" d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z" />
                    <path className="path2" d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z" />
                  </svg>
                  <span className="box-icon--close">
                    <svg viewBox="0 0 19 19" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule="evenodd" /></svg>
                  </span>											
                </span>
                <span className="box-text">
                  Đăng nhập / Đăng ký
                  <span className="txtbl">Tài khoản của tôi <i className="fa fa-angle-down" aria-hidden="true" /></span>
                </span>										
              </button>
              <span className="box-triangle">
                <svg viewBox="0 0 20 9" role="presentation">
                  <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="header-action_dropdown ">
              <div className="header-dropdown_content">
                <div className="sitenav-content sitenav-account " id="siteNav-account">
                  <button className="btnclose" aria-label="button close">
                    <svg viewBox="0 0 19 19" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule="evenodd" /></svg>
                  </button>
                  <div className="site_account_panel_list">
                    <div id="header-login-panel" className="site_account_panel site_account_default is-selected">
                      <div className="sitenav-content__title">
                        <p className="txt-title">Đăng nhập tài khoản</p>
                        <p className="txt-subtitle">Nhập email và mật khẩu của bạn:</p>
                      </div>
                      <div className="sitenav-content__block">
                        <form acceptCharset="UTF-8" action="/account/login" id="customer_login" method="post">
                          <input name="form_type" type="hidden" defaultValue="customer_login" />
                          <input name="utf8" type="hidden" defaultValue="✓" />
                          <div className="form__input-wrapper form__input-wrapper--labelled">
                            <input type="email" id="login-customer[email]" className="form__field form__field--text" name="customer[email]" required="required" />
                            <label htmlFor="login-customer[email]" className="form__floating-label">Email</label>
                          </div>
                          <div className="form__input-wrapper form__input-wrapper--labelled">
                            <input type="password" id="login-customer[password]" className="form__field form__field--text" name="customer[password]" required="required" autoComplete="current-password" />
                            <label htmlFor="login-customer[password]" className="form__floating-label">Mật khẩu</label>						
                            <div className="sitebox-recaptcha">
                              This site is protected by reCAPTCHA and the Google
                              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> 
                              and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                            </div>
                          </div>
                          <button type="submit" className="form__submit button dark" id="form_submit-login">Đăng nhập</button>
                          <input id="cbe7804cbdb847edb6e079c1b80d8c27" name="g-recaptcha-response" type="hidden" /><noscript data-src="https://www.google.com/recaptcha/api.js?render=6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-" /><noscript>grecaptcha.ready(function() {'{'}grecaptcha.execute('6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-', {'{'}action: 'submit'{'}'}).then(function(token) {'{'}document.getElementById('cbe7804cbdb847edb6e079c1b80d8c27').value = token;{'}'});{'}'});</noscript></form>
                        <div className="site_account_secondary-action">
                          <p>Khách hàng mới? 
                            <a className="link" href="/account/register">Tạo tài khoản</a>
                          </p>
                          <p>Quên mật khẩu? 
                            <button aria-controls="header-recover-panel" className="js-link link">Khôi phục mật khẩu</button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="header-recover-panel" className="site_account_panel site_account_sliding">
                      <div className="sitenav-content__title">
                        <p className="txt-title">Khôi phục mật khẩu</p>
                        <p className="txt-subtitle">Nhập email của bạn:</p>
                      </div>
                      <div className="sitenav-content__block">
                        <form acceptCharset="UTF-8" action="/account/recover" method="post">
                          <input name="form_type" type="hidden" defaultValue="recover_customer_password" />
                          <input name="utf8" type="hidden" defaultValue="✓" />
                          <div className="form__input-wrapper form__input-wrapper--labelled">
                            <input type="email" id="recover-customer[recover_email]" className="form__field form__field--text" name="email" required="required" />
                            <label htmlFor="recover-customer[recover_email]" className="form__floating-label">Email</label>
                            <div className="sitebox-recaptcha">
                              This site is protected by reCAPTCHA and the Google
                              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> 
                              and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                            </div>				
                          </div>
                          <button type="submit" className="form__submit button dark" id="form_submit-recover">Khôi phục</button>
                          <input id="fd9d02fe0a15437ea6c2cefb83581b30" name="g-recaptcha-response" type="hidden" /><noscript data-src="https://www.google.com/recaptcha/api.js?render=6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-" /><noscript>grecaptcha.ready(function() {'{'}grecaptcha.execute('6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-', {'{'}action: 'submit'{'}'}).then(function(token) {'{'}document.getElementById('fd9d02fe0a15437ea6c2cefb83581b30').value = token;{'}'});{'}'});</noscript></form>				
                        <div className="site_account_secondary-action">
                          <p>Bạn đã nhớ mật khẩu? 
                            <button aria-controls="header-login-panel" className="js-link link">Trở về đăng nhập</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-action-item header-action_cart">							
            <div className="header-action_text">
              <button className="header-action__link  header-action_clicked " id="site-cart-handle" aria-label="Giỏ hàng" title="Giỏ hàng" type="button">				
                <span className="box-icon">								
                  <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(0 512) scale(.1 -.1)">
                      <path d="m2371 5100c-150-40-306-141-387-248l-35-48-492-58c-271-32-501-63-512-69-31-16-44-39-45-75 0-32 54-516 64-573 5-25 3-27-44-31-27-3-56-11-65-18s-78-117-155-245l-139-232-86-1660c-47-913-85-1692-85-1730 0-60 3-73 23-91l23-22h2125 2126l21 23c18 19 22 35 22 92 0 37-38 815-85 1728l-86 1660-139 232c-77 128-147 238-156 246-11 9-49 15-106 18-86 3-90 4-84 25 3 11 18 74 33 138 29 128 26 152-19 182-13 8-190 54-393 101-204 47-380 90-391 94-14 6-24 22-28 45-11 60-92 208-153 281-76 91-209 181-324 220-73 25-102 29-219 32-111 2-148-1-209-17zm318-176c139-34 279-140 353-265 21-34 36-64 34-66s-51 8-110 22c-113 28-152 27-180-4-8-9-34-96-56-192-23-95-43-182-46-191-4-14-72-44-80-35-1 1-19 139-39 306-19 167-40 311-44 320-21 39-55 45-163 33-56-7-103-10-106-7-8 8 127 68 183 81 72 18 178 17 254-2zm-329-258c0-2 14-117 30-256 17-139 27-256 23-260s-190-51-413-104c-308-74-410-102-427-118-31-29-30-70 7-220 17-67 30-128 30-135 0-10-45-13-203-13h-203l-56 478c-31 262-56 478-55 478 1 1 283 36 627 77s628 75 633 76c4 0 7-1 7-3zm1105-357c242-56 444-105 449-110 6-5-20-134-64-324l-74-315h-246-246l-82 343c-72 301-85 345-107 365-31 26-65 28-147 6-33-8-61-14-63-12-1 2 7 42 18 89l20 86 51-13c28-7 249-58 491-115zm-495-226c0-5 27-120 60-257 33-136 60-252 60-257s-276-9-643-9h-642l-28 117c-15 64-26 117-24 119 2 1 1194 291 1210 293 4 0 7-2 7-6zm-1980-282c0-9 14-119 25-203l5-38h-100c-55 0-100 3-100 6 0 18 145 244 156 244 8 0 14-4 14-9zm3239-110c39-66 71-122 71-125s-74-6-165-6-165 3-165 8c0 4 12 60 27 125l27 117h67 66l72-119zm155-373c3-35 40-733 81-1553s76-1511 78-1537l4-48h-1987-1987l4 48c2 26 37 717 78 1537s78 1518 81 1553l6 62h1818 1818l6-62z" />
                      <path d="m1850 3209c-168-32-260-248-169-395 24-39 82-92 114-104 23-9 23-10 27-242 4-223 5-236 32-313 85-248 285-432 534-492 88-21 256-21 344 0 249 60 449 244 534 492 27 77 28 90 32 312l4 233 34 16c42 20 101 85 121 133 24 55 21 159-6 214-26 53-87 112-140 134-46 20-156 20-202 0-199-83-215-381-26-479l39-19-4-207c-5-237-17-291-88-400-225-349-715-349-940 0-71 109-83 164-88 400l-4 207 39 19c85 44 132 127 133 232 0 175-145 292-320 259z" />
                    </g>
                  </svg>
                  <span className="box-icon--close">
                    <svg viewBox="0 0 19 19" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule="evenodd" /></svg>
                  </span>			
                  <span className="count-holder">
                    <span className="count">0</span>
                  </span>		
                </span>	
                <span className="box-text">
                  <span className="txtbl">Giỏ hàng</span>
                </span>							
              </button>
              <span className="box-triangle">
                <svg viewBox="0 0 20 9" role="presentation">
                  <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <div className="header-action_dropdown">
              <div className="header-dropdown_content">
                <div className="sitenav-content sitenav-cart">
                  <p className="boxtitle">Giỏ hàng</p>
                  <div className="cart-view clearfix">
                    <div className="cart-view-scroll">
                      <table className="clone-item-cart table-clone-cart">
                        <tbody><tr className="mini-cart__item d-none">
                            <td className="mini-cart__left"><a className="mnc-link" href="#" title><img src="index_1.html" alt /></a></td>
                            <td className="mini-cart__right">
                              <p className="mini-cart__title">	
                                <a className="mnc-title mnc-link" href="#" title />
                                <span className="mnc-variant">	</span>	
                              </p>
                              <div className="mini-cart__quantity">
                                <button className="qty-btn mnc-minus">
                                  <svg width={18} height={18} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect height={1} width={18} y={9} x={1} /></svg>
                                </button>
                                <input className="qty-value" type="text" readOnly name="mnc-quantity" defaultValue />
                                <button className="qty-btn mnc-plus">
                                  <svg width={18} height={18} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x={9} y={1} width={1} height={17} /> <rect x={1} y={9} width={17} height={1} /></svg>
                                </button>
                              </div>
                              <div className="mini-cart__price">
                                <span className="mnc-price">0₫</span> 
                                <del className="mnc-ori-price" />
                              </div>
                              <div className="mini-cart__remove" />	
                            </td>
                          </tr>   
                        </tbody></table>
                      <table className="table-cart-view">
                        <tbody><tr className="mini-cart__empty">
                            <td>			
                              <div className="svgico-mini-cart">
                                <svg width={81} height={70} viewBox="0 0 81 70"><g transform="translate(0 2)" strokeWidth={4} fill="none" fillRule="evenodd"><circle strokeLinecap="square" cx={34} cy={60} r={6} /><circle strokeLinecap="square" cx={67} cy={60} r={6} /><path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547" /></g></svg>
                              </div>					
                              Hiện chưa có sản phẩm					
                            </td>								
                          </tr>
                        </tbody></table>
                    </div>
                    <div className="cart-view-line" />
                    <div className="cart-view-total">
                      <table className="table-total">
                        <tbody><tr>
                            <td className="mnc-total text-left">TỔNG TIỀN:</td>
                            <td className="mnc-total text-right total-view-cart">0₫</td>
                          </tr>
                          <tr className="mini-cart__button">
                            <td colSpan={2}><a href="/cart" className="linktocart button ">Xem giỏ hàng</a></td>
                          </tr>
                        </tbody></table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default contentNav;