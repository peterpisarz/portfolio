// Import images
import sxswpunks from '../assets/sxswpunks.jpg';
import hollycoin from '../assets/hollycoin.jpg';
import project3 from '../assets/povtexas.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Original Photography</h3>
                    <img src={project3} alt="Open Emoji Project" />
                    <p>This is my first custom NFT project. I took all these photos and added customized metadata for additional unique characteristics.
                    </p>

                    <a href="https://pov-texas.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/peterpisarz/POV-Texas" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>SXSW Punks</h3>
                    <img src={sxswpunks} alt="SXSW Punks NFT Launch" />
                    <p>This NFT project used an art generator to develop 25 unique "SXSW Punks" that can be 
                    minted and displayed on OpenSea
                    </p>

                    <a href="https://sxswpunks.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/peterpisarz/SXSW-Punks" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Holly Coin</h3>
                    <img src={hollycoin} alt="Holly Coin Exchange" />
                    <p>My first blockchain project was to develop my own ERC20 token and decentralized exchange. 
                    You can buy some using the Kovan 
                    testnet!
                    </p>

                    <a href="https://hollycoin.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/peterpisarz/hollycoin" target="_blank" className="button">Code</a>
                </div>

            </div>

        </section>
    );
}

export default Projects;