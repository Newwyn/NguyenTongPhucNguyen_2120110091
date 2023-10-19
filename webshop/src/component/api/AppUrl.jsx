class AppUrl {
  static BaseURL = "http://ecomlaravel.test/api/";
  static PostContact = this.BaseURL + "postContact";
  static AllSiteInfo = this.BaseURL + "allSiteInfo";
  static AllCategories = this.BaseURL + "allCategories";
  static AllSliders = this.BaseURL + "allSliders";
  static ProductsByRemark = this.BaseURL + "ProductsByRemark";
  static ProductsSubCategory = this.BaseURL + "ProductsByCategory";
  static ProductDetail = (id) => {
    return this.BaseURL + "productDetail/" + id;
  };

  static Login = this.BaseURL + "login";
  static UserData = this.BaseURL + "userData";
  static Register = this.BaseURL + "registerCustomer";
  static ForgetPassword = this.BaseURL + "forgetPassword";
  static ResetPassword = this.BaseURL + "resetPassword";
  static Checkout = this.BaseURL + "checkout";
  static OrderListByUser = this.BaseURL + "orderListByUser";
}
export default AppUrl;
