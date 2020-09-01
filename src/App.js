import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Navigation } from "react-native-navigation";
import LiveScreen from './screens/Live';

function ProviderHOC(WrappedComponent) {
  return class extends React.PureComponent {
    render() {
      return <ThemeProvider>
        <WrappedComponent {...this.props} />
      </ThemeProvider>
    }
  }
}

export default function () {
  const LiveScreenComponent = ProviderHOC(LiveScreen);
  LiveScreenComponent.options = {
    topBar: {
      title: {
        text: 'Live SLATE'
      }
    }
  }
  Navigation.registerComponent('com.slate.live', () => LiveScreenComponent);
};
