// Import Assets
import profile from '../assets/profile.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Peter Pisarz" />

            <div className='header__content'>
                <h1>Hi, I'm Peter Pisarz</h1>
                <p>Blockchain Developer</p>
                <a href="https://www.linkedin.com/in/peter-joseph-p/" target="_blank" className="button">Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;