import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Dropdown() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const items = ['Month', 'Day', 'Year'];
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleSelectItem = (item) => {
      setSelectedItem(item);
      setShowDropdown(false);
    };
  
    return (
      <View>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={{ marginRight: 5 }}>{selectedItem || items[0]}</Text>
          <AntDesign name={!showDropdown ? "down" : "up"} size={12} color="black" />
        </TouchableOpacity>
  
        {showDropdown && (
          <View style={styles.dropdown}>
            {items.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => handleSelectItem(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    )
  }

  const styles = StyleSheet.create({
    dropdownButton: {
      borderWidth: 1,
      borderRadius: 100,
      padding: 5,
      width: 100,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dropdown: {
      marginTop: 5,
      borderWidth: 1,
      width: 200,
    },
    dropdownItem: {
      padding: 10,
      borderBottomWidth: 1,
    },
  });