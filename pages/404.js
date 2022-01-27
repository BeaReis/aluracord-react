import React from "react";
import { Box, Button, Text } from '@skynexui/components';
import { useRouter } from "next/router";
import appConfig from '../config.json';

export default function error404 () {
    const roteamento = useRouter();

    return (
        <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundImage: 'url("https://i.imgur.com/DHIR9OC.jpg")',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            }}
            >
            <Box>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                variant="heading1"
                styleSheet={{
                    color: appConfig.theme.colors.neutrals[300],
                    textAlign: 'center',
                    textDecoration: '120px',
                }}  
                > 404 
                </Text>

                <Text
                variant="heading2"
                styleSheet={{
                    color: appConfig.theme.colors.neutrals[300],
                    textAlign: 'center',
                }}  
                > Page not found
                </Text>

            <Button
              type='button'
              label='Voltar'
              onClick={function(event) {
                  roteamento.push('/')
              }}
              styleSheet={{
                  margin: '20px',
              }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[400],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[500],
              }}
            />           
            </div>
            </Box>

        </Box>
        </>
    )
}