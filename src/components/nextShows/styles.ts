import styled from 'styled-components';

export const Container = styled.div`
    height: 60vh;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        color: #BB331B;
        height: 13%;
    }

    .next-list{
        width: 100%;
        height: 100%;
        max-width: 85rem;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 87%;

        .next-item{
            width: 24%;
            height: 100%;
            background-color: red;
            border-radius: 0.3rem;

            img{
                height:100%;
                width: 100%;
                object-fit: cover;
                cursor: pointer;
                border-radius: 0.3rem;
            }
        }
    }
`