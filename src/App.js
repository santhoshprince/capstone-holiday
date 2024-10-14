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

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />

          <Route path="/:slug" element={<BlogDetails />} />
          {/* International Packages */}
          <Route path="/tour-destination/bali-tour" element={<Bali />} />
          <Route
            path="/tour/bali-tour-packages-from-chennai"
            element={<BaliDetails />}
          />
          <Route path="/tour/bali-tour-places" element={<BaliDetails />} />

          <Route
            path="/tour-destination/maldives-tour"
            element={<Maldives />}
          />
          <Route
            path="/tour/maldivestour-package-from-chennai"
            element={<Maldivesdetails />}
          />
          <Route path="/tour-destination/dubai-tour" element={<Dubai />} />
          <Route
            path="/tour/dubai-tour-packages-from-chennai"
            element={<Dubaidetails />}
          />
          <Route
            path="/tour-destination/thailand-tour"
            element={<Thailand />}
          />
          <Route
            path="/tour/thailand-tour-package-from-chennai"
            element={<Thailanddetails />}
          />
          <Route
            path="/tour-destination/mauritius-tour"
            element={<Mauritius />}
          />
          <Route
            path="/tour/mauritius-tour-package-from-chennai"
            element={<Mauritiusdetails />}
          />
          <Route
            path="/tour-destination/turkey-tour-package"
            element={<Turkey />}
          />
          <Route
            path="/tour/turkey-tour-packages-from-india"
            element={<Turkeydetails />}
          />
          <Route
            path="/tour-destination/singapore-malaysia-tour"
            element={<Singapore />}
          />
          <Route
            path="/tour/singapore-and-malaysia-tour-packages"
            element={<Singaporedetails />}
          />
          <Route
            path="/tour-destination/vietnam-tour-package"
            element={<Vietnam />}
          />
          <Route
            path="/tour/vietnam-cambodia-tour-package/"
            element={<Vietnamdetails />}
          />
          <Route
            path="/tour-destination/sri-lanka-tour-package"
            element={<Srilanka />}
          />
          <Route
            path="tour/srilanka-tour-package-from-chennai"
            element={<Srilankadetails />}
          />
          <Route
            path="/tour-destination/andaman-tour-package"
            element={<Andaman />}
          />
          <Route
            path="/tour/andaman-tour-package-from-chennai"
            element={<AndamanDetails />}
          />
          <Route
            path="/tour/andaman-and-nicobar-islands-package/:id"
            element={<AndamanDetails />}
          />
          <Route path="/tour-destination/goa-tour" element={<Goa />} />
          <Route
            path="/tour/goa-tour-package-from-chennai"
            element={<GoaDetails />}
          />
          <Route path="/tour/goa-travel-packages" element={<GoaDetails />} />
          <Route
            path="/tour-destination/himachal-tour/"
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
          <Route path="/tour-destination/kerala-tour/" element={<Kerala />} />
          <Route
            path="/tour/kerala-tour-packages-from-chennai"
            element={<KeralaDetails />}
          />
          <Route path="tour/munnar-tour-package" element={<KeralaDetails />} />
          <Route
            path="tour-destination/jammu-and-kashmir-tour/"
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
            path="/tour-destination/rajasthan-tour/"
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
            path="/tour-destination/sikkim-and-west-bengal-tour/"
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
            path="tour-destination/kerala-group-tour"
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
            path="/tour-destination/azerbaijan-europe-tour"
            element={<AzerbaijanEurope />}
          />
          <Route
            path="/tour/china-europe-tour-package"
            element={<ChinaEurope />}
          />
          <Route
            path="/tour/greece-europe-tour-package"
            element={<GreeceEurope />}
          />
          <Route
            path="/international-tour-package"
            element={<InternationalPackages />}
          />

          <Route path="/domestic-tour-package" element={<DomesticPackages />} />
          <Route path="/group-tour-packages" element={<GroupTourPackages />} />
          <Route path="/europe-tour-packages" element={<EuropeTourPackages />} />
          <Route path="/honeymoon-tour-packages" element={<HoneymoonTourPackages />} />


          <Route path="/tour/anadaman-honeymoon-tour-packages" element={<AndamanHoneymoon />} />
          <Route path="/tour/bali-honeymoon-tour-packages" element={<BaliHoneymoon />} />
          <Route path="/tour/kashmir-honeymoon-tour-packages" element={<KashmirHoneymoon />} />
          <Route path="/tour/kerala-honeymoon-tour-packages" element={<KeralaHoneymoon />} />
          <Route path="/tour/rajasthan-honeymoon-tour-packages" element={<RajasthanHoneymoon />} />
         
          <Route
            path="/tour-destination/educational-tour/"
            element={<EducationalTour />}
          />
          <Route
            path="/tour/almaty-tour-package"
            element={<SwissDetails />}
          />
          <Route
            path="/tour/paris-and-swiss-tour-package"
            element={<AlmatyDetails />}
          />
 
            <Route
            path="/tour/cruise-package"
            element={<CruiseDetails />}
          />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
