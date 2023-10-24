import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId:string
    title:string
    description:string
}
export const Skill = (props:SkillPropsType) => {
    return (
        <FlexWrapper direction={"column"} align={"center"}>
            <IconWrapper>
                <Icon iconId={props.iconId}/>
            </IconWrapper>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillDescription>{props.description}</SkillDescription>

        </FlexWrapper>

    );
};

const IconWrapper =  styled.div`
  width: 80px;
  height: 80px;
  transform: rotate(0deg);
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  display: flex;
  justify-content: center;
`
const SkillTitle =  styled.h4`
 
`
const SkillDescription =  styled.p`
 
`