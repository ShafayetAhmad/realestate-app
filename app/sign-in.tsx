import {
    View,
    Text,
    SafeAreaView,
    Animated,
    Image,
    TouchableOpacity, Alert,
} from "react-native";
import React from "react";
import ScrollView = Animated.ScrollView;
import images from "@/constants/images";
import icons from "@/constants/icons";
import {login} from "@/lib/appwrite";
import {useGlobalContext} from "@/lib/global-provider";
import {Redirect} from "expo-router";

const SignIn = () => {
    const {refetch, loading, isLoggedIn} = useGlobalContext()
    if (!loading && isLoggedIn) return <Redirect href={"/"}/>
    const handleLogin = async () => {

        const result = await login();
        if (result) refetch();
        else Alert.alert("Error", "Failed to login");

    };
    return (
        <SafeAreaView>
            <ScrollView contentContainerClassName={"h-full bg-white"}>
                <Image source={images.onboarding}
                       resizeMode={"contain"}
                       className={"w-full h-4/6 mt-3"}
                />
                <View className={"px-10"}>
                    <Text
                        className={
                            "text-base text-center uppercase font-rubik text-black-200"
                        }
                    >
                        Welcome to Restate
                    </Text>
                    <Text
                        className={
                            "text-3xl font-rubik-bold text-black-300 text-center mt-2"
                        }
                    >
                        Let's Get You Closer to {"\n"}{" "}
                        <Text className={"text-primary-300"}>Your Ideal Home</Text>
                    </Text>
                    <Text className={"text-lg text-center text-black-200 mt-12"}>
                        Sign in with Google to get started
                    </Text>
                    <TouchableOpacity
                        className={
                            "w-full bg-white shadow-md shadow-zinc-300 rounded-full  py-2 mt-5"
                        }
                        onPress={handleLogin}
                    >
                        <View className={"flex flex-row items-center justify-center"}>
                            <Image
                                source={icons.google}
                                className={"w-5 h-5"}
                                resizeMode={"contain"}
                            ></Image>
                            <Text
                                className={"text-lg font-rubik-medium text-black-300 ml-2 mt-2"}
                            >
                                Continue with Google{"\n"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default SignIn;
