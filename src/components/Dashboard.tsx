import GroceryImage1 from '../res/grocery-items.jpg';
import GroceryImage2 from '../res/groceries.jpg';

const Dashboard = () => {



    return (
        <div className="dashboard-container shadow">
            <h1>Dashboard</h1>
            <div className="row card-container">
                <div className="col-md-5">
                    <img src={GroceryImage1} alt="Groceries-Image" className="grocery-images shadow"/>
                </div>
                <div className="col-md-7 description-container">
                <h5 className="text-description"> Eating healthy is one of the most talked-about and debated topics out there these days. 
                    Most of us do not eat the diet we should be consuming, and it can be really hard to change your ways at first. 
                    If you are trying to incorporate a healthier lifestyle, the most effective way to do this is not to follow any 
                    fad diet plans or trendy exercise regimes. The best way to adopt a healthier lifestyle and make it stick is to 
                    slowly change small things about your diet, and simultaneously develop healthy eating habits over time.
                </h5>
                </div>
            </div>
            <div className="row card-container">
                <div className="col-md-7 description-container">  
                <h5 className="text-description">
                    A healthy breakfast is the most essential meal of the day. Eating breakfast helps jumpstart the metabolism, 
                    makes us feel energetic, cut cravings during the day and provides the essential vitamins and proteins 
                    required for the day. It is also considered a key to maintaining weight loss for a long time. 
                    Fresh, frozen, dried or tinned. Slice them and store them into plastic lidded containers in the fridge, 
                    so you have a go-to snack when you're tempted to have sweets.  
                </h5>   
                </div>
                <div className="col-md-5">
                    <img src={GroceryImage2} alt="Groceries-Image" className="grocery-images shadow"/>
                </div>
            </div>
        </div>
        
    )
}
export default Dashboard;