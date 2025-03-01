import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LibrarySystemContext, ThemeContext } from '../context/initialContext';
import { ChevronLeftIcon, CloseIcon, Pressable, Icon } from 'native-base';
import { View, Image, StyleSheet, Text } from 'react-native';

const HeaderLogoBar = (props) => {
     const { theme } = React.useContext(ThemeContext);
     const { library } = React.useContext(LibrarySystemContext);
     if (library.headerLogoApp){
          const localBrandingLogoUri = library.headerLogoApp;
          return (
               <View >
                     <Image
                        source={{uri: localBrandingLogoUri}} size={50} alt='Local branding logo' placeholder="Local branding logo"  style={{ maxWidth:'100%', width: '100%', height:50, backgroundColor:theme['colors']['primary']['base'] }}
                      />
               </View>
          );
     }else{
          return null;
     }
};

export default function TitleWithLogo(props) {
     const { theme } = React.useContext(ThemeContext);
     const navigation = useNavigation();
     const hideBack = props.hideBack ?? false;
     return (
          <View>
               <HeaderLogoBar />
               <View style={{ flexDirection:'row', maxWidth:'100%', width: '100%', paddingLeft:20, paddingTop:5, paddingRight:20, paddingBottom:5, justifyContent:'left', backgroundColor:theme['colors']['primary']['base'] }} >
                    {navigation.canGoBack() && !hideBack && (
                       <Pressable onPress={() => navigation.goBack()} mr={3} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }} >
                            <ChevronLeftIcon size={5} color="primary.baseContrast" />
                       </Pressable>
                     )}
                    <Text style={{color:theme['colors']['primary']['baseContrast'], fontSize:18, lineHeight:22, fontWeight:'bold'}} numberOfLines={1} ellipsizeMode="tail">{props.title}</Text>
               </View>
          </View>
     );
}
