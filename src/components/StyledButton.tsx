import { Text, TouchableOpacity } from "react-native";

// type ButtonProps={
//     title: string;
//     onPress: () => void;
// };
//
// const StyledButton: React.FC<ButtonProps> = ({title,onPress}) => 
//     {
//         return <TouchableOpacity className="rounded-lg bg-blue-500 p-3 items-center" onPress={onPress}>
//         <Text className="text-white text-lg font-semibold"> {title} </Text>
//       </TouchableOpacity>
//     }


type ButtonProps = {
    children: React.ReactNode;
    onPress: () => void;
  };


const StyledButton: React.FC<ButtonProps> = ({children, onPress}) => 
    {
        return <TouchableOpacity className="rounded-lg bg-blue-500 p-3 items-center" onPress={onPress}>
        <Text className="text-white text-lg font-semibold"> {children} </Text>
      </TouchableOpacity>
    }

export default StyledButton;