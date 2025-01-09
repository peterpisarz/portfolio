// Import Assets
import profile from '../assets/profile2.jpg';

const About = () => {
    return (
        <section className='about'>
            <h2>About Me</h2>
            <p>
                As a former aerospace engineer, I found my career disrupted during the pandemic.
                With commercial air travel down over 90%, I knew it was time to 
                learn new skills. I had purchased some of my first cryptocurrencies but admitted to
                myself that I really didn't understand how it worked, so I began to dive deeper into
                the programming side of things.

                <br/><br/>
                
                I started with Dapp University in Spring of 2021 with their Blockchain Bootcamp. The bootcamp walks you 
                through creating a decentralized token exchange (DEX) you'll find in my portfolio below. I also took 
                an interest in NFTs and created a project from some of my own photography. 

                <br/><br/>

                I moved on from tutorials to <b>develop my own projects</b> completely from scratch. Most recently is my Tournament Project
                which organizes an eight man sports bracket I developed for jiu jitsu athletes. It's entirely a product
                of my own ideas and logic which I am refining to be used in real life. It's a way of collecting registration fees
                and distributing them to the tournament promoter and winner of the bracket. 
                
                <br/><br/> 
                
                I have been spending a majority of my time lately in DeFi. I have developed a basic arbitrage 
                trading bot which balances prices across DEXs and makes a profit using flashloans. I have expanded this bot to work
                on many different chains and interfaces. Currently I am expanding the bot onto new DEXs like Aerodrome on the Base L2 chain. 
                
                <br/><br/>

                Please explore, provide feedback and <a href="https://www.linkedin.com/in/peter-pisarz-6b339088/" target="_blank">reach out</a> to discuss further!

            </p>
        </section>
    );
}

export default About;