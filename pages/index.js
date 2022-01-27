import { Box, Button, Text, TextField, Image, Icon } from '@skynexui/components';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; 
import appConfig from '../config.json';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
  //const username = 'BeaReis';
  const roteamento = useRouter();
  const [username, setUsername] = React.useState('');
  const [followers, setFollowers] = React.useState('');
  const [repos, setRepos] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const [visibility, setVisibility] = React.useState(false);

  /***  'useEffect' é um 'Hook'(funções que permitem “ligar-se” aos recursos de state e 
  ciclo de vida do React a partir de componentes funcionais). Ele permite expressar diferentes
  tipos de efeitos colaterais depois que o componente renderiza.  ***/

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`, {
      headers: new Headers({
        'User-agent': 'agent-name'
      })
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  });

  const setData = ({ followers, public_repos, avatar_url }) => {
    setFollowers(followers);
    setRepos(public_repos);
    username.length > 2 ? setAvatar(avatar_url) : setAvatar('');
  }

function handleVisibility(valor) {
    valor != "" ? setVisibility(true) : setVisibility(false);
  }

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundImage: 'url("https://i.imgur.com/DHIR9OC.jpg")',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            border: '1px solid',
            borderColor: appConfig.theme.colors.primary[400],
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function(infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log('Alguém submeteu o form');
              roteamento.push('/chat');
              //window.location.href= '/chat';

            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>


            {/* <input
              type="text"
              value={username}
              onChange={function handler (event) {
                const valor = event.target.value;
                setUsername(valor);
              }}
            /> */}
            <TextField
            value={username}
            onChange={function handler (event) {
              const valor = event.target.value;
              setUsername(valor);
              handleVisibility(valor);
            }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[400],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[400],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[500],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={avatar}
            />
            {visibility && (
              <>
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[300],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                textAlign: 'center',
                padding: '3px 10px',
                borderRadius: '1000px',
                border: '1px solid',
                borderColor: appConfig.theme.colors.primary[400],
              }}
            > 
            {username} 
            </Text>
            <Text
            variant='body4'
              styleSheet={{
                color: appConfig.theme.colors.neutrals[300],
                textAlign: 'center',
                padding: '5px 10px',
              }}  
            >
            📁 Repositories: {repos}
            </Text>
            <Text
            variant='body4'
              styleSheet={{
                color: appConfig.theme.colors.neutrals[300],
                textAlign: 'center',
                padding: '1px 10px',
              }}  
            >
            👥 Followers: {followers}
            </Text>
            </>
            )}
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}