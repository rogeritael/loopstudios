import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    div.logo-container {
        width: 192px;
        height: 32px;
        position: relative;
    }

    nav ul {

        li {
            display: inline-block;
            margin-left: 1rem;

            a {
                color: #fff;
            }
        }
    }
`;