import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings'
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RootSiblingParent>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="cektagihan"  options={{ title:'Cek Tagihan' }} />
          <Stack.Screen name="keluhan"  options={{ title:'Keluhan' }} />
          <Stack.Screen name="riwayatpembayaran"  options={{ title:'Riwayat Pembayaran' }} />
          <Stack.Screen name="profil"  options={{ title:'Profil' }} />
          <Stack.Screen name="bayar" options={{title:'Bayar'}}/>
        </Stack>
      </ThemeProvider>
    </RootSiblingParent>
  );
}
