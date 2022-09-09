import React from "react";
import { AppContainer } from "../AppContainer";
import { Container } from "./styles";

export function Cover({ children }: {children: React.ReactNode}){
    return(
        <Container>
            <AppContainer>
                {children}
                <p>
                    Immersive <br/>
                    experiences <br/>
                    that deliver
                </p>
            </AppContainer>
        </Container>
    )
}