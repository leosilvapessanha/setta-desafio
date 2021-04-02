import React,{createContext, ReactNode, useEffect, useState} from 'react';
import { Button, View, Text, Modal } from 'react-native';


interface TimeOutProps{
  timeAllowed: boolean;
  setTimeallowed: boolean;
}

interface ProviderProps{
  children: ReactNode;
}


// const Expire = createContext({} as TimeOutProps)

function TimeOut ({ children }: ProviderProps): void {
  const [timeAllowed,setTimeAllowed] = useState(true);

  useEffect(() => {
    setTimeout(() => setTimeAllowed(false), 45000);
  }, []);
<>
 {timeAllowed ? (
        <Container>
          <div>
          </div>
        </Container>
      ) : (
 <Container>
          <div>
          </div>
        </Container>
)}</>


export {TimeOut};



}
  constructor()
  {
    super();
    this.state={
      show: true
    }
  }

  useEffect(() => {
    setState(false)
  }, []);

  render(){
    return(
    <View style={{ flex: 1, marginTop: 100}}>
      <Text style={{fontSize: 80 }}> Normal text</Text>
      {this.state ? }
      <Modal
      transparent={true}
      visible={true}>

      <View style={{backgroundColor: "#040404aa", flex:1}}>
      <View style = {{ background: "#F4F4F4", margin: 50, padding: 40, borderRadius: 10, flex: 1 }}>
        <Text style={{fontSize: 80 }}> Normal MODAL text</Text>
        <Button title="hide" onPress={() => {this.setState({show:false})}} />
      </View>
      </View>
      </Modal>
    </View>
    )
  }
}

export default App;
