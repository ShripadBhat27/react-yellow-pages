import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
function CustomSearch() {
    const [userData,setUserData]=React.useState([]);
    const [userSearchData,setUserSearchData]=React.useState([]);
    const [job,setJob]=React.useState('');
    const [locality,setLocality]=React.useState('');
      React.useEffect(()=>{
          const data=[
              {job:"plumber",locality:"Vishrambag",name:"Hari",contact:"8600144785"},
              {job:"plumber",locality:"Government Colony",name:"Pheri",contact:"8600144785"},  
              {job:"electrician ",locality:"Patel Nagar",name:"pareek",contact:"8600144785"},
              {job:"taxi Driver",locality:"Dwarka chowk",name:"nana",contact:"8600144785"},
              {job:"vegetable vendor",locality:"BST ground",name:"Hari",contact:"8600144785"},
          ];

          setUserData(data);
          setUserSearchData(data);
      },[])

      const handleSearch=()=>{
          const newData=userData.
          filter(x=>x.job== (job==''?x.job:job))
          .filter(y =>y.locality == (locality==''?y.locality:locality));
          setUserSearchData(newData);
      }
      return <div>
          <Table>
              <tr>
                  <td>
                      <input className="from-control" type='text' placeholder='Enter Job...' onChange={(e)=>setJob(e.target.value)}/>
                  </td>
                  <td>
                      <select className="from-control" onChange={(e)=>setLocality(e.target.value)}>
                          <option value=''>select</option>
                          <option value='Vishrambag'>Vishrambag</option>
                          <option value='Government Colony'>Government Colony</option>
                          <option value='Patel Nagar'>Patel Nagar</option>
                          <option value='Dwarka chowk'>Dwarka chowk</option>
                          <option value='BST ground'>BST ground</option>
                      </select>
                  </td>
                  <td>
                      <button className="btn btn-primary" onClick={()=>handleSearch()}>Search</button>
                  </td>
              </tr>
          </Table>
          <Table responsive stripped size="sm">
              <thead>
                  <tr>
                      <th>Job</th>
                      <th>Locality</th>
                      <th>Name</th>
                      <th>Contact Number</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      userSearchData&&userSearchData.length>0 ?
                      userSearchData.map(item=>
                          <tr>
                              <td>{item.job}</td>
                              <td>{item.locality}</td>
                              <td>{item.name}</td>
                              <td>{item.contact}</td>
                          </tr>    
                      )
                      :'No Data'
                  }
              </tbody>
          </Table>

      </div>
  }

  export default CustomSearch;
