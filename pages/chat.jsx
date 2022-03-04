import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  Box,
  BackButton,
  ChatArea,
  Input,
  SendButton,
  Title,
  Message,
  Image,
  MessageBox,
  Profile,
  Wrapper,
  DeleteButton,
  FlexWrapper,
} from "../styles/chat";
import { supabase } from "../utils/supabaseClient";

function Chat() {
  const routing = useRouter();
  const [message, setMessage] = React.useState("");
  const [msgList, setMsgList] = React.useState([]);
  const username = routing.query.username;

  function handleNewMessage(newMessage) {
    const message = {
      // id: msgList.length + 1,
      from: username,
      text: newMessage,
    };

    supabase
      .from("messages")
      .insert([message])
      .then(({ data }) => {
        setMsgList([...msgList, data[0]]);
      });

    setMessage("");
  }

  async function deleteMessage(id) {
    await supabase
      .from("messages")
      .delete()
      .match({id: id});
      setMsgList(msgList.filter((message) => message.id != id));
  }

  /* The useEffect Hook enable changes after render */
  useEffect(() => {
    /* Uses supabase database to set the msg list */
    supabase
      .from("messages")
      .select("*")
      .then(({ data }) => {
        setMsgList(data);
      });
  }, []);

  /* This is a sub-component that composes the list of messages  */
  function MessageList(props) {
    return (
      <>
        <MessageBox>
          {props.message.map((message) => {
            return (
              <Wrapper key={message.id}>
                <FlexWrapper>
                  <Image src={`https://github.com/${message.from}.png`}></Image>
                  <Profile>{message.from}</Profile>
                  <Message date>
                    {new Date().toLocaleDateString("pt-BR")}
                  </Message>
                  <DeleteButton
                    onClick={() => {
                      deleteMessage(message.id);
                    }}
                  >
                    x
                  </DeleteButton>
                </FlexWrapper>
                <FlexWrapper>
                  <Message>{message.text}</Message>
                </FlexWrapper>
              </Wrapper>
            );
          })}
        </MessageBox>
      </>
    );
  }

  /* This is the main component. It ties all of the styled-components together to compose the chat. */
  return (
    <>
      <Box>
        <Title>Chat</Title>
        <BackButton
          onClick={function (event) {
            event.preventDefault();
            routing.push("/homePage");
          }}
        >
          Back
        </BackButton>
        <ChatArea>
          <MessageList message={msgList} />
        </ChatArea>
        <Input
          placeholder="Write a message..."
          value={message}
          onChange={(event) => {
            const value = event.target.value;
            setMessage(value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleNewMessage(message);
            }
          }}
        />
        <SendButton
          emote
          onClick={() => {
            console.log(message.id);
          }}
        >
          Emoji 🙂
        </SendButton>
        <SendButton
          onClick={(event) => {
            event.preventDefault();
            handleNewMessage(message);
          }}
        >
          Send ✉️
        </SendButton>
      </Box>
    </>
  );
}

export default Chat;
