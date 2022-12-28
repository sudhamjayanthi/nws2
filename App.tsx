import 'expo-dev-client';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TabNav from './src/components/TabNav';

import SpeechRecognitionScreen from './src/screens/speech-recognition.screen';


export default function App() {
  return (
    <> 
      <StatusBar style="auto" />

      <SpeechRecognitionScreen />
      {/* <NavigationContainer>
        <TabNav />
      </NavigationContainer> */}
    </>
  );
}