import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import SafeViewAndroid from "../components/SafeViewAndroid";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleImageClick = () => {
    Linking.openURL("http://www.joeybonnevillereacts.com");
  };

  return (
    // use SafeAreaView so content stays below the mobile notch space
    <SafeAreaView
      style={[
        SafeViewAndroid.AndroidSafeArea,
        tw`bg-white h-full` /*, {backgroundColor: '#666'} */,
      ]}
    >
      <View style={tw`p-5`}>
        <View style={tw`flex flex-row w-full`}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://links.papareact.com/gzs",
            }}
          />
          <TouchableOpacity
            onPress={handleImageClick} /* style={{ marginLeft: 5 }} */
          >
            <Image
              source={{
                uri: "https://joeybonneville.com/app/img/img1.png",
              }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              alt="JavaScript Developer, Web Developer"
              target="_blank"
            />
          </TouchableOpacity>
        </View>

              {/* Google Autocomplete */}
              
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
            console.log(data);
            // console.log(details);
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
