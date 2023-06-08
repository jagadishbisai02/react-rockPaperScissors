import styled from 'styled-components/macro'

export const GameScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
`

export const GameScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameScoreName = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const GameScoreBoardContainer = styled(GameScoreNameContainer)`
  background-color: #ffffff;
  width: 10%;
  height: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 30%;
    height: 70%;
  }
`

export const GameScoreBoardHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const GameScoreBoardScore = styled.p`
  color: #223a5f;
  font-size: 42px;
  font-family: 'Roboto';
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
