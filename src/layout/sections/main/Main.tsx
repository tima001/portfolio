import React from 'react';
import styled from "styled-components";
import selfPhoto from '../../../assets/images/self-photo.png'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Temirlan Musrepbekov</Name>
                    <MainTitle>A Frontend Developer.</MainTitle>
                </div>
                <Photo src={selfPhoto} alt="Profile photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
min-height: 100vh;
  background-color: #fff5e7;
`
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
    
`
const Name = styled.h2`
    
`