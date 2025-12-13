import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CameraContainer } from './components/Camera';


export default function App() {
  return (
    <GestureHandlerRootView>
      <CameraContainer />
    </GestureHandlerRootView >
  );
}
