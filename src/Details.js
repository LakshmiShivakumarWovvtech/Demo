/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'native-base';
import React from 'react';
import {Container, Content, Card, CardItem, Text, Body} from 'native-base';

const About = (props) => {
  //   const name = props.route.params.name,
  //     is_potentially_hazardous_asteroid =
  //       props.route.params.is_potentially_hazardous_asteroid,
  //     nasa_jpl_url = props.route.params.nasa_jpl_url;
  const data = props.route.params.result;
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Body>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Name: </Text>
                <Text>{data.name}</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Nasa_jpl-url: </Text>
                <Text>{data.nasa_jpl_url}</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>
                  is_potentially_hazardous_asteroid:
                </Text>
                <Text>{data.is_potentially_hazardous_asteroid}</Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default About;
