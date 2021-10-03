import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
    return (
        <Wrap>
            <h1>Sorry</h1>
            <p>We couldn't find that page<br/>Try searching or go to <span>Amazon's home page</span></p>
            <Cutehold>
              <img src="https://www.pixelstalk.net/wp-content/uploads/2016/03/Cute-animal-wallpapers-hd-desktop.jpg" alt="Missed cute picture" />
            </Cutehold>
        </Wrap>
    )
}

const Wrap = styled.div`
  margin: 10px auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(450px - 110px);
  width: calc(450px - 160px);
  h1{
    margin: 0px;
    font-size: 25px;
    color: #717171;
    font-weight: 500;
  }

`

const Cutehold = styled.div`
  flex: 1;
  margin-top: 25px;
  overflow: hidden;
  border-radius: 50%;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export default NotFound
