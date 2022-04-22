import React from "react";
import { Image, Link, Info, Title } from "./Project-Style";

function Project(props) {
    const { title, url, justify, align } = props.info;
    return(
        <Image justify={justify} align={align} >
            <Link href={url}>
                <Info>
                    <Title>{title}</Title>
                </Info>
            </Link>
        </Image>
    );
}

export default Project;