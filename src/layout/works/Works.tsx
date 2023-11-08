import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTiitle";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../assets/images/project-1.png'
import timerImg from './../../assets/images/project-2.png'

const items = ["All", "Landing Page", "React", "SPA"]

const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={items}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={"Social Network"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                      src={socialImg}
                />
                <Work title={"Timer"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                      src={timerImg}
                />
            </FlexWrapper>

        </StyledWorks>
    );
};

export default Works;

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #deefff;
`