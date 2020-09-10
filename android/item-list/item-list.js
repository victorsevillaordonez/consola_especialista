import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import Divider from 'react-native-divider';
import Stylestem from './style';

function ItemList(
  id,
  title,
  serviceName,
  categoryName,
  subject,
  date,
  selected,
  onSelect,
) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        Stylestem.item,
        {backgroundColor: selected ? '#AFABAA' : '#FFFFFF'},
      ]}>
      <>
        <Image
          source={require('../assets/images/list.png')}
          style={Stylestem.logo}
        />
        <Text style={Stylestem.itemId}>{id} Yesterday</Text>
        <Text style={Stylestem.itemProject}>{title}</Text>
        <Text style={Stylestem.itemServices}>
          {serviceName} / {categoryName}
        </Text>
        <Text style={Stylestem.itemSubject}>{subject}</Text>
        <Divider style={Stylestem.itemLine} />
        <Text style={Stylestem.itemStatus}>Abierta</Text>
      </>
    </TouchableOpacity>
  );
}

export default ItemList;
