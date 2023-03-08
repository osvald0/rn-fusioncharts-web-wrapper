import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import FusionCharts from './components/FusionCharts';

type Props = {
  chartConfig: unknown;
  containerStyle?: ViewStyle;
};

const App = (props: Props): JSX.Element => {
  const { chartConfig, containerStyle } = props;
  return (
    <View style={{ ...styles.containerStyle, ...containerStyle }}>
      <FusionCharts chartConfig={chartConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
  },
});

export default App;
