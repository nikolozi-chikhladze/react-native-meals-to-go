import React, { useCallback, useContext, useState } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { useFocusEffect } from "@react-navigation/core";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;

const AvatarContainer = styled.View`
  align-items: center;
  padding-top: ${(props) => props.theme.space[3]};
`;

const AvatarCameraArea = styled.TouchableOpacity`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <AvatarCameraArea onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            )}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor={colors.brand.primary}
              />
            )}
            <Spacer position="top" size="large">
              <Text variant="label">{user.email}</Text>
            </Spacer>
          </AvatarCameraArea>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Spacer />
          <SettingsItem
            title="Payment"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.secondary} icon="cart" />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Past Orders"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.ui.secondary}
                icon="history"
              />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Logout"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.secondary} icon="logout" />
            )}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
