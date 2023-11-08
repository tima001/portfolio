import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTiitle";
import {Icon} from "../../components/icon/Icon";
import Slider from "../../components/slider/Slider";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quote"}/>
                <Slider/>
            </FlexWrapper>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #00a3ff;
  min-height: 50vh;
` 