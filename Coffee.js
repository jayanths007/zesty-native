import React from "react";
import { View } from "react-native";
import { Button, Card, Title } from "react-native-paper";

const Coffee = (props) => {
  return (
    <View style={{ alignSelf: "center", width: 320, marginTop: 10 }}>
      <Card>
        <Card.Content>
          <Title>{props.text}</Title>
        </Card.Content>
        <Card.Cover
          style={{ borderRadius: 10, margin: 10 }}
          source={{ uri: props.url }}
        />
        <Card.Actions>
          <Button>like</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Coffee;
