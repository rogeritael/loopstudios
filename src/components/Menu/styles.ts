import styled from "styled-components";

export const Container = styled.ul`
    li {
        position: relative;
    }

    li::before {
        content: '';
        width: 3px;
        height: 3px;
        background-color: #fff;
        position: absolute;
        bottom: -5px;
        width: 100%;
        transform: scale(0, 1);
        transition: 500ms ease;
    }
    
    li:hover::before {
        transform: scale(1, 1);
    }

    @media(max-width: 425px){
        li:hover::before {
            transform: scale(0, 0);
        }
    }
`;