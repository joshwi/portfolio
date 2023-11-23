/* eslint-disable*/
import React from "react"
import resume from "../assets/json/resume.json"

const generateCareers = (data) => {
    let html = data.map(entry => {
        return (
            <>
                <div className="card primary-bg d-block d-md-none" style={{ marginTop: "1rem" }}>
                    <div className="card-body">
                        <div className="row align-items-start" style={{ padding: "1rem" }}>
                            <div className="col-auto"><img src={process.env.PUBLIC_URL + entry.icon} /></div>
                            <div className="col"><h4 className="card-title">{entry.title}</h4><p className="card-title">{entry.org}</p></div>
                        </div>
                        <div className="row align-items-start" style={{ padding: "2rem" }}><p className="card-text">{entry.description}</p></div>
                    </div>
                </div>
                <div className="card primary-bg d-none d-md-block" style={{ margin: "2rem" }}>
                    <div className="card-body">
                        <div className="row align-items-start" style={{ padding: "1rem" }}>
                            <div className="col-auto"><img src={process.env.PUBLIC_URL + entry.icon} /></div>
                            <div className="col"><h4 className="card-title">{entry.title}</h4><p className="card-title">{entry.org}</p></div>
                        </div>
                        <div className="row align-items-start" style={{ padding: "2rem" }}><p className="card-text">{entry.description}</p></div>
                    </div>
                </div></>
        )
    })
    return html
}

const generateSkills = (data) => {
    let skills = data.map(entry => {
        let category = entry.item.map((entry, index) => { return (<div id={index} className="col-auto"><img src={process.env.PUBLIC_URL + entry.icon} width="25pt" height="25pt" /></div>) })
        let category_xl = entry.item.map((entry, index) => { return (<div id={index} className="col-auto"><img src={process.env.PUBLIC_URL + entry.icon} width="50pt" height="50pt" /></div>) })
        return (
            <>
                <div className="row center-div" style={{ paddingTop: "1rem" }}><div className="col"><p>{entry.category}</p></div></div>
                <div className="row center-div d-flex d-md-none" style={{ padding: "1rem" }}>{category}</div>
                <div className="row center-div d-none d-md-flex" style={{ padding: "1rem" }}>{category_xl}</div>
            </>)
    })

    return <><div className="card primary-bg d-block d-md-none" style={{ padding: "1rem", marginTop: "1rem" }}>{skills}</div><div className="card primary-bg d-none d-md-block" style={{ padding: "1rem", margin: "2rem" }}>{skills}</div></>
}


// const Dropdown = (title, headers, modifier) => {

//     const [visible, SetVisible] = useState(false)

//     return (
//         <div className="dropdown">
//             <button type="button" className="btn secondary-bg dropdown-toggle" onClick={() => { SetVisible(!visible) }}>{title.header}</button>
//             {visible && (
//                 <div className="dropdown-menu dropdown-menu-end block">
//                     {headers.map((entry) => {
//                         return <div id={entry} className="dropdown-item" onClick={() => { modifier({ [title.key]: entry }); SetVisible(false); }}>{entry.replace(/_/g, " ")}</div>
//                     })}
//                 </div>
//             )}
//         </div>
//     )
// }

function Home(props) {

    // let nav = useHistory()

    // const [sources, SetSources] = useState([])
    // const [targets, SetTargets] = useState([])

    // useEffect(() => { console.log(props.db.params) }, [props.db.params])

    // useEffect(() => {
    //     if (props.db.relationships) {
    //         SetSources(_.uniq(props.db.relationships.map((entry) => { return entry.source })).sort())
    //         SetTargets(props.db.relationships.filter(x => x.source == props.db.params.source).map((entry) => { return entry.target }).sort())

    //     }
    // }, [props.db])

    return (
        <>
            <div className="container-fluid" style={{ padding: "2rem", overflow: "auto" }}>
                {/* <div className="card"> */}
                {generateCareers(resume.careers)}
                {/* </div> */}
                {/* <div className="card primary-bg" style={{ padding: "1rem",  margin: "2rem" }}> */}
                {generateSkills(resume.skills)}
                {/* </div> */}
            </div>


        </>
    )
}

export default Home