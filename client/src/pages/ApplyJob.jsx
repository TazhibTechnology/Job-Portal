import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { jobsData } from "../assets/assets";
import Loading from "../components/Loading";
import {Navbar} from '../components/Navbar' 
const ApplyJob = () => {
  const { id } = useParams();
  const [JobsData, setJobData] = useState(null);

  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);
  return JobData ? (
    <>
    <Navbar/>
    </>
  ) : (
    <Loading/>
  );
};

export default ApplyJob;
