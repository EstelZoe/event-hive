import { Linkedin, Instagram, Facebook } from "lucide-react"


function Footer() {
    return (
        <footer className="bg-navy-blue text-white">
            <h1 className="flex justify-center 4xl text-border gap-2"><span>Event</span><span className="text-blue-800">Hive</span></h1>
            <form className="flex justify-center text-4xl">
                <input type="email" placeholder="Enter your mail" name="email" />
                <button type="submit">Subscribe</button>
            </form>
            <div>
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Get In Touch</span>
                <span>FAQs</span>
            </div>
            <div>
                <div>
                    <button>English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>
                <Linkedin/>
                <Instagram/>
                <Facebook/>

            </div>
            <p>Non Copyrighted© 2025 Upload By EventHive</p>
        </footer>
    );
}
export default Footer;