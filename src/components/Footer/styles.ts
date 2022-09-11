import styled from "styled-components";

export const Container = styled.footer`
    background-color: #000;
    padding: 3rem 0;
    
    section {
        display: flex;
        align-items: center;
    }

    .right-footer, .left-footer {
        width: 50%;
        height: 100%;
        /* border: 1px solid #fff; */
    }

    .right-footer {
        p {
            color: #fff;
        }
    
        .social {
            height: 4rem;
            /* border: 1px solid #fff; */
            color: #fff;

            .icon {
                font-size: 2rem;
                margin-left: 1rem;
            }
        }
    }

    .left-footer {
        .logo {
            width: 10rem;
            height: 2rem;
            /* border: 1px solid #fff; */
            position: relative;
            margin-bottom: 2rem;
        }

        ul li {
            display: inline-block;
            margin: 0 .5rem;
            
            a {
                color: #fff;
            }
        }
    }
`;