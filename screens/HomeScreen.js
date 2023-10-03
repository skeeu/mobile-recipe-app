import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SafeAreaView from '../components/SafeAreaView/SafeAreaView';
import HomeTopBar from '../components/HomeTopBar/HomeTopBar';
import HomeWelcomeText from '../components/HomeWelcomeText/HomeWelcomeText';
import HomeInput from '../components/HomeInput/HomeInput';
const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <HomeTopBar />
                <HomeWelcomeText />
                <HomeInput />
            </ScrollView>
        </SafeAreaView>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    container: { paddingHorizontal: 15 },
});
