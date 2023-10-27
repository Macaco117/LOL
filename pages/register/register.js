import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

export default function Register(props){

    const { navigation } = props;

    const goToLogin = () => {
        navigation.navigate("Login");
    }

    return(
        <SafeAreaView style={styles.container}>

           <View style={styles.Sec1}>
            <Image
            source={{
                uri: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb4a2d5f29c25d732/606226c25046ba0f2d72a2cf/Poroject-Jinx-BO-POLISH04.jpg",
            }}
            style={{width: "100%", height: "120%", resizeMode: "cover"}}
            />
            <View
            style={{
                position: "absolute",
            }}>
                <Text style={styles.title}>Welcome to the Summoner's Rift</Text>
                <Text style={styles.title2}>Create an account to play now.</Text>
            </View>
           </View>

           <View style={styles.Sec2}>

           <View>

           <View style={styles.space}>
            <Text style={styles.label}>Nickname</Text>
                <TextInput
                    style={styles.TextInput}
                    underlineColorAndroid={"pink"}
                    placeholder="Nickname"
                />
            </View>

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
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={styles.TextInput}
                    underlineColorAndroid={"pink"}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
            />
            </View>
            
            <View style={styles.space}>
                <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Next</Text>
                </TouchableOpacity>
            </View>
            
           </View>

            <View style={[styles.space, styles.row]}>
                <Text style={styles.label}>Already have an account?</Text>
                <TouchableOpacity onPress={goToLogin}>
                    <Text style={styles.LOG}>Login</Text>
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
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    },
    title2:{
        fontSize: 14,
        color: "white",
    },
    label:{
        color: "gray",
    },
    TextInput:{
        color: "gray",
        padding: 10,
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
    LOG:{
        color: "pink",
        paddingLeft: 5,
    }
})