import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {Searchbar} from 'react-native-paper';
import {Divider} from 'react-native-paper';
import Slider from './Components/Slider'

const App = () => {
  const handleOrderPlaced = () => {
    Alert.alert('Order Placed', 'Your order has been placed successfully.');
  };

  const handleAddToFavorites = () => {
    Alert.alert(
      'Added to Favorites',
      'This item has been added to your favorites.',
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <View>
          <Text style={Styles.text}>E-Commerce App</Text>
          <Slider />
          <Text style={Styles.fast}>Fast Food</Text>
          <Search1 />
          <Card style={Styles.card}>
            <Text style={Styles.number}>1</Text>
            <Card.Title
              title="Pizza"
              titleStyle={Styles.title}
              subtitle="Chicken Tikka"
              subtitleStyle={Styles.subtitle}
            />
            <Card.Content>
              <Text variant="titleLarge" style={Styles.cardTitle}>
                Small Price RS: 300
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Medium Price RS: 700
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Large Price RS: 1500
              </Text>
            </Card.Content>
            <Card.Cover
              source={{
                uri: 'https://dha.cafeela.pk/wp-content/uploads/2021/10/chicken-tikka-pizza.jpg',
              }}
            />
            <Card.Actions>
              <Button
                onPress={handleOrderPlaced}
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.button}
                mode="contained">
                Order Placed
              </Button>
              <Button
                onPress={handleAddToFavorites}
                mode="outlined"
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.buttonOutlined}>
                Add to Favorites
              </Button>
            </Card.Actions>
          </Card>

          <Card style={Styles.card}>
            <Text style={Styles.number}>2</Text>
            <Card.Title
              title="Pizza"
              titleStyle={Styles.title}
              subtitle="Vegetable"
              subtitleStyle={Styles.subtitle}
            />
            <Card.Content>
              <Text variant="titleLarge" style={Styles.cardTitle}>
                Small Price RS: 250
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Medium Price RS: 650
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Large Price RS: 1300
              </Text>
            </Card.Content>
            <Card.Cover
              source={{
                uri: 'https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1',
              }}
            />
            <Card.Actions>
              <Button
                onPress={handleOrderPlaced}
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.button}
                mode="contained">
                Order Placed
              </Button>
              <Button
                onPress={handleAddToFavorites}
                mode="outlined"
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.buttonOutlined}>
                Add to Favorites
              </Button>
            </Card.Actions>
          </Card>

          <Card style={Styles.card}>
            <Text style={Styles.number}>3</Text>
            <Card.Title
              title="Pizza"
              titleStyle={Styles.title}
              subtitle="BBQ Chicken"
              subtitleStyle={Styles.subtitle}
            />
            <Card.Content>
              <Text variant="titleLarge" style={Styles.cardTitle}>
                Small Price RS: 400
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Medium Price RS: 800
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Large Price RS: 1700
              </Text>
            </Card.Content>
            <Card.Cover
              source={{
                uri: 'https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg',
              }}
            />
            <Card.Actions>
              <Button
                onPress={handleOrderPlaced}
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.button}
                mode="contained">
                Order Placed
              </Button>
              <Button
                onPress={handleAddToFavorites}
                mode="outlined"
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.buttonOutlined}>
                Add to Favorites
              </Button>
            </Card.Actions>
          </Card>

          <Card style={Styles.card}>
            <Text style={Styles.number}>4</Text>
            <Card.Title
              title="Pizza"
              titleStyle={Styles.title}
              subtitle="Pepperoni"
              subtitleStyle={Styles.subtitle}
            />
            <Card.Content>
              <Text variant="titleLarge" style={Styles.cardTitle}>
                Small Price RS: 300
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Medium Price RS: 750
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Large Price RS: 1550
              </Text>
            </Card.Content>
            <Card.Cover
              source={{
                uri: 'https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2-500x500.jpg',
              }}
            />
            <Card.Actions>
              <Button
                onPress={handleOrderPlaced}
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.button}
                mode="contained">
                Order Placed
              </Button>
              <Button
                onPress={handleAddToFavorites}
                mode="outlined"
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.buttonOutlined}>
                Add to Favorites
              </Button>
            </Card.Actions>
          </Card>

          <Card style={Styles.card}>
            <Text style={Styles.number}>5</Text>
            <Card.Title
              title="Pizza"
              titleStyle={Styles.title}
              subtitle="Spicy Beef"
              subtitleStyle={Styles.subtitle}
            />
            <Card.Content>
              <Text variant="titleLarge" style={Styles.cardTitle}>
                Small Price RS: 550
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Medium Price RS: 950
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Large Price RS: 1850
              </Text>
            </Card.Content>
            <Card.Cover
              source={{
                uri: 'https://lodough.co/cdn/shop/articles/Spicy-beef.jpg?v=1597064256',
              }}
            />
            <Card.Actions>
              <Button
                onPress={handleOrderPlaced}
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.button}
                mode="contained">
                Order Placed
              </Button>
              <Button
                onPress={handleAddToFavorites}
                mode="outlined"
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.buttonOutlined}>
                Add to Favorites
              </Button>
            </Card.Actions>
          </Card>

          <Card style={Styles.card}>
            <Text style={Styles.number}>6</Text>
            <Card.Title
              title="Pizza"
              titleStyle={Styles.title}
              subtitle="Hawaiian"
              subtitleStyle={Styles.subtitle}
            />
            <Card.Content>
              <Text variant="titleLarge" style={Styles.cardTitle}>
                Small Price RS: 450
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Medium Price RS: 750
              </Text>
              <Text variant="bodyMedium" style={Styles.cardTitle}>
                Large Price RS: 1600
              </Text>
            </Card.Content>
            <Card.Cover
              source={{
                uri: 'https://hips.hearstapps.com/hmg-prod/images/hawaiian-pizza-index-65f4641de4b08.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
              }}
            />
            <Card.Actions>
              <Button
                onPress={handleOrderPlaced}
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.button}
                mode="contained">
                Order Placed
              </Button>
              <Button
                onPress={handleAddToFavorites}
                mode="outlined"
                contentStyle={Styles.buttonContent}
                labelStyle={Styles.buttonLabel}
                style={Styles.buttonOutlined}>
                Add to Favorites
              </Button>
            </Card.Actions>
          </Card>
          <Divider />

          <Text style={Styles.dev}>Developed By Qavi Shaikh</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Search1 = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      icon="magnify"
      clearIcon="close"
    />
  );
};

const Styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontStyle: 'italic',
  },
  fast: {
    fontSize: 38,
    textAlign: 'center',
    color: 'red',
  },
  card: {
    margin: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 300,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContent: {
    height: 48,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    margin: 5,
    backgroundColor: 'black',
  },
  buttonOutlined: {
    margin: 5,
    borderColor: 'black',
  },
  number: {
    fontSize: 20,
    paddingLeft: 9,
    color: 'red',
    backgroundColor: 'black',
    width: 25,
    borderRadius: 50,
  },
  dev: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
