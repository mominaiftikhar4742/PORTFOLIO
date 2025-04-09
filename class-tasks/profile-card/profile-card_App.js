import React, { useState } from "react";
import { 
  View, Text, Image, TouchableOpacity, StyleSheet 
} from "react-native";

export default function App() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image 
        source={{ uri: "https://funkylife.in/wp-content/uploads/2022/04/Instagram-dp-192.jpg" }} 
        style={styles.avatar} 
      />

      {/* Name & Location */}
      <Text style={styles.name}>momina iftikhar</Text>
      <Text style={styles.location}>📍 islamabad, Pakistan</Text>

      {/* Follow/Unfollow Button */}
      <TouchableOpacity 
        style={[styles.button, isFollowing ? styles.unfollowButton : styles.followButton]}
        onPress={() => setIsFollowing(!isFollowing)}
      >
        <Text style={styles.buttonText}>
          {isFollowing ? "Following" : "Follow"}
        </Text>
      </TouchableOpacity>

      {/* Show/Hide Description Button */}
      <TouchableOpacity 
        style={styles.descriptionButton} 
        onPress={() => setShowDescription(!showDescription)}
      >
        <Text style={styles.buttonText}>
          {showDescription ? "Hide Description" : "Show Description"}
        </Text>
      </TouchableOpacity>

      {/* Description Section */}
      {showDescription && (
        <Text style={styles.description}>
          Passionate developer exploring the world of technology. Love coding, AI, and building awesome apps! 🚀
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginTop: 50,
    marginHorizontal: 20,
    width: 320,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#1DA1F2",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  location: {
    fontSize: 14,
    color: "#777",
    marginVertical: 4,
  },
  button: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    width: "70%",
  },
  followButton: {
    backgroundColor: "#1DA1F2",
    shadowColor: "#1DA1F2",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  unfollowButton: {
    backgroundColor: "#ff4757",
    shadowColor: "#ff4757",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  descriptionButton: {
    marginTop: 10,
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#FFA500",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
