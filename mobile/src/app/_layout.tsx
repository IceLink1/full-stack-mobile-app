import { Stack, router } from "expo-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Text } from "react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="createUpdateReminder"
          options={{
            presentation: 'modal',
            headerTitle: 'New Reminder',
            headerLeft: () => <Text style={{ color: '#0E7AFE' }} onPress={() => router.back()}>Cancel</Text>
          }}
        />
      </Stack>
    </QueryClientProvider>
  )
}