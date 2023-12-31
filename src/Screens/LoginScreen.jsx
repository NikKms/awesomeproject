import React from 'react';
import LoginForm from '../components/LoginForm';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import bg from '../../assets/img/AuthBg.jpg';

export default function LoginScreen() {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={-250}
        >
          <View style={styles.bg}>
            <ImageBackground
              source={bg}
              style={styles.bg}
            >
              <LoginForm />
            </ImageBackground>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
