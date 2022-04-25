import React from "react";
import { Image, Link, Info, Title } from "./Project-Style";

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ count: this.state.count+1 }), 5000);
    }
      
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { title, url, justify, align, images } = this.props.info;

        return(
            <Image justify={justify} align={align} image={images.base+images.sub[this.state.count%images.sub.length]}>
                <Link href={url}>
                    <Info>
                        <Title>{title}</Title>
                    </Info>
                </Link>
            </Image>
        );
    }
}

export default Project;