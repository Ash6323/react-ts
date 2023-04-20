import Banner from '../res/banner.jpg';
import ApiImage1 from '../res/api1.jpg';
import ApiImage2 from '../res/api2.jpg';
import ReactImage from '../res/react.jpg';

const Dashboard = () => {

    return (
        <div className="dashboard-container shadow">
            <h1>Dashboard</h1>
            <div className="row card-container">
                <div className="col-md-12">
                    <img src={Banner} alt="Banner-Image" className="dashboard-banner-img shadow"/>
                </div>
            </div>
            <div className="row card-container">      
                <div className="col-md-7 description-container">
                <h5 className="text-description"> The use of HTTP POST vs HTTP GET for read-only (or query) operations in 
                    REST APIs recently came up in a conversation. For this particular shop, there had been a long-standing 
                    ban on the use of GET requests for use in homegrown applications. This had been the case since before 
                    REST APIs were in common use and traditional web applications (server-side generated HTML) were the 
                    standard architecture.
                </h5>
                </div>
                <div className="col-md-5">
                    <img src={ApiImage1} alt="Groceries-Image" className="dashboard-images shadow"/>
                </div>
            </div>
            <div className="row card-container">
                <div className="col-md-12 description-container">  
                <h5 className="text-description">
                    The only problem was no one really knew or remembered why it wasn't allowed — just that it was “insecure”. 
                    It's unfortunate that such a standard evolved because it prevents the full syntax of HTTP to be utilized
                    in their REST APIs. Still, we must understand what originally motivated such a standard to to be put 
                    in place in the beginning. 
                </h5>   
                </div>
                {/* <div className="col-md-5">
                    <img src={ApiImage2} alt="Groceries-Image" className="dashboard-images shadow"/>
                </div> */}
            </div>
            <div className="row card-container">
                <div className="col-md-4 description-container">
                    <div className="card dashboard-cards">
                        <img src={ReactImage} className="card-img-top" alt="React-logo"></img>
                        <div className="card-body">
                            <h5 className="card-title">React</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up 
                                                    the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 description-container">
                    <div className="card dashboard-cards">
                        <img src={ApiImage2} className="card-img-top" alt="API-Image"></img>
                        <div className="card-body">
                            <h5 className="card-title">API</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up 
                                                    the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 description-container">
                    <div className="card dashboard-cards">
                        <img src={ReactImage} className="card-img-top" alt="React-logo"></img>
                        <div className="card-body">
                            <h5 className="card-title">React</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up 
                                                    the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
export default Dashboard;