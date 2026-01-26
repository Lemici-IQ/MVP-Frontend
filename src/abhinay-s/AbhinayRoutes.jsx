import AbhiApp from './abhinay/components/AbhiApp.jsx'
import Offerings from './abhinay/components/navbar/Offerings'
import Pricing from './abhinay/components/navbar/Pricing'
import StartUpsZone from './abhinay/components/navbar/OfferingComponents/StartuspsZone/StartUpsZone'
import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ComingSoon from './components/ComingSoon'
import { Routes, Route } from 'react-router-dom'
import GovtNavigator from './abhinay/components/navbar/OfferingComponents/GovtNavigator/GovtNavigator'
import Investment from './pages/Investment'
import Products from './pages/Products'
import Compliance from './pages/Compliance'
import Partnership from './pages/Partnership'
import Training from './pages/Training'
import Account from './pages/Account'
import Support from './pages/Support'
import StartupOpportunities from './abhinay/components/navbar/OfferingComponents/StartuspsZone/StartupOppurtunities'
import InvestorHub from './abhinay/components/navbar/OfferingComponents/StartuspsZone/InvestorHub'
import StartupOppurtunities from './abhinay/components/navbar/OfferingComponents/StartuspsZone/StartupOppurtunities'
import Franchise from './abhinay/components/navbar/OfferingComponents/Franchise/Franchise'
// import NewFF from './abhinay/components/navbar/OfferingComponents/Franchise/NewFF.jsx'
import Single from './abhinay/components/navbar/OfferingComponents/Franchise/Single'
import BusinessCategories from './abhinay/components/navbar/OfferingComponents/Franchise/BusinessCategories'
import Opp from './abhinay/components/navbar/OfferingComponents/Franchise/Opp'
import AboutUs from './components/ui/AboutUs.jsx'
import ProductCategory from './abhinay/components/navbar/OfferingComponents/eb2b/ProductCategory'
import SinglePage from './abhinay/components/navbar/OfferingComponents/eb2b/SinglePage'
import Individual from './abhinay/components/navbar/OfferingComponents/eb2b/Individual'
import A from './abhinay/components/A'
import B from './abhinay/components/B'
import NewHomePage from './abhinay/NewHomePage'
import Dashboard from './components/Dashboard.jsx'
import IndFranchiseFood from './abhinay/components/navbar/OfferingComponents/Franchise/IndFranchiseFood.jsx'
import IndFranchiseSport from './abhinay/components/navbar/OfferingComponents/Franchise/IndFranchiseSport.jsx'
import Community from './utils/Community.jsx'
import DataLicensing from './pages/DataLicensing.jsx'
import OurCulture from './pages/OurCulture.jsx'
import NewFranchiseListing from './pages/NewFranchiseListing.jsx'
import NewFranchiseListingGolf from './pages/NewFranchiseListingGolf.jsx'
import CategoryListingPage from './pages/CategoryListingPage.jsx'
import NewFranchiseListingAll from './pages/NewFranchiseListingAll.jsx'
function AbhinayRoutes() {
   

  return (
    <>

        <Route path="" element={<NewHomePage />} />
        <Route path="coming-soon" element={<ComingSoon />} />
        <Route path="offerings" element={<Offerings />} />
        {/* <Route path="offerings/govtnavigator" element={<GovtNavigator />} /> */}
        <Route path="govt-schemes" element={<GovtNavigator />} />
        <Route path="pricings" element={<Pricing />} />
        <Route path="startups-zone" element={<StartUpsZone />} />
        <Route path="startups-zone-opportunities" element={<StartupOppurtunities />} />
        <Route path="startups-zone-investorhub" element={<InvestorHub />} />
        <Route path="franchise" element={<Franchise />} />
        <Route path="franchise/oppurtunties" element={<Opp />} />
        <Route path="franchise/details" element={<Single />} />
        <Route path="franchise/category" element={<BusinessCategories />} />
        <Route path="investment" element={<Investment />} />
        <Route path="products" element={<Products />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="partnership" element={<Partnership />} />
        <Route path="training" element={<Training />} />
        <Route path="account" element={<Account />} />
        <Route path="support" element={<Support />} />
        <Route path="aboutus" element={<AboutUs />}/>
        {/* <Route path="investment" element={<SinglePage />} /> */}
        {/* <Route path="data" element={<B />} /> */}
        {/* <Route path="newHomePage" element={<NewHomePage />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newFranchise1" element={<IndFranchiseFood />} />
        <Route path="/newFranchise2" element={<IndFranchiseSport />} />
        <Route path="/community-page" element={<Community />} />
        <Route path="/data-licensing" element={<DataLicensing />} />
        <Route path="/our-culture" element={<OurCulture />} />
        <Route path="/Individual-listingpage" element={<NewFranchiseListingAll />} />
        <Route path="/Individual-food-listingpage" element={<NewFranchiseListing />} />
        <Route path="/Individual-golf-listingpage" element={<NewFranchiseListingGolf />} />
        <Route path="/category-listing-page" element={<CategoryListingPage />} />
    </>
  )
}

export default AbhinayRoutes;



