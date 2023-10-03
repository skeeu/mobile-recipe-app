import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import Category from "../Category/Category";

const Categories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <Animated.ScrollView
      entering={FadeInDown.duration(500)}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((category, index) => {
        const isActive = activeCategory === category.strCategory;
        return (
          <Category
            key={index}
            name={category.strCategory}
            thumbnail={category.strCategoryThumb}
            isActive={isActive}
            setActiveCategory={setActiveCategory}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
