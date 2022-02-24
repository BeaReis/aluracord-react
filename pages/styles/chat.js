import styled from "styled-components";
import appConfig from "../../config.json";

// Outer Container
export const Box = styled.div`
  display: grid;
  grid-template-columns: 90% 10%; 
  padding: 2rem;
  border: 1px solid ${appConfig.theme.colors.primary[300]};
  background-color: ${appConfig.theme.colors.neutrals[100]};
  margin: 10% 10%;
  @media (max-width: 800px) {
    margin: 5%;
    grid-template-columns: 80% 20%; 
  }
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
`;

export const BackButton = styled.button`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 0.5rem 0;
  border-radius: 5px;
  color: white;
  border: none;
  margin: 0 0 0.5rem 1rem;
  grid-column: 2;
  grid-row: 1;
  cursor: pointer;
  background-color: ${appConfig.theme.colors.primary[300]};
`;

export const Title = styled.p`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
  grid-column: 1;
  grid-row: 1;
  color: ${appConfig.theme.colors.primary[100]};
`;

export const ChatArea = styled.div`
  background-color: ${appConfig.theme.colors.neutrals[200]};
  width: 100%;
  padding: 2rem;
  margin: 1rem 0 1rem 0;
  border-radius: 5px;
  grid-column: 1 / span 2;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;
`;

export const Message = styled.p`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: ${props => props.date ? '8px' : '12px'};
  margin: 5px;

`;

export const Profile = styled.p`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 12px;
`;

export const MessageBox = styled.div`
`;

export const Input = styled.textarea`
  padding: 0.5rem;
  color: white;
  border: 1px solid ${appConfig.theme.colors.primary[300]};
  border-radius: 5px;
  background-color: ${appConfig.theme.colors.neutrals[200]};
  resize: none;
  grid-column: 1;
  grid-row: 3 / span 4;
  width: 100%;
  :focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  padding: 0.5rem 0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  margin: ${props => props.emote ? '0 0 0.25rem 1rem' : '0.25rem 0 0 1rem'};
  background-color: ${appConfig.theme.colors.primary[300]};
  grid-column: 2;
  grid-row: ${props => props.emote ? '3' : '4'};
`;
