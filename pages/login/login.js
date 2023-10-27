import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity} from "react-native";

export default function Login(props){

    const { navigation } = props;

    const goToRegister = () => {
        navigation.navigate("Register");
    }

    return(
        <SafeAreaView style={styles.container}>

           <View style={styles.Sec1}>
            <Image
            source={{
                uri: "https://www.xtrafondos.com/en/descargar.php?id=9263&resolucion=3840x2160",
            }}
            style={{width: "100%", height: "120%", resizeMode: "cover"}}
            />
            <View
            style={{
                position: "absolute",
            }}>
                <Text style={styles.title}>League of Legends</Text>
            </View>
           </View>

           <View style={styles.Sec2}>

           <View>

           <View style={styles.space}>
                <Text style={styles.label}>Email Addres</Text>
                <TextInput
                    style={styles.TextInput}
                    underlineColorAndroid={"pink"}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="next"
                />
           </View>

           <View style={styles.space}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.TextInput}
                    underlineColorAndroid={"pink"}
                    placeholder="Password"
                    secureTextEntry={true}
            />
            </View>

            <View style={styles.space}>
                <Text style={styles.FP}>Forgot Password?</Text>
            </View>
            
            <View style={styles.space}>
                <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Login</Text>
                </TouchableOpacity>
            </View>
            
           </View>

            <View style={[styles.space, styles.row]}>
                <Text style={styles.label}>Don't have an account?</Text>
                <TouchableOpacity onPress={goToRegister}>
                    <Text style={styles.SU}>Sing Up</Text>
                </TouchableOpacity>
            </View>
            
           </View>

        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    Sec1:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    Sec2:{
        flex: 2,
        width: "100%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: "white",
        padding: 20,
        justifyContent: "space-between",
    },
    title:{
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
    },
    label:{
        color: "gray",
    },
    TextInput:{
        color: "gray",
        padding: 10,
    },
    FP:{
        color: "black",
        textAlign: "right",
    },
    btn:{
        backgroundColor: "pink",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },
    btntxt:{
        color: "white",
        fontWeight: "bold", 
    },
    space:{
        marginTop: 10,
    },
    row:{
        flexDirection: "row",
        justifyContent: "center",
    },
    SU:{
        color: "pink",
        paddingLeft: 5,
    }
})