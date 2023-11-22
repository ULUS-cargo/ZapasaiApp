import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import HomeScreen from '../customer/screens/HomeScreen.js';
import MyStocksScreen from '../customer/screens/MyStocksScreen.js';
import ShoppingListScreen from '../customer/screens/ShoppingListScreen.js';
import ShopsScreen from '../customer/screens/ShopsScreen.js';


// const TabArr = [
// { route: 'Home', label: 'Home', type: iconSet.MaterialCommunityIcons, activeIcon: 'home-outline', component: HomeScreen}
// { route: 'Home', label: 'Home', type: iconSet.MaterialCommunityIcons, activeIcon: 'sack', component: MyStocksScreen}
// { route: 'Home', label: 'Home', type: iconSet.FontAwesome, activeIcon: 'shopping-basket', component: ShoppingListScreen}
// { route: 'Home', label: 'Home', type: iconSet.Fontisto, activeIcon: 'shopping-store', ShopsScreen}
// ]

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarShowLabel: false,
					headerShown: false,
					headerTransparent: true,
					tabBarActiveTintColor: "#1E1E20",
					tabBarInactiveTintColor: "#6985E7",
				}}>
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
							<FontAwesome name="shopping-basket" size={24} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name="Shops"
					component={ShopsScreen}
					options={{
						tabBarIcon: ({ color }) => (
							<Fontisto name="shopping-store" size={24} color="black" />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
const styles = StyleSheet.create({});
