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
        left: width - 110
    },
    language_bar: {
        color: '#07101A',
        fontSize: 24,
        fontFamily: 'Poppins-Regular',
        // left: '45%',
        bottom: '0.35%'
    },
    language_text: {
        color: '#07101A',
        fontSize: 24,
        fontFamily: 'Poppins-Regular'
    },
    Youtube: {
        alignSelf: 'center',
        borderWidth: 6,
        borderColor: '#175CA4',
    },
    Content_view: {
        // flexDirection:'column',
        borderRadius: 38,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#175ca4',
        borderWidth: 1,
        flex: 1,
        marginTop: height-460,
        width: 305,
        height: height - 400,
        position: 'absolute',
        marginLeft: '7.5%',
        marginRight: '8.5%',
        //  marginTop: '1%',
        // bottom: '2%'
    },
    Content_title: {
        fontSize: 28,
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        lineHeight: 50,
        alignSelf: 'center'
    },
    Content_shortdesc: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Poppins-Regular',
        color: 'black',
        lineHeight: 25,
        textAlign: 'center',

    },
    Content_longdesc: {
        fontSize: 16,
        marginRight: '3.4%',
        fontFamily: 'Poppins-Regular',
        color: 'black',
        lineHeight: 25,
        textAlign: 'center',

    },
    Touchable_Opacity: {
        borderRadius: 50,
        backgroundColor: '#175ca4',
        height: 50,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: height - 80,
        marginLeft: '2.5%'
    },
    Touchable_Text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        color: '#fff',
        lineHeight: 45,
    },
    Enquiry_button: {
        borderRadius: 50,
        backgroundColor: '#175ca4',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        position: 'absolute',
        marginTop: height - 80,
        marginLeft: '50%',
        fontWeight: '600'
    }
});
export default slide2_style;
