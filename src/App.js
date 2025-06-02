import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import SearchBar from './components/SearchBar';

import product_Data from './data/ProductData.json';
import  ProductCards  from './components/ProductCards.js';

function App() {


  const renderItem = ({ item, index }) => (
    <ProductCards product={item} isFullWidth={index === 8} />

  );

  return (

    
    <SafeAreaView style={styles.container}>
      
      <View>
        <Text style={styles.logo_text}>Patika Store</Text>
         <SearchBar/>
      </View>

      <View>
        <FlatList
        
        contentContainerStyle={{ paddingBottom: 150 }}
         columnWrapperStyle={{
    justifyContent: 'space-between',
    paddingHorizontal: 10, // sağ-sol kenar boşluğu
  }}
        data={product_Data}
       keyExtractor={item => item.id.toString()}
        numColumns={2}
         renderItem={({ item, index }) => (
    <ProductCards
      product={item}
      isFullWidth={index === product_Data.length - 1}
    />
  )}
        
        
        
        />
      </View>

      
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:16,
   backgroundColor:'#ECEFF1',
   flex:1
  },
 
  logo_text:{
     fontWeight:'bold',
    fontSize:35,
    margin:15
  },
  
  
});

export default App;