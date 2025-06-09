import React from "react";

function Partner({ logo, name, description, banner }) {
    return (
        <>
            <style>{`
                .partner-card {
                    background: #23272a;
                    border-radius: 18px;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.13);
                    padding: 0 0 32px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    text-align: left;
                    min-width: 320px;
                    min-height: 340px;
                    max-width: 420px;
                    margin: 0 auto;
                    position: relative;
                    overflow: visible;
                    transition: transform 0.15s, box-shadow 0.15s;
                }
                .partner-card:hover {
                    transform: translateY(-6px) scale(1.03);
                    box-shadow: 0 8px 32px rgba(114,137,218,0.18);
                }
                .partner-banner-link {
                    display: block;
                    width: 100%;
                    height: 110px;
                    border-radius: 18px 18px 0 0;
                    overflow: hidden;
                    position: relative;
                }
                .partner-banner-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .partner-header {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    margin-top: ${banner ? "-48px" : "32px"};
                    margin-bottom: 12px;
                    width: 100%;
                    padding-left: 32px;
                    position: relative;
                    z-index: 2;
                }
                .partner-logo-link {
                    display: block;
                    width: 96px;
                    height: 96px;
                    border-radius: 16px;
                    background: #181b20;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.12);
                    overflow: hidden;
                    border: 4px solid #fff;
                    position: relative;
                }
                .partner-logo-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    display: block;
                }
                .partner-name {
                    font-size: 1.5em;
                    font-weight: bold;
                    color: #b5e853;
                    margin-bottom: 0;
                    margin-top: 0;
                    text-shadow: 0 2px 8px #181b20cc;
                }
                .partner-description {
                    color: #fff;
                    font-size: 1.1em;
                    line-height: 1.7;
                    margin: 0 32px;
                    margin-top: 8px;
                    text-align: left;
                }
                @media (max-width: 600px) {
                    .partner-card {
                        min-width: 90vw;
                        max-width: 98vw;
                        padding-bottom: 24px;
                    }
                    .partner-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;
                        padding-left: 16px;
                        margin-top: ${banner ? "-48px" : "32px"};
                    }
                    .partner-description {
                        margin: 0 12px;
                    }
                }
            `}</style>
            <div className="partner-card">
                {banner && (
                    <a
                        className="partner-banner-link"
                        href={banner}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={banner}
                            alt={name + " banner"}
                            className="partner-banner-img"
                        />
                    </a>
                )}
                <div className="partner-header">
                    <a
                        className="partner-logo-link"
                        href={logo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logo}
                            alt={name + " logo"}
                            className="partner-logo-img"
                        />
                    </a>
                    <span className="partner-name">{name}</span>
                </div>
                <div className="partner-description">{description}</div>
            </div>
        </>
    );
}

export default Partner;