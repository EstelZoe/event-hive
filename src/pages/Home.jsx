import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    // Declare state variable in React
    const [events, setEvents] = useState([]);


    // Define a function to fetch events from API
    const getEvents = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setEvents(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Run fetcher based on side-effects
    useEffect(getEvents, []);



    return (
        <>
            <NavBar />
            <section className="bg-[url(./assets/images/image.png)] h-[596px] by-cover w-[95%] mx-auto relative">
                <h1 className="text-big-heading text-white w-[30%] mx-auto text-center pt-20">MADE FOR THOSE WHO DO</h1>

                <form className="bg-navy-blue w-[90%] mx-auto py-6  px-10 flex flex-row justify-between  absolute -bottom-12 left-[5%]">
                    <div className="flex flex-col w-[30%]">
                        <label className="text-white" htmlFor="type">Looking for</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md">
                            <option selected disabled>Choose event type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-[30%]">
                        <label className="text-white" htmlFor="location">Location</label>
                        <select name="location" id="location" className="bg-white p-2 rounded-md">
                            <option selected disabled>Choose location</option>
                            <option value="accra">Accra</option>
                            <option value="kumasi">Kumasi</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-[30%]">
                        <label className="text-white" htmlFor="when">When</label>
                        <input type="datetime-local" name="when" id="when" className="bg-white 1.5 rounded-md" />
                    </div>
                    <div className="text-white sixe-[40px] flex flex-row justify-center items-center bg-primary rounded-md px-2 py-2">
                        <Search />
                    </div>

                </form>

            </section>
            <section className="mt-20">
                <div>
                    <h1>
                        <span className="uppercase text-2xl text-bolder m-2">Upcoming</span>
                        <span className="uppercase text-2xl text-blue-600 text-bolder mb-2">Events</span>
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {events.map(item => {
                        return (
                            <EventCard 
                            key={item.id} 
                            event={item} />
                        );
                    })}
                </div>
            </section>

            <section className="h-[200px]">
            </section>






            <Footer />
        </>


    );
}