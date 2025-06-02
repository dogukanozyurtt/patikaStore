import React from "react";
import { TextInput,StyleSheet,View } from "react-native";

const SearchBar =() => {
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Ara..."
            
            />
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        margin:10,
        
    },
    searchInput:{
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    margin:10,
    fontSize:20
    }
})


export default SearchBar;