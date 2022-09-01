import { Text } from 'react-native-paper';
import PhotoAlbum from "react-photo-album";

const photos = [
    {
        src: "/photos/img1.jpg",
        width: 800,
        height: 600
    },
    {
        src: "/photos/img2.jpg",
        width: 1600,
        height: 900
    },
    {
        src: "/photos/img3.jpg",
        width: 1600,
        height: 900
    },
    {
        src: "/photos/img4.jpg",
        width: 1600,
        height: 900
    },
    {
        src: "/photos/img5.jpg",
        width: 1600,
        height: 900
    },
    {
        src: "/photos/img6.jpg",
        width: 1600,
        height: 900
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