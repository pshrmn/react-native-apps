import React from "react";
import { View, Text, TouchableHighlight, Switch, StyleSheet } from "react-native";
import { Query, Mutation } from "react-apollo";

import NamedTextField from "../NamedTextField";
import NamedTextArea from "../NamedTextArea";
import Error from "../Error";
import { UPDATE_IDEA_MUTATION } from "../../gql/mutations";
import { IDEA_QUERY, IDEAS_QUERY, PUBLIC_IDEAS_QUERY } from "../../gql/queries";
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
    values: {},
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
    const { updateIdea } = this.props;
    const response = await updateIdea({
      variables: this.state.values,
      refetchQueries: [{ query: IDEAS_QUERY }, { query: PUBLIC_IDEAS_QUERY }]
    });

    const { error, idea } = response.data.updateIdea;
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

  componentDidUpdate(prevProps) {
    // set the state when the query has loaded
    if (prevProps.query.loading && !this.props.query.loading) {
      this.setState(prevState => ({
        ...prevState,
        values: {
          ...prevState.values,
          ...this.props.query.data.idea
        }
      }));
    }
  }

  componentDidMount() {
    if (this.props.query.loading === false) {
      this.setState(prevState => ({
        ...prevState,
        values: {
          ...prevState.values,
          ...this.props.query.data.idea
        }
      }));
    }
  }

  render() {
    if (this.props.query.loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View>
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
          <Text>Public</Text>
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
      </View>
    )
  }
}

export default props => (
  <Query query={IDEA_QUERY} variables={{ id: props.idea }}>
    {queryResults => (
      <Mutation mutation={UPDATE_IDEA_MUTATION}>
        {updateIdea => (
          <NewIdeaForm
            {...props}
            updateIdea={updateIdea}
            query={queryResults}
          />
        )}
      </Mutation>
    )}
  </Query>
  
);
