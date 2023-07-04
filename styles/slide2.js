import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const slide2_style = StyleSheet.create({
    buttonText: {
        color: '#175CA4',
        fontSize: 50
    },
    image_back: {
        width: width,
        height: height,
        flex: 1
    },
    language_view: {
        // height: '10%',
        flexDirection: 'row',
        top: '7%',
        left: width-110
    },
    language_bar: {
        color: '#07101A',
        fontSize: 24,
        fontFamily: 'Poppins',
        // left: '45%',
        bottom: '0.35%'
    },
    language_text: {
        color: '#07101A',
        fontSize: 24,
        fontFamily: 'Poppins'
    },
    Youtube: {
        alignSelf: 'center',
        borderWidth: 6,
        borderColor: '#175CA4',
    },
    Content_view: {
        borderRadius: 31,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#175ca4',
        borderWidth: 1,
        flex: 1,
        top:280,
        width: 305,
        height: '120%',
        position: 'absolute',
        marginLeft: '7.5%',
        marginRight: '8.5%',
        //  marginTop: '1%',
        marginBottom: '40%',
        bottom: '2%'
    },
    Content_title: {
        fontSize: 27,
        fontFamily: 'Poppins_bold',
        color: '#175ca4',
        fontWeight: 'bold',
        lineHeight: 50,
        alignSelf: 'center'
    },
    Content_shortdesc: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'times new roman',
        color: 'black',
        lineHeight: 25,
        textAlign: 'center',

    },
    Content_longdesc: {
        fontSize: 16,
        marginRight: '3.4%',
        fontFamily: 'times new roman',
        color: 'black',
        lineHeight: 25,
        textAlign: 'center',

    },
    Touchable_Opacity: {
        borderRadius: 50,
        backgroundColor: '#175ca4',
        height: '20%',
        width: '45%',
        position: 'absolute',
        marginTop: height - 100,
        marginLeft: '2.5%',
    },
    Touchable_Text: {
        fontSize: 16,
        fontFamily: 'Inter_semibold',
        textAlign: 'center',
        color: '#fff',
        lineHeight: 45,
    },
    Enquiry_button: {
        borderRadius: 50,
        backgroundColor: '#175ca4',
        height: '20%',
        width: '45%',
        position: 'absolute',
        marginTop: height - 100,
        marginLeft: '50%',
    }
});
export default slide2_style;
