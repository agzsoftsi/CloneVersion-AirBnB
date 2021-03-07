import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import Near from './Near'
import Become from './Become'



// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <h2 className='title-section place'>Explore nearby</h2>
            <div className='home__section__place'>
            
            <Near
                src="https://a0.muscache.com/im/pictures/20356d40-a45f-4680-a9d0-5bb0a3836e4d.jpg?im_q=medq&im_w=240"
                place="Cali"
                time="2.5 hour drive."
            />
             <Near
                 src="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=240"
                 place="Salento"
                 time="3 hour drive."
            />
             <Near
                 src="https://a0.muscache.com/im/pictures/5c83ea68-2d92-4413-84ec-dcfe06761063.jpg?im_q=medq&im_w=240"
                 place="Pereira"
                 time="3 hour drive."
            />
             <Near
                src="https://a0.muscache.com/im/pictures/676c0a60-2a5a-4598-aeeb-10a81aa5232f.jpg?im_q=medq&im_w=240"
                place="Guatapé"
                time="7.5 hour drive."
            />
            </div>
            <div className='home__section__place'>
             <Near
                src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
                place="Popayán"
                time="2.5 hour drive."
            />
             <Near
                 src="https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240"
                 place="Medellín"
                 time="7 hour drive."
            />
             <Near
                 src="https://a0.muscache.com/im/pictures/08b33515-49eb-4b9b-8e60-f962fb7e700b.jpg?im_q=medq&im_w=240"
                 place="Melgar"
                 time="6 hour drive."
            />
              <Near
                 src="https://a0.muscache.com/im/pictures/8d12e283-00e1-4365-9b6d-e578f75aab23.jpg?im_q=medq&im_w=240"
                 place="Ipiales"
                 time="5 hour drive."
            />
            
            </div>
            <h2 className='title-section'>Live anywhere</h2>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=480"
                title="Cabins and cottages"
                description="Comfortable private places, with room for friends or family."
            />
               <Card
                src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
                title="Pets allowed"
                description="Now your pets can feel of amazing places."
            />
            </div>
            <div className='home__section become'>
            <Become
                src="https://a0.muscache.com/im/pictures/eff28e1d-51c4-49ff-8266-68d6929ea1ec.jpg?im_w=1680"
                title="Your world is worth sharing"
                description="Turn your extra space into your next opportunity."
            />
            <button className="section-button">Become a Host</button>
            </div>

            <h2 className='title-section'>Experience the world</h2>
            <h3 className='subtitle-section'>Unique activities with local experts—in person or online.</h3>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=480"
                title="Online Experiences"
                description="Travel the world without leaving home."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=480"
                title="Experiences"
                description="Things to do eherever you are."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=480"
                title="Adventures"
                description="Multi-day trips with meals and stays."
            />
            
            </div>
            <h2 className='title-section last'>Last seen ...</h2>
            <div className='home__section last'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
        </div>
    )
}

export default Home