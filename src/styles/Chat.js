import styled from "styled-components";
import appConfig from "../../config.json";

// Outer Container
export const Box = styled.div`
  display: grid;  
  grid-template-columns: 87.5% 12.5%;
  width: 90vw;
  padding: 2rem;
  border: 1px solid ${appConfig.theme.colors.primary[300]};
  background-color: ${appConfig.theme.colors.neutrals[100]};
  margin: auto 10%;
  @media (max-width: 700px) {
    margin: 5%;
    grid-template-columns: 80% 20%;
  }
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
`;

// Button to go back to first screen
export const BackButton = styled.button`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 0.5rem 0;
  border-radius: 5px;
  color: white;
  border: none;
  grid-column: 2;
  grid-row: 1;
  cursor: pointer;
  background-color: ${appConfig.theme.colors.primary[300]};
`;

// 'Chat' text
export const Title = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
  grid-column: 1;
  grid-row: 1;
  color: ${appConfig.theme.colors.primary[100]};
`;

export const ChatArea = styled.div`
  background-color: ${appConfig.theme.colors.neutrals[200]};
  height: 50vh;
  padding: 2rem;
  margin: 1rem 0 1rem 0;
  border-radius: 5px;
  grid-column: 1 / span 2;
  overflow-y: scroll;
`;

export const MessageBox = styled.div`
  width: fit-content;
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  width: fit-content;
  margin-bottom: 10px;
  background-color: ${appConfig.theme.colors.neutrals[100]};
  opacity: ${(props) => (props.key = 0 ? "0" : "1")};
  border-radius: 10px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;
  display: flex;
`;

export const DeleteButton = styled.button`
  background-color: ${appConfig.theme.colors.neutrals[100]};
  color: white;
  display: flex;
  border-radius: 5px;
  padding: 0 0.3rem 0.2rem 0.3rem;
  vertical-align: center;
  cursor: pointer;
  margin: 5px 5px 5px 15px;
  border: 1px solid ${appConfig.theme.colors.primary[300]};
  text-align: center;
`;

export const Message = styled.p`
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: ${(props) => (props.date ? "8px" : "12px")};
  color: ${appConfig.theme.colors.primary[100]};
  margin: ${(props) => (props.date ? "10px 0 5px 10px" : "5px")};
  word-break: ${(props) => (props.date ? 'none': 'break-all')};
`;

export const Profile = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 12px;
  color: ${appConfig.theme.colors.primary[200]};
  margin: 7.5px 0 5px 5px;
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
  padding: 0.5rem 0.1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  margin: ${(props) =>
    props.sticker ? "0 0 0.25rem 0.5rem" : "0.25rem 0 0 0.5rem"};
  background-color: ${appConfig.theme.colors.primary[300]};
  grid-column: 2;
  grid-row: ${(props) => (props.sticker ? "3" : "4")};
`;
