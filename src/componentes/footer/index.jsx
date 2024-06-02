import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(img/Footer.png)"}}>
            <div className="redes">
                <a href="https://github.com/karurosu-vihir" target="blank">
                    <img src="img/facebook.png" alt="facebook page"/>
                </a>
                <a href="https://github.com/karurosu-vihir" target="blank">
                    <img src="img/twitter.png" alt="twitter page"/>
                </a>
                <a href="https://github.com/karurosu-vihir" target="blank">
                    <img src="img/instagram.png" alt="instagram page"/>
                </a>
            </div>
            <img src="img/Logo.png" alt="Logo"/>
            <strong>Desarollado por Carlos E. Vijil</strong>
     </footer>
}
export default Footer;