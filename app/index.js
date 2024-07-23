import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import MyJobs from "../components/Home/my-jobs"; // Adjust paths as necessary
import PopularJobs from "../components/Home/popular-jobs"; // Adjust paths as necessary
import Search from "../components/Home/search"; // Adjust paths as necessary

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Search />
                <MyJobs />
                <PopularJobs />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
    },
});
