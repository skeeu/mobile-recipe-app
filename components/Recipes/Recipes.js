import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getRecipesByCategory } from '../../lib/getRecipesByCategory';
import Recipe from '../Recipe/Recipe';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../store/recipesSlice';
const Recipes = ({ inputText }) => {
    const [showingRecipes, setShowingRecipes] = useState([]);

    const dispatch = useDispatch();
    const activeCategory = useSelector(
        (state) => state.categories.activeCategory
    );
    const recipes = useSelector((state) => state.recipes.recipes);

    useEffect(() => {
        if (activeCategory.trim() !== '') {
            dispatch(fetchRecipes(activeCategory));
        }
    }, [activeCategory]);

    useEffect(() => {
        setShowingRecipes(recipes);
    }, [recipes]);

    useEffect(() => {
        if (inputText.trim() !== '' && recipes.length > 0) {
            const newShowingRecipes = recipes.filter((recipe) => {
                return recipe.strMeal
                    .toLowerCase()
                    .includes(inputText.toLowerCase());
            });
            setShowingRecipes(newShowingRecipes);
        }
    }, [inputText]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Recipes</Text>
            <FlatList
                data={showingRecipes}
                numColumns={2}
                initialNumToRender={8}
                renderItem={({ item }) => {
                    return <Recipe recipe={item} />;
                }}
                keyExtractor={(item) => item.idMeal}
                style={styles.recipeList}
                columnWrapperStyle={styles.recipeListColumnWrapper}
            />
        </View>
    );
};
export default Recipes;
const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        gap: 20,
    },
    heading: {
        fontWeight: '600',
        fontSize: 20,
    },
    recipeList: {
        gap: 18,
    },
    recipeListColumnWrapper: {
        justifyContent: 'space-between',
        gap: 12,
    },
});
