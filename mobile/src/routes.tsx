import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import OrphanageData from "./screens/CreateOrphanage/OrphanageData";
import OrphanageDetails from "./screens/OrphanageDetails";
import OrphanagesMap from "./screens/OrphanagesMap";
import React from "react";
import SelectMapPosition from "./screens/CreateOrphanage/SelectMapPosition";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="OrphanageData" component={OrphanageData}  options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />,
          }}/>
        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />,
          }}
        />
        <Screen  name="SelectMapPosition" 
        component={SelectMapPosition}  
        options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />,
          }} />
      </Navigator>
    </NavigationContainer>
  );
};
export default Routes;
