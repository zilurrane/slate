/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import registerApp from './src/App';
import Icon from "react-native-vector-icons/Ionicons";

registerApp();

Navigation.events().registerAppLaunchedListener(() => {
    Promise.all([
        Icon.getImageSource("radio", 30),
        Icon.getImageSource("videocam", 30)
    ]).then(iconSource => {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: 'com.slate.live'
                            }
                        }
                    ]
                },
                bottomTabs: {
                    id: 'BOTTOM_TABS_LAYOUT',
                    children: [
                        {
                            stack: {
                                id: 'LIVE_TAB',
                                children: [
                                    {
                                        component: {
                                            id: 'com.slate.live',
                                            name: 'com.slate.live',
                                            options: {
                                                bottomTab: {
                                                    text: 'Live',
                                                    icon: iconSource[0]
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            stack: {
                                id: 'COURSE_TAB',
                                children: [
                                    {
                                        component: {
                                            id: 'com.slate.course',
                                            name: 'com.slate.course',
                                            options: {
                                                bottomTab: {
                                                    text: 'Courses',
                                                    icon: iconSource[1]
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        });
    });
});
