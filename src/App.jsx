import { useState } from "react";
import "./app.css";
import data from "./data.json";
import Remove from "./assets/icon-remove.svg"; 
import Filters from "./components/filters";
import Header from "./assets/bg-header-desktop.svg"

function App() {

  const [jobs, setJobs] = useState(data);
  const [filterArray, setFilterArr] = useState([]);

  const filteredData = filterArray.length === 0 ? jobs : jobs.filter((job) => {
    return filterArray.every((button) => {
      return job[button.property] === button.value || job[button.property].includes(button.value);
    });

  });


  console.log(filterArray);

  const choiceHandler = (obj) => {
    const filterExists = filterArray.some((filter) => filter.property === obj.property && filter.value === obj.value
    );

    if (filterExists) {
      setFilterArr((state) => state.filter((filter) => !(filter.property === obj.property && filter.value === obj.value)));
    } else {
      setFilterArr((state) => [...state, obj]);
    }
    // setFilterArr((state) => {
    //   return [...state, obj]
    // });
  };

  return ( 
  <div className="main">
    
      {filterArray.length > 0 ?( <Filters filterArray={filterArray} setFilterArr={setFilterArr}/>) : null}

      <section className="jobs" style={{marginTop: filterArray.length > 0 ? "40px" : "232px"}}>
        {filteredData.map((job) => {
          return (
          <div className="job" key={job.id}>
            <div className="job-left">
              <img src={job.logo} alt="" />
              <div className="leftSection">
              <div className="infoHeader">
                <div className="company-title">{job.company}</div>
                {job.new ? <div className="new-job">new</div> : null}
                {job.featured ? <div className="featured-job">featured</div> : null}
              </div>
              <h2 className="job-position">{job.position}</h2>
              <div className="info-footer">
                <h3 className="extra">{job.postedAt}</h3>
                <span className="circle"></span>
                <h3 className="extra">{job.contract}</h3>
                <span className="circle"></span>
                <h3 className="extra">{job.location}</h3>
              </div>
              </div>
            </div>
            <div className="job-right">
              <button className="propBTN" onClick={() => choiceHandler({
                property: "role",
                value: job.role,
              })}>{job.role}</button>
              <button className="propBTN" onClick={() => choiceHandler({
                property: "level",
                value: job.level,
              })}>{job.level}</button>
              {job.tools.map((tool) => {
                return <button className="propBTN" key={tool} onClick={() => choiceHandler({
                  property: "tools",
                  value: tool,
                })}>{tool}</button>
              })}
              {job.languages.map((language) =>{
                return <button className="propBTN" key={language} onClick={() => choiceHandler({
                  property: "languages",
                  value: language,
                })}>{language}</button>
              })}

            </div> 
          </div>
          );
        })}
      </section>
  </div>
 );
}

export default App;
