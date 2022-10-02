import React, { Fragment } from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native";
import Button from "./src/Button/componentes";

const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Button title="button title">
                    <Text>Butao</Text>
                </Button>
            </SafeAreaView>
        </Fragment>
    );
};


export default App;