import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

interface Props {
  children: ReactNode;
}

type State = {
  error: Error | null;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error): void {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
    });
    // You can also log error messages to an error reporting service here
  }

  render(): React.ReactNode {
    if (this.state.error) {
      // Error path
      return (
        <View>
          <Text>{this.state.error && this.state.error.toString()}</Text>
        </View>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
