import { Pressable, StyleSheet, View } from "react-native";
import { Link } from 'expo-router';

type LinkButtonProps = {
    href: any;
    children: React.ReactNode;
};

export default function LinkButton({ href, children }: LinkButtonProps) {
    return (
    <View style={{   flex: 1,
                    alignItems: "center",
                    justifyContent: "center",}}>
         <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#4903ad" : "#6100ED",
                    margin: 10,
                  },
                  styles.button
                ]}
              >
            <Link style={styles.buttonText} href={href}>{children}</Link>
        </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    padding: 16,
    width:150,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
