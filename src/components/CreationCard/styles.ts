import styled from "styled-components";

type CardProps = {
    image: string
}

export const Container = styled.div<CardProps>`
    width: 250px;
    height: 400px;
    margin: 1rem;
    padding: 1rem;

    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: gray;
    position: relative;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.6;
        display: none;
    }

    h1 {
        text-transform: uppercase;
        color: #fff;
        font-weight: normal;
        font-size: 2rem;
        position: absolute;
        left: 40%;
        transform: translateX(-50%);
        bottom: 2rem;
        z-index: 2;
        transition: 500ms;
    }

    &:hover {
        &::after {
            display: block;
        }

        h1 {
            color: var(--very-dark-gray);
        }
    }
`;