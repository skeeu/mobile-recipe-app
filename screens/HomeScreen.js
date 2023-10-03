import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import HomeTopBar from "../components/HomeTopBar/HomeTopBar";
import HomeWelcomeText from "../components/HomeWelcomeText/HomeWelcomeText";
import HomeInput from "../components/HomeInput/HomeInput";
import { getCategories } from "../lib/getCategories";
import Categories from "../components/Categories/Categories";

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    (async () => {
      const res = await getCategories();
      setCategories(res.categories);
      setActiveCategory(res.categories[0].strCategory);
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <HomeTopBar />
        <HomeWelcomeText />
        <HomeInput />
        {categories.length > 0 && (
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 15 },
});
