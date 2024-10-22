import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutus";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blogdeatils";


import Bali from "./desinationpage/bali";
import ScrollToTop from "./components/ScrollToTop";
import Maldives from "./desinationpage/maldives";
import Dubai from "./desinationpage/dubai";
import Thailand from "./desinationpage/thailand";
import Mauritius from "./desinationpage/mauritius";
import Turkey from "./desinationpage/turkey";
import Singapore from "./desinationpage/singapore";
import Vietnam from "./desinationpage/vietnam";
import Srilanka from "./desinationpage/srilanka";

import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import BaliDetails from "./detailspage/Balidetails";
import Maldivesdetails from "./detailspage/maldivesdetails"; // Import your details component
import Dubaidetails from "./detailspage/dubaidetails";
import Thailanddetails from "./detailspage/thailanddetails";
import Mauritiusdetails from "./detailspage/mauritiusdetails";
import Turkeydetails from "./detailspage/turkeydetails";
import Singaporedetails from "./detailspage/singaporedetails";
import Vietnamdetails from "./detailspage/vietnamdetails";
import Srilankadetails from "./detailspage/srilankadetails";

import Andaman from "./domesticpage/andaman";
import Goa from "./domesticpage/goa";
import Himachal from "./domesticpage/himachal";
import Kerala from "./domesticpage/kerala";
import Kashmir from "./domesticpage/kashmir";
import Rajasthan from "./domesticpage/rajasthan";
import Sikkim from "./domesticpage/sikkim";

import AndamanDetails from "./domesticdetailspage/andamanpagedetails";
import GoaDetails from "./domesticdetailspage/goadetails";
import HimachalDetails from "./domesticdetailspage/himachaldetails";
import KeralaDetails from "./domesticdetailspage/keraladetails";
import KashmirDetails from "./domesticdetailspage/kashmirdetails";
import RajasthanDetails from "./domesticdetailspage/rajasthandetails";
import SikkimDetails from "./domesticdetailspage/sikkimdetails";

import KeralalaGroup from "./grouptour/keraladetails";
import AndamanGroup from "./grouptour/andamangroupdetails";
import BaliGroup from "./grouptour/baligroupdetails";
import ShimlaGroup from "./grouptour/shimlagroupdetails";
import SingaporeGroup from "./grouptour/singaporegroupdetails";
import SrilankaGroup from "./grouptour/srilankagroupdetails";
import ThailandGroup from "./grouptour/thailandgroupdetails";
import VietnamGroup from "./grouptour/vietnamgroupdetails";

import AzerbaijanEurope from "./europetour/azerbaijaneuropedetails";
import ChinaEurope from "./europetour/chinaeuropedetails";
import GreeceEurope from "./europetour/greeceuropedetails";

import InternationalPackages from "./components/internationalcards/internationalpackage";
import DomesticPackages from "./components/domesticcards/domesticpackage";
import GroupTourPackages from "./components/groupcards/grouptourpackage";
import EuropeTourPackages from "./components/europecards/europetourpackage"
import HoneymoonTourPackages from "./components/honeymooncards/honeymoontourpackage"

import AndamanHoneymoon from "./honeymoontour/andmandetails"
import BaliHoneymoon from "./honeymoontour/balidetails"
import KashmirHoneymoon from "./honeymoontour/kashmirdetails"
import KeralaHoneymoon  from "./honeymoontour/keraladetails"
import RajasthanHoneymoon from "./honeymoontour/rajathandetails"

import EducationalTour from "./components/educationalpage/eductionaltour";

import SwissDetails from "./components/educationtour/educationaltourdetails";

import AlmatyDetails from "./components/educationtour/educationaltourdetails";
import CruiseDetails from "./cursiedeatils/shippagedetails";

