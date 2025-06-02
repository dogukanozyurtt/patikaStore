import React from "react";
import { StyleSheet,View,Image,Text, FlatList, Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width;

const ProductCards =({product,isFullWidth }) => {
    return(
          <View style={[styles.container, isFullWidth && styles.fullWidth]}>

          
                  <Image
                    style={styles.product_image}
                  source={{ uri: product.imgURL }}
                  
                  />  
                  <Text style={styles.product_title}>{product.title}</Text>
                  <Text style={styles.product_price}>{product.price}</Text>
        
                    {!product.inStock && <Text style={styles.stock}>Stokta Yok</Text>}
        
              </View>
        

    );
};

const styles = StyleSheet.create({
container: {
  width: '48%',
  backgroundColor: '#fff',
  padding: 20,
  marginBottom: 10,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},

  
   product_image:{
      height: 120,
    borderRadius: 8,
   },
    product_title:{
      fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    },
    product_price:{
      fontSize: 14,
    marginTop: 2,
    },
    stock:{
      color: 'red',
    fontWeight: 'bold',
    },
    fullWidth: {
width: '100%',
  marginTop: 10,
  marginBottom: 10,
}
    
})

export default ProductCards;