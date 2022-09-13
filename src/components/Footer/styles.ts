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
    }

    .right-footer {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        p {
            color: #fff;
        }
    
        .social {
            height: 2rem;
            margin-bottom: 1rem;
            color: #fff;

            .icon {
                font-size: 2rem;
                margin-left: 1rem;
            }
        }
    }

    .left-footer {
        display: flex;
        flex-direction: column;

        .logo {
            width: 10rem;
            height: 2rem;
            position: relative;
            margin-bottom: 1rem;
        }

        ul li {
            display: inline-block;
            margin-right: 1rem;
            
            a {
                color: #fff;
            }
        }
    }


    @media (max-width: 690px){
        section {
            flex-direction: column;
        }

        .left-footer, .right-footer {
            width: 100%;
            align-items: center;
        }

        .left-footer {
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 380px){
        .left-footer ul {
            text-align: center;

            li {
                display: block;
                margin-bottom: 1rem;
            }
        }
    }
`;