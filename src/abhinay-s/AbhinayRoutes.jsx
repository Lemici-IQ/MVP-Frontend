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
 
function AbhinayRoutes() {
   

  return (
    <>
        <Route path="/" element={<NewHomePage />} />
        <Route path="/abhinay/coming-soon" element={<ComingSoon />} />
        <Route path="/abhinay/offerings" element={<Offerings />} />
        <Route path="/abhinay/offerings/govtnavigator" element={<GovtNavigator />} />
        <Route path="/abhinay/govt-schemes" element={<GovtNavigator />} />
        <Route path="/abhinay/pricings" element={<Pricing />} />
        <Route path="/abhinay/startups-zone" element={<StartUpsZone />} />
        <Route path="/abhinay/startups-zone-opportunities" element={<StartupOppurtunities />} />
        <Route path="/abhinay/startups-zone-investorhub" element={<InvestorHub />} />
        <Route path="/abhinay/franchise" element={<Franchise />} />npm
        <Route path="/abhinay/franchise/oppurtunties" element={<Opp />} />
        <Route path="/abhinay/franchise/details" element={<Single />} />
        <Route path="/abhinay/franchise/category" element={<BusinessCategories />} />
        <Route path="/abhinay/investment" element={<Investment />} />
        <Route path="/abhinay/products" element={<Products />} />
        <Route path="/abhinay/compliance" element={<Compliance />} />
        <Route path="/abhinay/partnership" element={<Partnership />} />
        <Route path="/abhinay/training" element={<Training />} />
        <Route path="/abhinay/account" element={<Account />} />
        <Route path="/abhinay/support" element={<Support />} />
        <Route path="/abhinay/aboutus" element={<AboutUs />} />
        <Route path="/abhinay/eb2b-individual" element={<Individual />} />
        <Route path="/abhinay/eb2b-product-category" element={<Individual />} />
        <Route path="/abhinay/eb2b-single-page" element={<Individual />} />
        <Route path="/abhinay/investment" element={<SinglePage />} />
        <Route path="/abhinay/expert-connect" element={<A />} />
        <Route path="/abhinay/data" element={<B />} />
        <Route path="/abhinay/newHomePage" element={<NewHomePage />} />
          
    
    </>
  )
}

export default AbhinayRoutes;
