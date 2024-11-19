import { StyleSheet, Text, View } from "react-native";

type HeaderProps = 
{
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) =>
//const Header = ( {title} : HeaderProps) =>

//const Header = ( props: HeaderProps ) => 
    {

    //  const title = props.title; the same as below but we prefer the below solution => destructuring
  //    const {title} = props;

     return <View style={styles.container}>
      <Text style={styles.header}> {title} </Text>
    </View>
    }

    const styles = StyleSheet.create({
      container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "blue"
      },
        header: {
          paddingVertical: 20,
          color: "white",
          fontSize: 20
        }
    });

    export default Header;
  