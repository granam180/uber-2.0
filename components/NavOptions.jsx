import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed"
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data} // loops through array
      horizontal
      keyExtractor={(item) => item.id} // get item `id`
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin} // if there is no origin set, disable buttons
        >

      {/* if origin is not set, the "opacity-20" class will be applied 
          to the View component, which will reduce its opacity by 20%. 
          Otherwise, if origin is set, no opacity class will be applied */}
          <View style={tw`${!origin ? "opacity-20" : ""}`}>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`} // rounded black bg for button
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
