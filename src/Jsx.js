// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
// import React, {Component} from 'react';
// import {Container, Header, Content, Button, Text, View,Input,Item} from 'native-base';
// import axios from 'react-native-axios';

//  class Jsx extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       value: '',
//       disabled: true,
//       id: null,
//     };
//   }

// fetchData = async () => {
// const response = await axios.get('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=4q7gind8M7xuZ4qskNcqO1yAasOAZF99cMbwFkkE');
// this.setState(response.data);
// }

//   handleChange=(text)=>{
//     if (text.length === 0){
//       // disable button
//       this.setState({disabled: true});
//     } else {
//       // enable button
//       this.setState({disabled: false});
//     }
//     this.setState({value: text});
//   }

//   render() {
//     return (
//       // <View>
//       <Container>
//           <Item rounded style={{marginTop:'3%'}}>
//             <Input placeholder="Enter Asteroid" value={this.state.value} onChange={(text) => this.handleChange(text) }/>
//           </Item>
//         <Button  disabled={this.state.disabled} block style={{backgroundColor: this.state.disabled ? '#E8E8E8' : '#808080'}} >
//             <Text>Submit</Text>
//           </Button>

//           <Button full style={{marginTop:'3%'}} onPress={this.fetchData}>
//             <Text>Primary</Text>
//           </Button>
//           {this.id && this.state.id.map((index,astID)=>{

//               <Text>{astID.id}</Text>;

//           })};
//       </Container>
//       // </View>
//     );
//   }
// }
// export default Jsx;
import React from 'react';
import {View, Text} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>ome</Text>
    </View>
  );
};
export default Home;
