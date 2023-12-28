import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import {createStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../customer/screens/HomeScreen.tsx';
import MyStocksScreen from '../customer/screens/MyStocksScreen.tsx';
import ShoppingListScreen from '../customer/screens/ShoppingListScreen';
import ShopsScreen from '../customer/screens/ShopsScreen.tsx';
import Registation from '../customer/screens/Registration/index.js';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";




// const TabArr = [
// { route: 'Home', label: 'Home', type: iconSet.MaterialCommunityIcons, activeIcon: 'home-outline', component: HomeScreen}
// { route: 'Home', label: 'Home', type: iconSet.MaterialCommunityIcons, activeIcon: 'sack', component: MyStocksScreen}
// { route: 'Home', label: 'Home', type: iconSet.FontAwesome, activeIcon: 'shopping-basket', component: ShoppingListScreen}
// { route: 'Home', label: 'Home', type: iconSet.Fontisto, activeIcon: 'shopping-store', ShopsScreen}
// ]



const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	
	return (
		<NavigationContainer >
			<Tab.Navigator 
				screenOptions={{
					tabBarStyle:{
						borderRadius:36,
						height:80,

						backgroundColor:"#4A4A4B",
						position: 'absolute',
						overflow:'hidden',
						left: 5,
						bottom: 0,
						right: 5,
						marginBottom:40,
						borderColor: '#1111'
					  },
					tabBarShowLabel: false,
					headerShown: false,
					headerTransparent: true,
					tabBarActiveTintColor: "#4460F5",
					tabBarInactiveTintColor: "#FFFFFF",
				}}
				>
				<Tab.Screen 
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name="home-outline"
								size={30}
								color={color}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="MyStocks"
					component={MyStocksScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="sack" size={28} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name="Shopping list"
					component={ShoppingListScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="food-croissant" size={38} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name="Shops"
					component={ShopsScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<Fontisto name="shopping-store" size={24} color={color} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

	  
const styles = StyleSheet.create({});
