import { Text } from 'react-native-paper';
import PhotoAlbum from "react-photo-album";

const photos = [
    {
        src: "https://github.com/Limnation/cca/raw/main/assets/photos/img1.png",
        width: 800,
        height: 500
    },
    {
        src: "https://github.com/Limnation/cca/raw/main/assets/photos/img2.png",
        width: 800,
        height: 500
    },
    {
        src: "https://github.com/Limnation/cca/raw/main/assets/photos/img3.png",
        width: 800,
        height: 500
    },
    {
        src: "https://github.com/Limnation/cca/raw/main/assets/photos/img4.png",
        width: 800,
        height: 500
    },
    {
        src: "https://github.com/Limnation/cca/raw/main/assets/photos/img5.png",
        width: 800,
        height: 500
    },
    {
        src: "https://github.com/Limnation/cca/raw/main/assets/photos/img6.png",
        width: 800,
        height: 500
    }
];

const Album = () => {
    return (
        <>
            <Text>Photo Albums</Text>
            <PhotoAlbum layout="rows" photos={photos} />
        </>
    );
};

export default Album;