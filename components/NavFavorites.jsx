import { Icon } from '@rneui/themed';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Dover , DE',
  },
  {
    id: '666',
    icon: 'car',
    location: 'Work',
    destination: 'Dover , DE',
  },
  {
    id: '777',
    icon: 'card',
    location: 'Bank',
    destination: 'Dover , DE',
  },
  // {
  //   id: '986',
  //   icon: 'cloud',
  //   location: 'California',
  //   destination: 'Los Angeles , California',
  // },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={[tw`bg-gray-200 h-${0.3}`]} />}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;
