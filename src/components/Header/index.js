import React from 'react'
import {withStyles} from '@material-ui/core'
import HeaderImage1 from '../../assets/map.png'
import HeaderImage2 from '../../assets/HeaderImage2.png'
import grid from '../../assets/grid.png'
import NavBar from '../NavBar';
import HeaderText from '../HeaderText';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    View,
    Mask
} from "mdbreact";

const styles = {
    carouselParent: {
        height: "615px",
        maxHeight: "615px",
        width: "100%"
    },
    headerImage: {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    },
    grid: {
        position: "absolute",
        bottom: "23em",
        left: "65em"
    }
}

const Image = () => <div><img src={grid} style={{
    height: "8em"
}} alt="grid"/></div>

function HeaderCarousel(props) {
    return (
        <div className="carousel-parent">
            <MDBCarousel
                activeItem={1}
                length={2}
                showControls={true}
                showIndicators={true}
                interval={18000000}
                className="z-depth-1">
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <View>
                            <img
                                className={props.classes.headerImage}
                                src={HeaderImage1}
                                alt="First slide"/>
                            <Mask overlay="black-light"/>
                        </View>
                        <MDBCarouselCaption>
                            <NavBar/>
                            <HeaderText/>
                        </MDBCarouselCaption>
                        <MDBCarouselCaption>
                            <div className={props.classes.grid}><Image/></div>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <View>
                            <img
                                className={props.classes.headerImage}
                                src={HeaderImage2}
                                alt="Second slide"/>
                        </View>
                        <MDBCarouselCaption>
                            <NavBar/>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
}

export default withStyles(styles)(HeaderCarousel);