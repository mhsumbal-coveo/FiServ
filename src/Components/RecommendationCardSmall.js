import React from 'react';
import {Theme} from '../theme';
import styled from "styled-components";
import {chevronRight} from 'react-icons-kit/feather/chevronRight'
import { Icon } from 'react-icons-kit';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RecommendtionCardSmall = ({title, description, video = true,clickUri,onClick,onContextMenu,onMouseDown,onMouseUp})=>{


    return <MainWrapper key = {title} onClick = {()=>{
        onClick();
        window.open(clickUri,'_blank', 'noopener,noreferrer');
    }}
        onContextMenu = {onContextMenu}
        onMouseDown = {onMouseDown}
        onMouseUp = {onMouseUp}>
        <TextWrapper>
        <Title>{title}</Title>
        <SubTitle>{description}</SubTitle>
        {/* <ReferralLink>{!video? 'Learn more' : 'Watch now' } <div style = {{marginLeft: "5px", color : Theme.link }}><Icon icon = {chevronRight} /></div></ReferralLink> */}
        </TextWrapper>
    </MainWrapper>
};


export const SkeletonRecommendtionCardSmall = ({keyID})=>{
return <MainWrapper>
        <div style = {{padding: '30px 20px'}}>
        <Skeleton count={1} style = {{marginBottom : '20px', height: '40px'}}/>
        <Skeleton count={2} style = {{margin: '10px 0px'}}/>
        </div>
</MainWrapper>

}



const TextWrapper = styled.div`
display: flex;
width: 100%;
height: 140px;
align-items: center;
justify-content: space-around;
padding: 10px 20px;
flex-direction: column;

`

const Title = styled.a`
font-family: 'Gibson';
text-decoration: none;
font-style: normal;
align-self: flex-start;
font-weight: 400;
font-size: 18px;
line-height: 32px;
color: ${Theme.primary};
display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

const SubTitle = styled.span`
font-family: 'Gibson';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 26px;
color: ${Theme.primary};
display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`


const ReferralLink = styled.a`
font-family: 'Gibson';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: ${Theme.link};
text-decoration: none;
display: flex;
align-self: flex-start;
opacity: 0.8;
cursor: pointer;
`

const MainWrapper = styled.div`
width: 100%;
border-radius: 16px;
border: 1px solid #E5E8E8;
overflow: hidden;
margin: 10px 20px;
background: white;
cursor: pointer;
&:hover{
    border-color : ${Theme.link};
}

&:hover ${Title}{
    color : #1372EC
}

&:hover ${ReferralLink}{
    opacity: 1;
}
`

export default RecommendtionCardSmall;