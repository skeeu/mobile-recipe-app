import { Image, StyleSheet, Text, View } from 'react-native';
const Recipe = ({ recipe }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: recipe.strMealThumb }}
                style={styles.recipeImage}
            />
            <Text
                numberOfLines={1}
                style={styles.text}
            >
                {recipe.strMeal}
            </Text>
        </View>
    );
};
export default Recipe;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
    recipeImage: {
        height: 250,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
    },
});
