import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import Near from './Near'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <h2 className='title-section'>Explore nearby</h2>
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
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
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