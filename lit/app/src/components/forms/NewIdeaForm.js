import React from "react";
import { View, KeyboardAvoidingView, Text, TouchableHighlight, Switch, StyleSheet } from "react-native";
import { Mutation } from "react-apollo";

import NamedTextField from "../NamedTextField";
import NamedTextArea from "../NamedTextArea";
import Error from "../Error";
import { CREATE_IDEA_MUTATION } from "../../gql/mutations";
import { IDEAS_QUERY, PUBLIC_IDEAS_QUERY } from "../../gql/queries";
import { IDEA_TYPES } from "../../constants";

const styles = StyleSheet.create({
  textField: {
    fontSize: 30
  },
  titleField: {
    fontSize: 30
  },
  button: {
    backgroundColor: "white",
    marginVertical: 5,
    padding: 5
  },
  buttonText: {
    fontSize: 20
  }
});

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
      <KeyboardAvoidingView>
        <Error error={this.state.error} />
        <NamedTextField
          name="Name"
          value={this.state.values.name}
          onChange={value => {
            this.updateValue("name", value);
          }}
          textStyle={styles.textField}
          titleStyle={styles.titleField}
        />
        <NamedTextArea
          name="Description"
          value={this.state.values.description}
          maxLength={500}
          onChange={value => { this.updateValue("description", value); }}
          textStyle={styles.textField}
          titleStyle={styles.titleField}
        />
        <View>
          <Text style={styles.titleField}>Public</Text>
          <Switch
            value={this.state.values.public}
            onValueChange={value => { this.updateValue("public", value); }}
            onTintColor="#aaa"
            thumbTintColor="white"
            style={{ alignSelf: "flex-start" }}
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={this.submit}
            style={styles.button}
            underlayColor="seagreen"
          >
            <Text style={styles.buttonText}>
              Save
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.cancel}
            style={styles.button}
            underlayColor="firebrick"
          >
            <Text style={styles.buttonText}>
              Cancel
            </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
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
