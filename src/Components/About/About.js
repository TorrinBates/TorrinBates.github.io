import React from "react";
import Border from "../Border/Border";
import { CircleGroup, DashedCircle, ImageCircle, Title, Text, Icon, Panel } from "./About-Style";
import { ReactComponent as Soccer } from "./Hobby Icons/soccer.svg";
import { ReactComponent as Bike } from "./Hobby Icons/bike.svg";
import { ReactComponent as Game } from "./Hobby Icons/games.svg";
import { ReactComponent as Skiing } from "./Hobby Icons/skiing.svg";
import { ReactComponent as Code } from "./Hobby Icons/code.svg";

function About() {
    const hobbies = [{delay: 0, icon: <Bike/>}, {delay: 2, icon: <Code/>}, {delay: 4, icon: <Soccer/>}, {delay: 6, icon: <Game/>}, {delay: 8, icon: <Skiing/>}];

    return(
        <Border>
            <CircleGroup>
                <DashedCircle/>
                <ImageCircle/>
            </CircleGroup>
            <Title>Torrin Bates</Title>
            <Text>
            Purus in mollis nunc sed id semper risus in. Vel orci porta non pulvinar neque laoreet suspendisse. Libero nunc consequat interdum varius sit. Pulvinar pellentesque habitant morbi tristique senectus et netus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Pellentesque pulvinar pellentesque habitant morbi tristique. Cum sociis natoque penatibus et magnis dis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consequat ac felis donec et odio pellentesque diam volutpat. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Viverra vitae congue eu consequat ac felis donec et odio. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Urna neque viverra justo nec. Lorem sed risus ultricies tristique nulla aliquet. Purus in mollis nunc sed id semper risus in. Vel orci porta non pulvinar neque laoreet suspendisse. Libero nunc consequat interdum varius sit. Pulvinar pellentesque habitant morbi tristique senectus e
            </Text>
            <Panel>
                {
                    hobbies.map(obj => <Icon key={obj.delay} delay={obj.delay}>{obj.icon}</Icon>)
                }
            </Panel>
        </Border>
    ); 
}

export default About;