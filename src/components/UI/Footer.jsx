import "../../styles/footer.css";
import "@fortawesome/fontawesome-free/css/all.css";
const Footer = () => {
  return (
      <footer>
         
         <div className="footer-content">
            <div className="footer-links">
               <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact</a></li>
               </ul>
            </div>
            <div className="footer-social">
               <ul>
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
               </ul>
            </div>
         </div>
         <div className="footer-bottom">
            <p>&copy; 2023 BandZoo. All rights reversed</p>
            
            
            
         </div>
      </footer>
   );
};

export default Footer;
