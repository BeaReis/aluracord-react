import styled from 'styled-components';
import appConfig from '../../config.json';

export const Box = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${appConfig.theme.colors.neutrals[200]};
    width: 25%;
    height: 50%;
    right: 15%;
    bottom: 25%;
    @media (max-width: 800px){
        width: 50%;
    }
    border-radius: 5px;
    padding: 0 10px 10px 10px;
    border: 1px solid white;
`;

export const Text = styled.p`
    color: white;
    margin: 10px;
    display: flex;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
    margin: 10px;
`;

export const Wrapper = styled.div`
    background-color: ${appConfig.theme.colors.neutrals[300]};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex: 1;
    margin: auto;
    overflow-y: scroll;
`;

export const Image = styled.img`
    width: 100px;
    margin: auto;
    cursor: pointer;
`;

