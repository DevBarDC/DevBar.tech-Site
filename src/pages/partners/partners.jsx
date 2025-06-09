import React from "react";
import { Nav, Footer } from "../../components/index";
import Partner from "./components/partner";

function Partners() {
    const partnersData = [
        {
            logo: "https://cdn.discordapp.com/icons/1330942786404352200/cc61d57643eee3b5696d2cc56476f009.png?size=80&quality=lossless",
            banner: "https://media.discordapp.net/attachments/1338150588696887358/1353132900962275370/Main-Banner.png?ex=68475fb7&is=68460e37&hm=e18add6d11922e98f39c6c26e9ad06391bf8666d471d6927819e40aadfcaad2a&=&format=webp&quality=lossless",
            name: "Partner 1",
            description: "Description 1"
        },
        {
            logo: "logo2.png",
            banner: "banner2.png",
            name: "Partner 2",
            description: "Description 2"
        }
    ];

    return (
        <>
            <style>{`
                .partners-container {
                    max-width: 1200px;
                    margin: 40px auto 40px auto;
                    padding: 32px 20px;
                    background: #23272a;
                    border-radius: 16px;
                    box-shadow: 0 4px 32px rgba(0,0,0,0.13);
                    text-align: center;
                }
                .partners-container h1 {
                    color: #b5e853;
                    font-size: 2.5em;
                    margin-bottom: 10px;
                    font-weight: bold;
                    letter-spacing: 1px;
                }
                .partners-container p {
                    color: #fff;
                    font-size: 1.2em;
                    margin-bottom: 32px;
                }
                @media (max-width: 700px) {
                    .partners-container {
                        padding: 16px 2vw;
                        border-radius: 8px;
                    }
                    .partners-container h1 {
                        font-size: 2em;
                    }
                }
            `}</style>
            <Nav />
            <div className="partners-container">
                <h1>Our Partners</h1>
                <p>We are proud to collaborate with the following partners:</p>
                <PartnersGrid partners={partnersData} />
            </div>
            <Footer />
        </>
    );
}

function PartnersGrid({ partners }) {
    // Calculate columns: max 3, but never more than partners.length
    const columns = Math.min(3, partners.length);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: "32px",
                margin: "20px 0",
                justifyItems: "center",
                maxWidth: "1100px",
                marginLeft: "auto",
                marginRight: "auto"
            }}
            className="partners-grid"
        >
            {partners.map((p, i) => (
                <Partner
                    key={i}
                    logo={p.logo}
                    banner={p.banner}
                    name={p.name}
                    description={p.description}
                />
            ))}
            <style>{`
                @media (max-width: 900px) {
                    .partners-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (min-width: 901px) and (max-width: 1200px) {
                    .partners-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default Partners;