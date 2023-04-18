import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import BleManager from 'react-native-ble-manager';

const ScanScreen = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        BleManager.start({ showAlert: false });
    }, []);

    const startScan = () => {
        BleManager.enableBluetooth()
            .then(() => {
                console.log('Bluetooth enabled');
                BleManager.scan([], 5, true).then(results => {
                    console.log('Scanning...');
                    setDevices(results);
                });
            })
            .catch(error => {
                console.log('Failed to enable Bluetooth:', error);
            });
    };

    const renderItem = ({ item }) => {
        return (
            <View style={{ padding: 10 }}>
                <Text>{item.name || 'Unknown'}</Text>
                <Text>{item.id}</Text>
                <Text>{item.uuid}</Text>
            </View>
        );
    };


    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Start Scanning" onPress={startScan} />
            </View>
            <FlatList
                data={devices}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default ScanScreen;
