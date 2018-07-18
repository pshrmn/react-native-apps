import React from "react";
import { View, Text, Button, Switch, StyleSheet } from "react-native";
import { Mutation } from "react-apollo";

import NamedTextField from "./NamedTextField";
import NamedTextArea from "./NamedTextArea";
import Error from "./Error";
import { CREATE_IDEA_MUTATION } from "../gql/mutations";
import { IDEAS_QUERY, PUBLIC_IDEAS_QUERY } from "../gql/queries";
import { IDEA_TYPES } from "../constants";

class NewIdeaForm extends React.Component {
  state = {
    values: {
      name: "",
      description: "",
      type: IDEA_TYPES[0],
      public: false
    },
    error: undefined
  };

  updateValue = (key, value) => {
    this.setState(prevState => {
      return {
        values: {
          ...prevState.values,
          [key]: value
        }
      };
    })
  }

  submit = async () => {
    const { createIdea } = this.props;
    const response = await createIdea({
      variables: this.state.values,
      refetchQueries: [{ query: IDEAS_QUERY }, { query: PUBLIC_IDEAS_QUERY }]
    });

    const { error, idea } = response.data.createIdea;
    if (error) {
      this.setState({
        error
      });
    } else {
      this.props.router.navigate({
        name: "Idea",
        params: { id: idea.id },
        method: "REPLACE"
      });
    }
  }

  cancel = () => {
    this.props.router.history.go(-1);
  }

  render() {
    return (
      <View>
        <Error error={this.state.error} />
        <NamedTextField
          name="Name"
          value={this.state.values.name}
          onChange={value => {
            this.updateValue("name", value);
          }}
        />
        <NamedTextArea
          name="Description"
          value={this.state.values.description}
          maxLength={500}
          onChange={value => { this.updateValue("description", value); }}
        />
        <View>
          <Text>Public</Text>
          <Switch
            value={this.state.values.public}
            onValueChange={value => { this.updateValue("public", value); }}
          />
        </View>
        <View>
          <Button
            title="Save"
            onPress={this.submit}
          />
          <Button
            title="Cancel"
            onPress={this.cancel}
          />
        </View>
      </View>
    )
  }
}

export default props => (
  <Mutation mutation={CREATE_IDEA_MUTATION}>
    {(createIdea, { data }) => (
      <NewIdeaForm {...props} createIdea={createIdea} createIdeaData={data}/>
    )}
  </Mutation>
);
