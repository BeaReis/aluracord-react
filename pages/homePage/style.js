import styled from "styled-components";
import appConfig from "../../config.json";

// Outer Container
export const Box = styled.div`
  padding: 2rem 4rem;
  border: 1px solid ${appConfig.theme.colors.primary[300]};
  background-color: ${appConfig.theme.colors.neutrals[100]};
  width: 370px;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
`;

// Inner Container
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => props.text ? 'auto 0 1rem 0' : '0'};
`;

// Profile box
export const PhotoArea = styled.div`
    width: 75%;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-self: center;
    border-radius: 5px;
    margin: 1rem 0 1rem 0;
    background-color: ${appConfig.theme.colors.neutrals[200]};
`;

// Profile Image
export const Profile = styled.img`
    border-radius: 50%;
    margin: 1rem 1rem;
`;

export const Text = styled.p`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    margin-bottom: ${({profile}) => profile ? '0.1rem' : '1rem'};
    font-weight: ${({profile}) => profile ? '100' : '500'};
    font-size: ${({profile}) => profile ? '10px' : '24px'};
    color: ${appConfig.theme.colors.primary[100]};
`;

export const Textfield = styled.input`
  display: flex;
  justify-content: center;
  color: white;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${appConfig.theme.colors.neutrals[200]};
  :hover {
    border: 1px solid ${appConfig.theme.colors.primary[300]};
  }
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  background-color: ${appConfig.theme.colors.primary[300]};
  :hover {
    background-color: ${appConfig.theme.colors.primary[200]};
  }
`;



