import { RectButton } from "react-native-svg";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import React from "react";

const BranchCard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Nossas Filiais</Text>
                <View style={styles.cardContainer}>
                    <RectButton style={styles.card} onPress={() => {}}>
                        <Image
                            source={require("../../../assets/branch.png")}
                            style={styles.image}
                        />
                        <Text style={styles.cardTitle}>Filial 1</Text>
                    </RectButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BranchCard;