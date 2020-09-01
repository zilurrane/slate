/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import registerApp from './src/App';

registerApp();

Navigation.events().registerAppLaunchedListener(() => {
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
                                                text: 'Live'
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
                                                text: 'Courses'
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
