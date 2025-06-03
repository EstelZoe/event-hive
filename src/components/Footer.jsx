import { Linkedin, Instagram, Facebook } from "lucide-react"


function Footer() {
    return (
        <footer className="bg-navy-blue text-white">
            <h1 className="flex justify-center 4xl text-border gap-2"><span>Event</span><span className="text-blue-800">Hive</span></h1>
            <form className="flex justify-center mb-10 gap-3">
                <input className="border bg-white text-gray-600 px-2- py-3" type="email" placeholder="Enter your mail" name="email" />
                <button className="border-line bg-purple-700 text-white px-10 py-2 border-rounded" type="submit">Subscribe</button>
            </form>
            <div className="flex flex-row  justify-center  gap-4 mb-5">
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Get In Touch</span>
                <span>FAQs</span>
            </div>
            <hr />
            <div className="flex flex-row justify-around gap-10">
                <div className="flex flex-row justify-evenly gap-4">
                    <button>English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>
                <div className="flex flex-row gap-10 mt-5">
                    <Linkedin />
                    <Instagram />
                    <Facebook />
                </div>

 
            </div>
            <div className="flex flex-row justify-end py-4 gap-10">
                <p>Non Copyrighted© 2025 Upload By EventHive</p>
            </div>

        </footer>
    );
}
export default Footer;