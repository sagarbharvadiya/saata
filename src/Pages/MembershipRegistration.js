import React from "react";
import { Helmet } from "react-helmet";


const MembershipRegistration = () => {
  return (
    <>

      <div className="membership-ragistaion">
        <h4 className="text-align-center" data-placeholder="Translation" dir="ltr" id="tw-target-text">
          If you are already an existing SAATA Member, <a href="https://subscriptions.zoho.in/portal/saata1/login">Click here to login</a>
        </h4>
        <div id="zf-widget-root-id"></div>
        <Helmet>
          <script type="text/javascript" src='https://js.zohostatic.com/books/zfwidgets/assets/js/zf-widget.js'></script>
          <script type="text/javascript" src="https://saata.org/pricing-table.js"></script>
          <script type="text/javascript" src="../pricingTable.js"></script>
        </Helmet>
      </div>
    </>
  );
};


export default MembershipRegistration;
