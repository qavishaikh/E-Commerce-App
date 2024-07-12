import React from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

const images = [
  {
    uri: 'https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLezaQjUHi6XB4etkbuCbVJarQIJ7uAwUqA&s',
  },
  {
    uri: 'https://people.com/thmb/FTWFalNQHdCGnvv1Hk5BWqkbRf8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(857x328:859x330)/taco-bell-new-crunchwrap-041323-ef1c127f27ad43a48bdbea43eea0ccc3.jpg',
  },
];

const MyCarousel = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };

  return (
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: screenWidth * 0.75, // Adjust the aspect ratio as needed
  },
});

export default MyCarousel;
