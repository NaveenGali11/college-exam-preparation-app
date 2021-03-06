import React,{useEffect}from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";
import {WebView} from "react-native-webview"; 
import { IMAGE_URL } from "../apiUrls";
import Pdf from "react-native-pdf";

const PdfViewPage = (props) => {
    useEffect(() => {
        console.log("View :- ",props.route.params.pdfUrl)
    },[])
    return (
        <View style={styles.rootView}>
            {/* <WebView source={{uri : "http://docs.google.com/gview?embedded=true&url=" + IMAGE_URL + props.route.params.pdfUrl}} startInLoadingState={true}  /> */}
            <Pdf
                source={{uri : IMAGE_URL + props.route.params.pdfUrl}}
                onLoadComplete={(numberOfPages,filePath) => {
                    console.log("Number of Pages :- ",numberOfPages)
                }}
                onPageChanged={(page) => {
                    console.log("Current PAge",page)
                }}
                onError = {(error) => {
                    console.log("Error :- ",error)
                }}
                onPressLink = {(uri) => {
                    console.log("Link PAssed :- ",uri)
                }}
                style={styles.rootView}
                trustAllCerts ={false}   
                enableRTL
            />
        </View>
    )
}

const styles = StyleSheet.create({
    rootView : {
        height : Dimensions.get("window").height ,
        width : Dimensions.get("window").width
    }
})

export default PdfViewPage;