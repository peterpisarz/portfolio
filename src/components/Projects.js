// Import images
import sxswpunks from '../assets/sxswpunks.jpg';
import hollycoin from '../assets/hollycoin.jpg';
import project3 from '../assets/povtexas.png';
import leverage from '../assets/leverage.png';
import lapiscina from '../assets/lapiscina.png';
import dashboard from '../assets/dashboard.png';
import leveragegrappling from "../assets/leveragegrappling.png";
import arbibot from "../assets/arbibot.png"

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Tournament Smart Contract</h3>
                    <img src={leveragegrappling} alt="HSC Dashboard" />
                    <p>My smart contract for running an eight man tournament for jiu jitsu competitors. Tracks wins and loses in a bracket and payouts to the winner.
                    </p>
                    <div class="button-container">
                        <a href="https://github.com/peterpisarz/Leverage-Grapping" target="_blank" className="button">Code</a>
                    </div>    
                </div>

                <div className="projects__card">
                    <h3>Arbitrage Trading Bot</h3>
                    <img src={arbibot} alt="LVG Decentralized Exchange" />
                    <p>Smart Contract and Node bot which finds price discrepancies on DEXs and executes arbitrage token swaps with flashloans.
                    </p>

                    <div class="button-container">
                        <a href="https://github.com/peterpisarz/Uniswap-V3-Arbitrage-Bot-on-Arbitrum" target="_blank" className="button">Code</a>
                    </div>
                </div>

            </div>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Decentralized Exchange</h3>
                    <img src={leverage} alt="LVG Decentralized Exchange" />
                    <p>In this upgraded version of my Decentralized Exchange, I created a new token and listed it alongside other ERC20 tokens. 
                    </p>
                    <div class="button-container">
                        <a href="https://leverage-exchange.on.fleek.co/" target="_blank" className="button">Site</a>
                        <a href="https://github.com/peterpisarz/LVG-Exchange" target="_blank" className="button">Code</a>
                    </div>
                </div>

                <div className="projects__card">
                    <h3>NFT Photography Project</h3>
                    <img src={project3} alt="Open Emoji Project" />
                    <p>This is my first custom NFT project. I took all these photos and added customized metadata for additional unique characteristics.
                    </p>

                    <div class="button-container">
                        <a href="https://pov-texas.on.fleek.co/" target="_blank" className="button">Site</a>
                        <a href="https://github.com/peterpisarz/POV-Texas" target="_blank" className="button">Code</a>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Projects;