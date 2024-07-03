
import ReactDOM from 'react-dom/client'
import Pcard from './price-card/cardlist.jsx'
import './price-card/cardlist.css'

const plans = [
  {
      "type": "FREE",
      "name": "Single User",
      "price": 0,
      "Storage": "50GB Storage",
      "Projects": "Unlimited Public Projects",
      "community": "Community Access",
      "pvt_projects": false,
      "phone_support": false,
      "domain": false,
      "reports": false,
    },
   {
      "type": "PLUS",
      "name": "5 Users",
      "price": 9,
      "Storage": "50GB Storage",
      "Projects": "Unlimited Public Projects",
      "community": "Community Access",
      "pvt_projects": true,
      "phone_support": true,
      "domain": true,
      "reports": false,
    },
    {
      "type": "PRO",
      "name": "Unlimited Users",
      "price": 49,
      "Storage": "50GB Storage",
      "Projects": "Unlimited Public Projects",
      "community": "Community Access",
      "pvt_projects": true,
      "phone_support": true,
      "domain": true,
      "reports": true,
    }

]


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div className="card-group">
    
    {
      plans.map((plan1)=>
      <Pcard
        
        key={plan1.type}
        type={plan1.type}
        name={plan1.name}
        price={plan1.price}
        storage={plan1.Storage}
        projects={plan1.Projects}
        community={plan1.community}
        pvtprjt={plan1.pvt_projects}
        phsupport={plan1.phone_support}
        domain={plan1.domain}
        reports={plan1.reports}

      />
      )}
  </div>
)
