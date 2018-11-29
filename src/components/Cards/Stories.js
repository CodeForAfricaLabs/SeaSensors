import React, {Component} from 'react'
import MediaCard from './Cards'
import artem from '../../assets/artem.png'
import scuba from '../../assets/scuba.png'
import drone from '../../assets/drone.png'
import './Cards.css'

const stories = [
    {
        title: 'Story Title 1',
        bodyField: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'Launch Site',
        image: scuba
    }, {
        title: 'Story Title 2',
        bodyField: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'Launch Site',
        image: artem
    }, {
        title: 'Story Title 3',
        bodyField: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'Launch Site',
        image: drone
    }
]

class Stories extends Component {
    state = {
        stories
    }
    render() {
        return (
            <div className="Mask">
                <h1 className="Sea-Sensors-Stories">
                    Sea Sensors Stories.
                </h1>
                <div className="card">
                    {this
                        .state
                        .stories
                        .map(story => <MediaCard
                            key={story.title}
                            title={story.title}
                            image={story.image}
                            bodyField={story.bodyField}
                            linkText={story.linkText}/>)}
                </div>
            </div>
        )
    }
}

export default Stories;