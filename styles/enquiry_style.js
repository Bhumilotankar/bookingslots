import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');


const enquiry_style = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    maintext: {
        color: '#303535',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 30,
    },
    text: {
        top: -9, marginLeft: 20, fontSize: 14, fontFamily: 'Poppins-Regular',
    },
    texttop: {
        color: '#303535',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 30,
    },
    inputBirth: {
        top: -13,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        // paddingHorizontal: 12,
        // paddingVertical: 8,
        // // top:10,
        alignSelf: 'center',
        width: width - 60,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 2,
        marginLeft: 20
    },
    input: {
        // flex: 1,
        top: -13,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        // paddingHorizontal: 12,
        // paddingVertical: 8,
        // // top:10,
        alignSelf: 'center',
        width: width - 40,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 2
        // marginRight:10
    },
    icon: {
        marginHorizontal: 10,
    },
    view: {
        backgroundColor: '#175CA4',
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    touchableOpacity: {
        backgroundColor: '#175CA4',
        padding: 10,
        borderRadius: 20,
        marginTop: 50,
        // alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        lineHeight: 18,
        textAlign: 'center',
    },
    textcontact: {
        top: 20, marginLeft: 20, fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black'
    },
    textaftercontact: {
        top: 30, marginLeft: 20, fontSize: 14, fontFamily: 'Poppins-Regular',
    },

    inputaftercontact: {
        top: 20,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        // paddingHorizontal: 12,
        // paddingVertical: 8,
        // // top:10,
        alignSelf: 'center',
        width: width - 40,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 2,
    },

    errorText: {
        fontSize: 12,
        padding: 10,
        color: 'red',
        marginLeft: 18,
        fontFamily: 'Poppins-Regular',
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioForm: {
        marginTop: 10,
    },
    radioButton: {
        marginTop: 5,
    },
    radioLabel: {
        marginLeft: 0,
    },
    calendarContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginTop: 20,
    },
    calendarHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#175CA4',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    calendarHeaderText: {
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
    closeIcon: {
        marginLeft: 10,
    },
});

export default enquiry_style;