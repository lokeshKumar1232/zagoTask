import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text } from 'react-native';
import ListCard from '../Component/ListCard';
import Header from '../Component/Header';

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      name: 'Hard Custard Ice Cream',
      image: require('../Assets/image1.webp'),
      price: 200,
      description: "For most Americans reading this guide, this is what you think of when you think of ice cream...",
    },
    {
      id: 2,
      name: 'Gelato',
      image: require('../Assets/image2.webp'),
      price: 150,
      description: "higher volume of milk than cream, which doesn't incorporate as much air during churning...",
    },
    {
      id: 3,
      name: 'New England Ice Cream',
      image: require('../Assets/image2.webp'),
      price: 100,
      description: "New England is the ice cream capital of the US...",
    },
    {
      id: 4,
      name: 'Philadelphia Ice Cream',
      image: require('../Assets/image4.webp'),
      price: 200,
      description: "Philadelphia ice creams are lighter, fluffier, and melt more milky on the tongue...",
    },
    {
      id: 5,
      name: 'Midwestern Frozen Custard',
      image: require('../Assets/image5.webp'),
      price: 200,
      description: "That richness is thanks to a high-fat and egg base...",
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
     
      <Text style={styles.headerText}>{'Product List'}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  searchInput: {
    marginTop: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  flatList: {
    marginTop: 16,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    alignSelf:'center'
},
});

export default HomeScreen;
