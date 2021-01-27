import React, { Component } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Categories from "../parts/Categories";
import FeaturePrakerja from "../parts/FeaturePrakerja";
import FeatureNews from "../parts/FeatureNews";
import MostPicked from "../parts/MostPicked";
import FeatureFree from "../parts/FeatureFree";
import FeatureCertificate from "../parts/FeatureCertificate";
import FeatureBisnis from "../parts/FeatureBisnis";
import FeatureCash from "../parts/FeatureCash";

import landingPage from "json/LandingPage.json";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Hero />
        <Categories data={landingPage.categori} />
        <FeaturePrakerja data={landingPage.featurePrakerja} />
        <FeatureNews data={landingPage.featureTerbaru} />
        <MostPicked data={landingPage.featureBest} />
        <FeatureFree data={landingPage.featureGratis} />
        <FeatureCertificate data={landingPage.featureBersertifikat} />
        <FeatureBisnis data={landingPage.featureBisnis} />
        <FeatureCash data={landingPage.featureKeuangan} />
        <Footer />
      </>
    );
  }
}
