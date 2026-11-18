import { Text, Pressable, StyleSheet } from 'react-native';

interface PropsFAB {
  // Text displayed inside the button
  label: string;

  // Floating button position on screen
  position?: 'left' | 'right' | 'center';

  // Triggered when the button is pressed
  onPress?: () => void;

  // Triggered when the button is long pressed
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = 'right',
}: PropsFAB) {
  // Determines which position style to apply
  const positionStyle =
    position === 'left'
      ? styles.positionLeft
      : position === 'center'
      ? styles.positionCenter
      : styles.positionRight;

  return (
    <Pressable
      style={[styles.floatingButton, positionStyle]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Base floating button styles
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
  },

  // Position at the bottom-right corner
  positionRight: {
    right: 20,
  },

  // Position at the bottom-left corner
  positionLeft: {
    left: 20,
  },

  // Position at the bottom center
  positionCenter: {
    alignSelf: 'center',
  },
});