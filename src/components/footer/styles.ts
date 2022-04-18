import styled from 'styled-components';

export const Container = styled.div`
    height: 30vh;
    background-color: #000;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 100%;
        height: 20%;
        margin: 0;
        padding: 0;
    }

    .infos{
        height: 60%;
        width:  13rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0;
        padding: 0;

        li{
            font-size: 2rem;
            display: flex;
            cursor: pointer;
            transition: transform 0.5s;

            &:hover{
                transform: scale(1.15);
            }
        }
    }

    h3{
        color: #fff;
        height: 10%;
        margin: 0;
        padding: 0;
        font-weight: 400;
    }

`