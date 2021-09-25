import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
    return (
        <Wrap>
            <h1>404 Not Found</h1>
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

  height: calc(100vh - 110px);
  width: calc(100vh - 160px);
  h1{
    margin: 0px;
    font-size: 25px;
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
