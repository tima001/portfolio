import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTiitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyleldSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper>
                <Skill title="html5"
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                       iconId="codeSvg"/>
                <Skill title="css3"
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                       iconId="css3Svg"/>
                <Skill title="React"
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                       iconId="reactSvg"/>
                <Skill title="typescript"
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                       iconId="typescriptSvg"/> <
                Skill title="styled components"
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                       iconId="styledComponentsSvg"/>
                <Skill title="WEB DESIgN"
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
                       iconId="figmaSvg"/>
            </FlexWrapper>
        </StyleldSkills>
);
};

const StyleldSkills = styled.section``