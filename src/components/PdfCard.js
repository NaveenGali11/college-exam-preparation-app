import React,{useEffect} from 'react';
import {View,StyleSheet} from "react-native";
import {Card,Title,Paragraph} from "react-native-paper";
import Pdf from "react-native-pdf";
import LinearGradient from 'react-native-linear-gradient';


const PdfCard = props => {
    useEffect(() => {
        console.log("Props :- ",props.pdf.item);
    },[])
    return (
            <View>
                <Card style={styles.cardStyle} onPress={props.onPress}>
                    <LinearGradient colors={['white','white','skyblue']} start={{x : 0,y : 0}} end = {{x : 1,y : 1}}>
                        <Card.Title title={props.title} subtitle={props.subtitle} />
                        <Card.Content>
                            <Title>
                                {props.pdf.item.FileName}
                            </Title>
                            <Paragraph>
                                {props.NotesType}
                            </Paragraph>
                        </Card.Content>
                    </LinearGradient>
                </Card>
            </View>
    )
}

const styles = StyleSheet.create({
    cardStyle : {
        marginVertical : 10,
        marginHorizontal : 6,
        borderRadius : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        overflow : "hidden"
    }
})


export default PdfCard;