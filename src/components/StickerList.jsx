import { Box, Wrapper, Text, Image } from '../styles/StickerList';
import appConfig from '../../config.json';

function StickerList() {
    

    return(
    <>
    <Box>
        <Text>Stickers</Text>
        <Wrapper>
            {appConfig.stickers.map((sticker) => (
                <Text onClick={() => {
                    if(props.onStickerClick === true) {
                        props.onStickerClick(sticker);
                    }
                }}
                key={sticker}>
                <Image src={sticker}/>
                </Text>
        ))}
        </Wrapper>
    </Box>
    </>
    )
}
export default StickerList;