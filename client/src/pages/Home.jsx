import AppDowload from "../components/AppDowload"
import Hero from "../components/Hero"
import JobListing from "../components/JobListing"
import Navbar from "../components/Navbar"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListing/>
      <AppDowload/>
    </div>
  )
}

export default Home