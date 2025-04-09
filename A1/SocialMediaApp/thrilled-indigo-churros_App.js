import React from "react";
import { View, Text, Button, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Login & Signup Screen
const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://images.unsplash.com/photo-1740885222801-f6a2e849563b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Login" onPress={() => navigation.replace("HomeTabs")} />
      <TouchableOpacity onPress={() => alert("Signup here!")}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

// Feed Screen
const FeedScreen = () => {
  const posts = [
    { id: "1", user: "Ali", text: "Hello guys", image: "https://images.unsplash.com/photo-1740688055196-a836abca5518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D" },
    { id: "2", user: "khan", text: "Check this out!", image: "https://media.istockphoto.com/id/1391191416/photo/architect-working-from-home-office.jpg?s=1024x1024&w=is&k=20&c=7aC2UOwnkNOEPAN7zHQzvtSDNVkwBCPB5G1V3PzhFU4=" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.user}>{item.user}</Text>
            <Image source={{ uri: item.image }} style={styles.postImage} />
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Create Post Screen
const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Post</Text>
      <TextInput placeholder="Write something..." style={styles.input} />
      <Button title="Upload Image" onPress={() => alert("Upload Image Clicked")} />
      <Button title="Post" onPress={() => alert("Post Uploaded!")} />
    </View>
  );
};

// Profile Screen
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://source.unsplash.com/200x200/?person" }} style={styles.profileImage} />
      <Text style={styles.title}>John Doe</Text>
      <Text>Bio: Love coding! 🚀</Text>
      <Button title="Edit Profile" onPress={() => alert("Edit Profile Clicked")} />
    </View>
  );
};

// Chat Screen
const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <Text>No messages yet.</Text>
    </View>
  );
};

// Notifications Screen
const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSbShCIpryZ9ggbb1zB7sFnn04P-3MJMSpA&s" }} style={styles.notificationImage} />
      <Text style={styles.title}>Notifications</Text>
      <Text>No new notifications.</Text>
    </View>
  );
};

// Bottom Tab Navigation
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Create" component={CreatePostScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

// App Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5 },
  link: { marginTop: 10, color: "blue" },
  post: { padding: 20, marginBottom: 10, backgroundColor: "#f8f8f8", borderRadius: 10 },
  user: { fontWeight: "bold" },
  postImage: { width: 150, height: 150, marginVertical: 10, borderRadius: 10 },
  profileImage: { width: 100, height: 100, marginBottom: 10, borderRadius: 50 },
  notificationImage: { width: 100, height: 100, marginBottom: 10, borderRadius: 10 },
  logo: { width: 80, height: 80, marginBottom: 20 },
});