import { RectButton } from "react-native-svg";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { useState } from "react";
import React from "react";
import"./styles";

const OurBranches = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Nossas Filiais</Text>
                <View style={styles.cardContainer}>
                    <RectButton
                        style={styles.card}
                        onPress={() => navigation.navigate("Branch")}
                    >
                        <Image
                            source={require("../../../assets/branch.png")}
                            style={styles.image}
                        />
                        <Text style={styles.cardTitle}>Filial 1</Text>
                    </RectButton>
                    <RectButton
                        style={styles.card}
                        onPress={() => navigation.navigate("Branch")}
                    >
                        <Image
                            source={require("../../../assets/branch.png")}
                            style={styles.image}
                        />
                        <Text style={styles.cardTitle}>Filial 2</Text>
                    </RectButton>
                    <RectButton
                        style={styles.card}
                        onPress={() => navigation.navigate("Branch")}
                    >
                        <Image
                            source={require("../../../assets/branch.png")}
                            style={styles.image}
                        />
                        <Text style={styles.cardTitle}>Filial 3</Text>
                    </RectButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default OurBranches;