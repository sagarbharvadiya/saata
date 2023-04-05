import React from "react";
import { Helmet } from "react-helmet";


const MembershipRegistration = () => {
  return (
    <>
      <div id="zf-widget-root-id"></div>
      <Helmet>
        <script type="text/javascript" src='https://js.zohostatic.com/books/zfwidgets/assets/js/zf-widget.js'></script>
        <script type="text/javascript" src="https://saata.org/pricing-table.js"></script>
        {/* <script type="text/javascript" src="../pricingTable.js"></script> */}
      </Helmet>
    </>
  );
};


export default MembershipRegistration;
