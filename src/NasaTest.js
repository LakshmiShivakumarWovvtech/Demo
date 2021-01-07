/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import axios from 'axios';
import {
  View,
  Button,
  Container,
  Content,
  Input,
  Item,
  List,
  ListItem,
  Text,
  CardItem,
  Card,
  Body,
  Spinner,
} from 'native-base';
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
const NasaTest = (props) => {
  const [books, setBooks] = useState([]);
  const [value, setValue] = useState(null);
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  // const [result, setResult] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      //  'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=4q7gind8M7xuZ4qskNcqO1yAasOAZF99cMbwFkkE',
      'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=nUfYg5yZvl0L8dh7mbhxo5ngLk7rzGzkmUSigjJr',
    );
    //console.log('fv', response.data);
    setBooks(response.data.near_earth_objects);
    setLoading(false);
  };

  const handleChange = (event) => {
    setValue(event);
  };

  const submitData = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${value}?api_key=nUfYg5yZvl0L8dh7mbhxo5ngLk7rzGzkmUSigjJr`,

        //   'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=nUfYg5yZvl0L8dh7mbhxo5ngLk7rzGzkmUSigjJr',
      );
      setResult(response.data);
      // onPress();
      props.navigation.navigate('List', {
        result: response.data,
      });
    } catch (error) {
      return <Text>No Data Found</Text>;
    }
    //console.log('fv', response.data);
    //setBooks(response.data.near_earth_objects);
  };
  return (
    <Container className="App">
      <Content>
        {/* <Item style={{marginLeft: 30, marginTop: 30, borderColor: 'grey'}}>
          <Input
            placeholder="Enter Astroid Id"
            value={value}
            onChangeText={handleChange}
          />
        </Item> */}
        <Card>
          <CardItem>
            <Body>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '85%',
                  padding: 10,
                  marginLeft: 30,
                  marginBottom: 20,
                  marginTop: 20,
                }}
                placeholder="Enter Astroid Id"
                value={value}
                onChangeText={handleChange}
              />
              <Button
                block
                style={{marginHorizontal: 30}}
                className="fetch-button"
                onPress={() => submitData()}
                disabled={!value ? true : false}>
                <Text>Submit</Text>
              </Button>
              <Button
                block
                style={{marginTop: '2%', marginHorizontal: 30}}
                onPress={() => fetchData()}>
                <Text>Random Astroid Id</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
        {loading ? (
          <Spinner color="blue" />
        ) : (
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              {books &&
                books.map((item) => {
                  return (
                    <View key={item.id} style={{alignItems: 'center'}}>
                      <List>
                        <ListItem>
                          <TouchableOpacity
                            onPress={() => {
                              setValue(item.id);
                              submitData();
                            }}>
                            <Text>{item.id}</Text>
                          </TouchableOpacity>
                        </ListItem>
                      </List>
                    </View>
                  );
                })}
              {/* {result && (
              <View>
                <Text>{result.name}</Text>
              </View>
            )} */}
            </ScrollView>
          </SafeAreaView>
        )}
      </Content>
    </Container>
  );
};

export default NasaTest;
