import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Navigation } from "react-native-navigation";
import LiveScreen from './screens/Live';
import CourseScreen from './screens/Course';

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

  function registerScreen(componentName, component, options) {
    const ComponentProvider = ProviderHOC(component);
    ComponentProvider.options = options;
    Navigation.registerComponent(componentName, () => ComponentProvider);
  }

  registerScreen('com.slate.live', LiveScreen, {
    topBar: {
      title: {
        text: 'Live SLATE'
      }
    }
  });

  registerScreen('com.slate.course', CourseScreen, {
    topBar: {
      title: {
        text: 'Course SLATE'
      }
    }
  });
};
