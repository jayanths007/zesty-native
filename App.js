import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import Coffee from "./Coffee";
import { TextInput, Button } from "react-native-paper";

export default function App() {
  const [title, setTitle] = useState("");
  const [postItems, setPostItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    //calling the iamges api
    const respose = await fetch("https://coffee.alexflipnote.dev/random.json");

    const json = await respose.json();
    const post = {
      text: title,
      uri: json.file,
    };
    setPostItems((items) => [post, ...items]);
    setTitle("");
    setLoading(false);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          paddingBottom: 20,
          color: "#001463",
          fontWeight: "bold",
        }}
      >
        Zesty React-Native Test
      </Text>

      <TextInput
        onChangeText={(text) => setTitle(text)}
        value={title}
        mode="outlined"
      />

      <Button
        icon="camera"
        mode="contained"
        onPress={() => handleSubmit()}
        loading={loading}
        style={{ width: 150, marginTop: 10 }}
        disabled={loading}
      >
        Post
      </Button>
      {postItems &&
        postItems.map((item, index) => {
          return <Coffee text={item.text} key={index} url={item.uri} />;
        })}
    </ScrollView>
  );
}
