import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import AdditionaRecipeDataCard from "../components/AdditionaRecipeDataCard/AdditionaRecipeDataCard";
import { colors } from "../assets/constants/colors";

const recipe = {
    idMeal: "52772",
    strMeal: "Teriyaki Chicken Casserole",
    strDrinkAlternate: null,
    strCategory: "Chicken",
    strArea: "Japanese",
    strInstructions:
        "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
    strMealThumb:
        "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    strTags: "Meat,Casserole",
    strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
    strIngredient1: "soy sauce",
    strIngredient2: "water",
    strIngredient3: "brown sugar",
    strIngredient4: "ground ginger",
    strIngredient5: "minced garlic",
    strIngredient6: "cornstarch",
    strIngredient7: "chicken breasts",
    strIngredient8: "stir-fry vegetables",
    strIngredient9: "brown rice",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "3/4 cup",
    strMeasure2: "1/2 cup",
    strMeasure3: "1/4 cup",
    strMeasure4: "1/2 teaspoon",
    strMeasure5: "1/2 teaspoon",
    strMeasure6: "4 Tablespoons",
    strMeasure7: "2",
    strMeasure8: "1 (12 oz.)",
    strMeasure9: "3 cups",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null,
    strSource: null,
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
};

const additionalData = [
    {
        title: "35",
        subtitle: "Mins",
        icon: <Feather name="clock" size={26} />,
    },
    {
        title: "03",
        subtitle: "Servings",
        icon: <Ionicons name="people" size={26} />,
    },
    {
        title: "103",
        subtitle: "Cal",
        icon: <SimpleLineIcons name="fire" size={26} />,
    },
    { title: "", subtitle: "Easy", icon: <Octicons name="stack" size={26} /> },
];

const RecipeDetailScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: recipe.strMealThumb }}
                style={styles.recipeImage}
            />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{recipe.strMeal}</Text>
                    <Text style={styles.country}>{recipe.strArea}</Text>
                </View>
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.additionalDataContent}
                >
                    {additionalData.map((data, index) => {
                        return (
                            <AdditionaRecipeDataCard key={index} {...data} />
                        );
                    })}
                </ScrollView>
                <View>
                    <Text style={styles.subhead}>Ingredients</Text>
                    {[...Array(20).keys()].map((index) => {
                        if (recipe[`strIngredient${index + 1}`]) {
                            return (
                                <View
                                    key={index}
                                    style={styles.ingredientContainer}
                                >
                                    <View style={styles.yellowDot} />
                                    <Text style={styles.measure}>
                                        {recipe[`strMeasure${index + 1}`]}
                                    </Text>
                                    <Text style={styles.ingredient}>
                                        {recipe[`strIngredient${index + 1}`]}
                                    </Text>
                                </View>
                            );
                        }
                    })}
                </View>
            </View>
        </ScrollView>
    );
};
export default RecipeDetailScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    recipeImage: {
        alignSelf: "center",
        width: "100%",
        height: 400,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    content: { paddingHorizontal: 15, marginTop: 32, gap: 15 },
    title: { fontWeight: "800", fontSize: 28 },
    subhead: { fontWeight: "800", fontSize: 22, marginBottom: 16 },
    country: { color: "gray", fontSize: 16 },
    additionalDataContent: { width: "100%", justifyContent: "space-around" },
    ingredientContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
    yellowDot: {
        backgroundColor: colors.amber700,
        borderRadius: 90,
        width: 10,
        height: 10,
    },
    measure: { fontWeight: "800", fontSize: 16 },
    ingredient: { fontSize: 16 },
});
