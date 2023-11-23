/* eslint-disable*/
import React from "react"

const info = {
    title: "Josh Williams",
    icon: "/photos/portrait.jpg",
    description: "With a background spanning both Cisco as a network engineer and Apple as a software engineer, I've navigated the dynamic landscapes of networking architectures and software development. At Cisco, I fine-tuned my skills in crafting robust network infrastructures, fostering seamless connectivity. Transitioning to Apple, I delved into software engineering, creating user-centric applications that merged innovation with functionality. My expertise bridges network optimization, software design, and embracing the ever-evolving tech forefront. Beyond coding, I'm passionate about mentoring and community engagement, eager to collaborate and innovate in this ever-expanding tech universe.",
    links: [
        {
            name: "github",
            icon: "/svg/social/github.svg",
            url: "https://github.com/joshwi"
        },
        {
            name: "discord",
            icon: "/svg/social/discord.svg",
            url: "https://github.com/joshwi"
        },
        {
            name: "youtube",
            icon: "/svg/social/youtube.svg",
            url: "https://github.com/joshwi"
        }
    ]
}

const generateProfile = (data) => {
    let links = data.links.map(entry => {
        return <div className="col p-1" style={{display: "inline"}}><a href={entry.url} ><img src={process.env.PUBLIC_URL + entry.icon} width="25pt" height="25pt" /></a></div>
    })
    return (
        <>
            <div className="container-fluid primary-bg radius-sm d-none d-md-block">
                <div className="row p-5">
                    <div className="col-auto"><img className="rounded-circle" src={process.env.PUBLIC_URL + data.icon} width="250pt" height="250pt" /></div>
                    <div className="col p-5"><h1>{data.title}</h1>{links}</div>
                    <div className="col" />
                </div>
                <div className="row p-3">
                    <p className="d-none d-md-block d-lg-none" style={{lineHeight: 2}}>{data.description}</p>
                    <p className="d-none d-lg-block" style={{lineHeight: 3}}>{data.description}</p>
                </div>
            </div>
            <div className="container-fluid primary-bg radius-sm d-block d-md-none">
                <div className="row p-3">
                    <div className="col center-div"><img className="rounded-circle" src={process.env.PUBLIC_URL + data.icon} width="100pt" height="100pt" /></div>
                </div>
                <div className="row p-3">
                    <div className="col-auto"><h2>{data.title}</h2></div>
                    <div className="col">{links}</div>
                </div>
                <div className="row p-3">
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    )
}

function About(props) {

    return (
        <div className="container-fluid p-4 p-md-5">
            {generateProfile(info)}
        </div>
    )
}

export default About