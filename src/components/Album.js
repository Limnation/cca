import { Text } from 'react-native-paper';
import PhotoAlbum from "react-photo-album";

const photos = [
    {
        src: "../../assets/photos/img1.png",
        width: 800,
        height: 600
    },
    {
        src: "../../assets/photos/img2.png",
        width: 1600,
        height: 900
    },
    {
        src: "../../assets/photos/img3.png",
        width: 1600,
        height: 900
    },
    {
        src: "../../assets/photos/img4.png",
        width: 1600,
        height: 900
    },
    {
        src: "../../assets/photos/img5.png",
        width: 1600,
        height: 900
    },
    {
        src: "../../assets/photos/img6.png",
        width: 1600,
        height: 900
    }
];

const Album = () => {
    return (
        <>
            <Text>Photo Albums</Text>
            {/* <PhotoAlbum layout="rows" photos={photos} /> */}
        </>
    );
};

export default Album;