import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import HomeTopBar from "../components/HomeTopBar/HomeTopBar";
import HomeWelcomeText from "../components/HomeWelcomeText/HomeWelcomeText";
import HomeInput from "../components/HomeInput/HomeInput";
import { getCategories } from "../lib/getCategories";
import Categories from "../components/Categories/Categories";
import Recipes from "../components/Recipes/Recipes";

const HomeScreen = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        (async () => {
            const res = await getCategories();
            setCategories(res.categories);
            setActiveCategory(res.categories[0].strCategory);
        })();
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                style={styles.container}
                ListHeaderComponent={
                    <>
                        <HomeTopBar />
                        <HomeWelcomeText />
                        <HomeInput
                            inputText={inputText}
                            setInputText={setInputText}
                        />
                        {categories.length > 0 && (
                            <Categories
                                categories={categories}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        )}
                    </>
                }
                ListFooterComponent={
                    <Recipes
                        activeCategory={activeCategory}
                        inputText={inputText}
                    />
                }
            ></FlatList>
        </SafeAreaView>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
});
