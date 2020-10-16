import React, { Component } from "react";
import { GOOGLE_ADS_CLIENT } from "../data";

class GoogleAd extends Component {
  googleInit = null;

  componentDidMount() {
    const { timeout } = this.props;
    this.googleInit = setTimeout(() => {
      if (typeof window !== "undefined")
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  }

  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const { classNames, slot, format } = this.props;

    return (
      <div className={classNames}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={GOOGLE_ADS_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

export default GoogleAd;