import Layout from "./components/layout";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "typeface-poppins";
import { HelmetProvider } from 'react-helmet-async';
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <HelmetProvider>
    <Router>
      <Layout>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/:slug" element={<BlogDetails />} />
          {/* International Packages */}
          <Route path="/bali-tour" element={<Bali />} />
          <Route
            path="/tour/bali-tour-packages-from-chennai"
            element={<BaliDetails />}
          />
          <Route path="/tour/bali-tour-places" element={<BaliDetails />} />

          <Route
            path="/maldives-tour"
            element={<Maldives />}
          />
          <Route
            path="/tour/maldivestour-package-from-chennai"
            element={<Maldivesdetails />}
          />
          <Route path="/dubai-tour" element={<Dubai />} />
          <Route
            path="/tour/dubai-tour-packages-from-chennai"
            element={<Dubaidetails />}
          />
          <Route
            path="/thailand-tour"
            element={<Thailand />}
          />
          <Route
            path="/tour/thailand-tour-package-from-chennai"
            element={<Thailanddetails />}
          />
          <Route
            path="/mauritius-tour"
            element={<Mauritius />}
          />
          <Route
            path="/tour/mauritius-tour-package-from-chennai"
            element={<Mauritiusdetails />}
          />
          <Route
            path="/turkey-tour"
            element={<Turkey />}
          />
          <Route
            path="/tour/turkey-tour-packages-from-india"
            element={<Turkeydetails />}
          />
          <Route
            path="/singapore-malaysia-tour"
            element={<Singapore />}
          />
          <Route
            path="/tour/singapore-and-malaysia-tour-packages"
            element={<Singaporedetails />}
          />
          <Route
            path="/vietnam-tour-package"
            element={<Vietnam />}
          />
          <Route
            path="/tour/vietnam-cambodia-tour-package/"
            element={<Vietnamdetails />}
          />
          <Route
            path="/sri-lanka-tour"
            element={<Srilanka />}
          />
          <Route
            path="tour/srilanka-tour-package-from-chennai"
            element={<Srilankadetails />}
          />
          <Route
            path="/andaman-tour"
            element={<Andaman />}
          />
          <Route
            path="/tour/andaman-tour-package-from-chennai"
            element={<AndamanDetails />}
          />
          <Route
            path="/tour/andaman-and-nicobar-islands-package"
            element={<AndamanDetails />}
          />
          <Route path="/goa-tour" element={<Goa />} />
          <Route
            path="/tour/goa-tour-package-from-chennai"
            element={<GoaDetails />}
          />
          <Route path="/tour/goa-travel-packages" element={<GoaDetails />} />
          <Route
            path="/himachal-tour"
            element={<Himachal />}
          />
          <Route
            path="/tour/shimla-manali-tour-package-from-chennai"
            element={<HimachalDetails />}
          />
          <Route
            path="/tour/himachal-tour-package/"
            element={<HimachalDetails />}
          />
          <Route path="/kerala-tour" element={<Kerala />} />
          <Route
            path="/tour/kerala-tour-packages-from-chennai"
            element={<KeralaDetails />}
          />
          <Route path="tour/munnar-tour-package" element={<KeralaDetails />} />
          <Route
            path="/kashmir-tour"
            element={<Kashmir />}
          />
          <Route
            path="/tour/kashmir-tour-packages-from-chennai"
            element={<KashmirDetails />}
          />
          <Route
            path="/tour/srinagar-tour-packages"
            element={<KashmirDetails />}
          />
          <Route
            path="/rajasthan-tour"
            element={<Rajasthan />}
          />
          <Route
            path="/tour/delhi-agra-jaipur-tour-package"
            element={<RajasthanDetails />}
          />
          <Route
            path="tour/rajasthan-trip-package"
            element={<RajasthanDetails />}
          />
          <Route
            path="/sikkim-tour"
            element={<Sikkim />}
          />
          <Route
            path="/tour/darjeeling-gangtok-tour-packages"
            element={<SikkimDetails />}
          />
          <Route
            path="tour/sikkim-travel-packages"
            element={<SikkimDetails />}
          />

          {/* Gropu Tour  */}
          <Route
            path="/tour/kerala-group-tour-package"
            element={<KeralalaGroup />}
          />
          <Route
            path="/tour/andaman-group-tour-packages"
            element={<AndamanGroup />}
          />
          <Route path="/tour/bali-group-tour-package" element={<BaliGroup />} />
          <Route
            path="/tour/shimla-manali-group-tour"
            element={<ShimlaGroup />}
          />
          <Route
            path="/tour/sri-lanka-group-tour-package"
            element={<SrilankaGroup />}
          />
          <Route
            path="/tour/singapore-malaysia-group-tour"
            element={<SingaporeGroup />}
          />
          <Route
            path="/tour/thailand-group-tour-package"
            element={<ThailandGroup />}
          />
          <Route
            path="/tour/vietnam-group-tour-packages/"
            element={<VietnamGroup />}
          />

          <Route
            path="/azerbaijan-tour-packages-from-india"
            element={<AzerbaijanEurope />}
          />
      
          <Route
            path="/china-tour-package-from-chennai"
            element={<ChinaEurope />}
          />
          <Route
            path="/greece-tour-packages-from-india"
            element={<GreeceEurope />}
          />
     
          <Route
            path="/international-tour-packages-from-chennai"
            element={<InternationalPackages />}
          />
         

          <Route path="/domestic-tour-packages-from-chennai" element={<DomesticPackages />} />
          <Route path="/group-tour-packages" element={<GroupTourPackages />} />
          <Route path="/europe-tour-packages-from-chennai" element={<EuropeTourPackages />} />
          <Route path="/honeymoon-packages-from-chennai" element={<HoneymoonTourPackages />} />

          <Route path="/andaman-honeymoon-packages-from-chennai" element={<AndamanHoneymoon />} />
          <Route path="/bali-honeymoon-packages-from-chennai" element={<BaliHoneymoon />} />
          <Route path="/kashmir-honeymoon-package-for-couple" element={<KashmirHoneymoon />} />
          <Route path="/kerala-honeymoon-packages-from-chennai" element={<KeralaHoneymoon />} />
          <Route path="/agra-honeymoon-package" element={<RajasthanHoneymoon />} />
      
          <Route
            path="/educational-tour-packages"
            element={<EducationalTour />}
          />
     
          <Route
            path="/paris-switzerland-tour-package-from-india"
            element={<SwissDetails />}
          />
     
          <Route
            path="/almaty-tour-package-from-india"
            element={<AlmatyDetails />}
          />
 

            <Route
            path="/singapore-malaysia-tour-package-with-cruise"
            element={<CruiseDetails />}
          />
           <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />
        </Routes>
        <Footer />
      </Layout>
    </Router>
    </HelmetProvider>
  );
}

export default App;
