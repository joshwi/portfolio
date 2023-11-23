/* eslint-disable*/
import React, { useState } from "react"

const photos = [
    { src: "/photos/buddha.jpg", thumb: "/thumbnails/buddha.jpg" },
    { src: "/photos/palms.jpg", thumb: "/thumbnails/palms.jpg" },
    { src: "/photos/bungalow.jpg", thumb: "/thumbnails/bungalow.jpg" },
    { src: "/photos/tahoe.jpg", thumb: "/thumbnails/tahoe.jpg" },
    { src: "/photos/convict_lake.jpg", thumb: "/thumbnails/convict_lake.jpg" },
    { src: "/photos/lifts.jpg", thumb: "/thumbnails/lifts.jpg" },
    { src: "/photos/hanalei.jpg", thumb: "/thumbnails/hanalei.jpg" },
    { src: "/photos/princeville.jpg", thumb: "/thumbnails/princeville.jpg" },
    { src: "/photos/thunderbird.jpg", thumb: "/thumbnails/thunderbird.jpg" },
];

const generateGrid = (photos, n, setter) => {

    let grid = [], columns = []


    photos.map((entry, index) => {
        columns.push(<div className="col"><img src={entry.thumb} style={{ width: "100%" }} onClick={() => setter({ visible: true, photo: entry.src })} /></div>)

        if ((index + 1) % n == 0) {
            grid.push(<div className="row p-3">{columns}</div>);
            columns = []
        }

        if ((index + 1) == photos.length) {
            for (let x = columns.length; x < n; x++) { columns.push(<div className="col"></div>) }
            grid.push(<div className="row p-3">{columns}</div>);
        }
    })

    return grid
}

const expandPhoto = (state, SetState) => {
    return <div class="modal">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{ backgroundColor: "black"}}>
                <button type="button" className="btn transparent d-none d-md-block" onClick={() => SetState({ ...state, visible: false })} style={{ position: "absolute", top: "2rem", right: "2rem", color: "white" }}><i className="bi bi-x-lg secondary-text" style={{ fontSize: '2rem' }} /></button>
                <button type="button" className="btn transparent d-block d-md-none" onClick={() => SetState({ ...state, visible: false })} style={{ position: "absolute", top: "6rem", right: "2rem", color: "white" }}><i className="bi bi-x-lg secondary-text" style={{ fontSize: '2rem' }} /></button>
                <div className="container center-div">
                    <img src={state.photo} className="photo-lense" />
                </div>
            </div>
        </div>
    </div>
}

function Photography() {

    const [state, SetState] = useState({ visible: false, photo: null })

    let double_grid = generateGrid(photos, 2, SetState)
    let triple_grid = generateGrid(photos, 3, SetState)

    return (
        <div className="container-fluid p-4 p-md-5" style={{ overflow: "auto" }}>
            <div className="container-fluid primary-bg radius-sm stealth p-2" style={{ overflow: "auto" }}>
                <div className="d-block d-lg-none">{double_grid}</div>
                <div className="d-none d-lg-block">{triple_grid}</div>
            </div>
            {state.visible && state.photo && expandPhoto(state, SetState)}
        </div>
    )
}

export default Photography