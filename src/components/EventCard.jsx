import eventCardImage from "../assets/images/eventcard.png";



export default function EventCard() {
    return(
        <div>
          <img src={eventCardImage} alt="Event Card" />
            <h1>BestSeller Book Bootcamp -write, & Publish Your Book-Lucknow</h1>
            <h2>Saturday, March 18, 9.30PM</h2>
            <h3>ONLINE EVENT-Attend anywhere</h3>
        </div>
    );
}