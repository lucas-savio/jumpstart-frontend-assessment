import styled from 'styled-components';

export const CardBody = styled.div`
    background-color: #FFFFFF;
    border-bottom: 4px solid;
    border-bottom-color: ${props => props.theme.colors.secondary};
    padding: 20px 40px 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 305px;
`;

export const CardIcon = styled.img`
    height: 45px;
    width: 45px;
    margin-bottom: 20px;
`

export const CardOptionsButton = styled.button`
    height: 35px;
    width: 35px;
    margin-bottom: 20px;
    position: absolute;
    right: 14px;
    top: 16px;
    background-color: transparent;
    border: 1px solid #f1f4f6;
    border-radius: 5px;
    display: flex;
    opacity: 0;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all .2s;
`;

export const CardOptionsMenu = styled.div`
    background: #FFFFFF;
    border: 1px solid #f1f4f6;
    position: absolute;
    top: 15px;
    right: -132px;
    border-radius: 5px;
    box-shadow: 0 1px 20px 0px #32325d12;
`;

export const CardTitle = styled.h2`
    color: #0F2137;
    font-weight: 800;
    line-height: 22px;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const CardText = styled.p`
    color: #343D48;
    font-weight: 400;
    margin-bottom: 40px;
    line-height: 18px;
    font-size: 12px;
    text-align: center;
`;

export const CardButton = styled.button`
    cursor: pointer;
    background: transparent;
    border: 1px solid;
    border-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accent};
    font-weight: 500;
    font-size: 10px;
    border-radius: 5px;
    width: 100%;
    transition: all .2s;
    height: 32px;
    padding: 0px 9px;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
        color: #fff;
    }
`;