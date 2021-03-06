import Colors from './Colors'
export default {
    card: {
        width: '95%',
    },
    cardHeader: {
        backgroundColor: Colors.primary,
        height: 0,
    },
    cardHeaderUser: {
        backgroundColor: Colors.primary,
        height: 0,
    },
    cardHeaderHelper: {
        backgroundColor: Colors.complementDark,
        height: 0,
    },
    cardHeaderText: {
        color: Colors.white,
        textShadowColor: Colors.primaryDarker,
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 1,
    },
    cardBody: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    cardBodyText: {
        marginBottom: 15,
    },
    cardContent: {
        padding: 5,
    },
}
