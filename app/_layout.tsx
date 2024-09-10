import { Routes } from '@/constants/routes';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { RealmProvider } from '@realm/react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';
import { ISA } from '../schema/ISA';
import { Fund } from '@/schema/Fund';
import { User } from '@/schema/User';
import { Investment } from '@/schema/Investment';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RealmProvider
      // @ts-ignore
      schema={[ISA, Fund, User, Investment]}
      deleteRealmIfMigrationNeeded
    >
      <PaperProvider>
        <ThemeProvider value={DarkTheme}>
          <Stack>
            <Stack.Screen
              name='index'
              options={{ title: 'Home' }}
            ></Stack.Screen>
            <Stack.Screen
              name={Routes.NEW_INVESTMENT}
              options={{ title: 'New Investment' }}
            ></Stack.Screen>
            <Stack.Screen
              name={Routes.INVESTMENTS}
              options={{
                title: 'Investments',
              }}
            ></Stack.Screen>
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </RealmProvider>
  );
};
export default RootLayout;
