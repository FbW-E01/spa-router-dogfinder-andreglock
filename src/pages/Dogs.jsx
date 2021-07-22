import { NavLink, Route, Switch, useParams } from 'react-router-dom';
import React from 'react';
import hazel from './../images/hazel.jpg'
import tubby from './../images/tubby.jpg'
import whiskey from './../images/whiskey.jpg'
import linda from './../images/linda.jpg'

function Dog() {
    const { dogName } = useParams();
    document.querySelectorAll(".overlay").forEach((e) => e.style.backgroundColor = 'rgba(169, 169, 169, 0.561' )
    if (dogName === 'linda') {
        return <div>
            <h2>Linda Age: 4</h2>
            <p>Linda is the cutest</p>
            <p>Linda is highly intelligent</p>
            <p>Linda likes Mangos and Cucumbers</p>
            <p>Linda has short legs and thinks she is a guard dog, but she isn't</p>
        </div>
    }
    if (dogName === 'whiskey') {
        return <div>
            <h2>Whiskey Age: 2</h2>
            <p>Whiskey is a terrible guard dog</p>
            <p>Whiskey likes popcorn</p>
            <p>Whiskey can snuff whiskey from far away</p>
        </div>
    }
    if (dogName === 'hazel') {
        return <div>
            <h2>Hazel Age: 0</h2>
            <p>Hazel has soo much energy</p>
            <p>Hazel loves people more than dogs</p>
            <p>Hazel is not potty trained yet</p>
        </div>
    }
    if (dogName === 'tubby') {
        return <div>
            <h2>Tubby Age: 2</h2>
            <p>Tubby is really stupid</p>
            <p>Tubby has a short nose and pants often</p>
            <p>Tubby doesn't like walks</p>
            <p>Linda likes Tubby</p>
        </div>
    }
}

export default function Dogs() {

    return (<div>
        <h1>We have Dogz, click on them for more info!</h1>
        <p>
            <NavLink to={`/linda`}>
                <div className="container">
                    <img src={linda} alt="linda"/>
                    <div className="overlay"></div>
                </div>
            </NavLink>
            <NavLink to={`/whiskey`}>
                <div className="container">
                    <img src={whiskey} alt="whiskey"/>
                    <div className="overlay"></div>
                </div>
            </NavLink>
            <NavLink to={`/hazel`}>
                <div className="container">
                    <img src={hazel} alt="hazel"/>
                    <div className="overlay"></div>
                </div>
            </NavLink>
            <NavLink to={`/tubby`}>
                <div className="container">
                    <img src={tubby} alt="tubby"/>
                    <div className="overlay"></div>
                </div>
            </NavLink>
        </p>

        <Switch>
            <Route path={`/:dogName`} component={Dog} />
        </Switch>
    </div>)
}