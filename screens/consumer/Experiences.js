import React from 'react';
import {Text, SafeAreaView, View, Image, FlatList, StyleSheet} from 'react-native';
import {moderateScale} from '../../components/helper/Metrics';
import ButtonM from '../../components/common/ButtonM';
import AccordionItem from '../../components/common/AccordionItem';
import InputM from '../../components/common/InputM';
import MultilineInputM from '../../components/common/MultilineInputM';
import NumericInputM from '../../components/common/NumericInputM';

const Experiences = () => {

    //const 

    const [name, onChangeName] = React.useState('');

    console.log('name: ', name)

    const data = [
        {
            id: 0,
            title: <InputM name="First Name" placeholder="Enter your first name" onChangeValue={onChangeName} value={name}/>,
            description: <MultilineInputM name="Description" placeholder="Job Description"/>,
            years: <NumericInputM name="Years of Experience" placeholder="0"> </NumericInputM>,
        },
    ];
    return (
        <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <AccordionItem title={item.title}
                        bodyText= {[item.description, item.years]}
                        />
                    )
                }
                />
            </View>
        </SafeAreaView>
    );
};

export default Experiences;

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        height: '100%',
        backgroundColor: '#e7e7e7',
      },
    },
);