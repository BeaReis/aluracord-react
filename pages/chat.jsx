import { useRouter } from "next/router";
import React from "react";
import { Box, BackButton, ChatArea, Input, SendButton, Title, Message, Image, MessageBox, Profile } from "./styles/chat";

function Chat() {
  const roteamento = useRouter();
  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMsgs, setListaDeMsgs] = React.useState([]);
  const username = roteamento.query.username;
  

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMsgs.length + 1,
      de: username,
      texto: novaMensagem,
    };

    setListaDeMsgs([mensagem, ...listaDeMsgs]);
    setMensagem("");
  }
 
  function MessageList(props) {
      
      return(
        <>
        <MessageBox>
          <Image src={`https://github.com/${username}.png`}></Image>
          <Profile />
          <Message date />
          <Message />
        </MessageBox>
        </>
      );
  }


  return (
    <>
      <Box>
        <Title>Chat</Title>
        <BackButton
          onClick={function (event) {
            event.preventDefault();
            roteamento.push("/homePage");
          }}
        >
          Voltar
        </BackButton>
        <ChatArea>
          <MessageList mensagem={listaDeMsgs}/>
        </ChatArea>
        <Input 
            placeholder="Insira sua mensagem aqui..."
            value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }} 
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }} />
        <SendButton emote 
          onClick={event => {console.log(username)}}>Emoji 🙂</SendButton>
        <SendButton 
          onClick={event => {
            event.preventDefault();
            handleNovaMensagem(mensagem);
          }}>Enviar ✉️</SendButton>
      </Box>
    </>
  );
}

export default Chat;
