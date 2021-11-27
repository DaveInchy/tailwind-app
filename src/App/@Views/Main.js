import React from 'react';

import Wrapper, { Container, Section } from '../@Components/Modules/Containers';

export default class Main extends React.Component {
    render() {
        return (
            <>
                <Section class="bg-dark">
                    <Container class="flex justify-center items-center h-screen p-10">
                        <Wrapper class="text-center m-auto w-100 text-light">
                            <h1 class="text-3xl mb-3">Welcome</h1>
                            <p class="text-1xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </Wrapper>
                    </Container>
                </Section>
            </>
        );
    }
}