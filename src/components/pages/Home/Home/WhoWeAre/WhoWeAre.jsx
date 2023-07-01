import { Container } from "react-bootstrap";
import "./WhoWeAre.css"
const WhoWeAre = () => {
    return (
        <div className="sec">
            <Container className="who-we-are">

            <img className="image-container" src="https://img.freepik.com/free-photo/close-up-chef-cooking-restaurant-kitchen_329181-16134.jpg?size=626&ext=jpg&uid=R103354572&ga=GA1.2.1614607020.1683036746&semt=ais" alt="" />
         <div className="ms-5">
         <p className="text-warning fw-bold">Who We are</p>
            <h3>The Artistry Behind the Aprons: Discover the Talented Team at Mr. Chef</h3>
            <p>Embark on a captivating culinary journey as we unveil the artistry behind the aprons at Mr. Chef. Meet our talented team of culinary experts, whose passion and expertise infuse every recipe with flavor, creativity, and a touch of magic.
            </p>
         </div>
            </Container>
      
        </div>
    );
};

export default WhoWeAre;