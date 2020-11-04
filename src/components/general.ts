import styled from 'styled-components';

export const AppPage = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    margin: 0 auto;
    padding: 32px;
`