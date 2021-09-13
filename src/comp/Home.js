import React from 'react'
import './Home.css'
import img1 from './znike.PNG'

function Home() {
    return (
        <div className="home">
            <div className="home__texts">
                <p className="home__text">SAVE UP TO 40%<br></br>Shop All Our New Markdowns</p>
            </div>
            
            <div className="home__images">
                <img className="responsive" src={img1} alt="logo" />
            </div>

            <div>
                <h1 className="home__connect">YOUR NIKE</h1>
                <h5 className="home__connec">More sport,more inspiration, more Nike!</h5>
            </div>

            <div className="home__para">
               <h4 className="home__p">Your Personal Guide to Greatness</h4>
               <p className="home__pp">The Nike App has everything you need to get moving. That means the latest gear,<br></br> 
               engaging stories and a worldwide community. It’s all here, personalized for you.</p>
            </div>

            <div className="home__images">
                <img className="responsive" src='https://static.nike.com/a/images/f_auto/dpr_1.0/w_1237,c_limit/258551e2-35e4-4109-895f-7277635a8288/nike-app.jpg' alt="logo" />
            </div>
        </div>
    )
}

export default Home
