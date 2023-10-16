import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 38rem;
    padding: 2rem 0;

    background-image: url('/image-hero.jpg');
    background-position: center;
    background-size: cover;

    p {
        margin: 8rem 0;
        height: 100%;
        display: inline-block;

        border: 2px solid #fff;
        width: max-content;
        padding: 1rem 2rem;

        font-family: 'Josefin Sans', sans-serif;
        text-transform: uppercase;
        line-height: 100%;
        font-size: 4rem;
        color:  #fff;
    }

    @media (max-width: 530px){
        text-align: center;
        p {
            font-size: 2.2rem;
        }
    }
`;