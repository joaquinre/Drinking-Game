import React, { Fragment } from "react";
import { Button, View, StyleSheet, TextInput } from "react-native";

const List = ({items}) => {
    return (
        <View style={styles.list}>
            {items.map((item) => {
              const {id, title} = item  
              return (
                  <Fragment>
                    <View key={id} style={styles.groceryItem}>
                        <View key={items} style={styles.groceryForm}>
                            <p style={styles.title}>{title}</p>
                        </View>
                    </View>
                  </Fragment>
                )
            })}
        </View>
    )
}

export default List

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  groceryItem: {
      display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
      marginBottom: 1,
      padding: 1,
    //   borderRadius: 5,
      textTransform: 'capitalize',
  },
  groceryForm: {
    paddingRight: 18,
    paddingLeft: 18,
    paddingBottom: 2,
    paddingTop: 2,
    backgroundColor: '#dae2ec',
    borderRadius: 5,
    borderColor: 'transparent',
    fontSize: 14,
    flex: 1,
    color: '#617d98'
  },
});