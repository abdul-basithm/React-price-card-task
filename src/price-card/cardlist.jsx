/* eslint-disable react/prop-types */
import "./cardlist.css"
const Pcard = ({ type, name, price,storage,projects,community,pvtprjt,phsupport,domain,reports }) => {
   
    return (
        
      <div className="pad">
                   
            <div className="card border-dark mb-3" >
                <div className="card-header">{type}
                <h2 className="card-title">${price}/month</h2>
                </div>
                <div className="card-body text-dark">
                    
                    <p className="card-text">&#10003; {name}</p>
                    <p className="card-text">&#10003; {storage}</p>
                    <p className="card-text">&#10003; {projects}</p>
                    <p className="card-text">&#10003; {community}</p>
                    {pvtprjt?(<p className="card-text">&#10003; Unlimited private projects</p>):(<p className="card-text" id="prjt">&#x2716; Unlimited private projects</p>)}
                    {phsupport?(<p className="card-text">&#10003; Dedicated Phone Support</p>):(<p className="card-text" id="prjt">&#x2716; Dedicated Phone Support</p>)}
                    {domain?(<p className="card-text">&#10003; Free Subdomain</p>):(<p className="card-text" id="prjt">&#x2716; Free Subdomain</p>)}
                    {reports?(<p className="card-text">&#10003; Monthly Status Reports</p>):(<p className="card-text" id="prjt">&#x2716; Monthly Status Reports</p>)}
                  
                    <p></p>
                    <button type="button" className="btn btn-danger">Submit</button>
                </div>
            </div>

       </div>

    );
}
export default Pcard;