import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import { Buffer } from "buffer"

const ScanScreen = () => {
    const BluetoothManager = new BleManager();
    let dev; // declare dev variable outside the startScan function

    const startScan = async () => {
        console.log('start scan');
        BluetoothManager.startDeviceScan(null, null, async (error, device) => {
            if (error) {
                console.error(error);
                return;
            }

            if (device?.name?.includes('HMSoft')) {
                dev = device;
                BluetoothManager.stopDeviceScan();

            }
        });

        setTimeout(async () => {
            await BluetoothManager.connectToDevice(dev.id)
            console.log('connected to', dev.id)
            const serviceUUID = '0000ffe0';
            const characteristicUUID = '0000ffe1';
            const services = await dev.discoverAllServicesAndCharacteristics();
            //console.log(services)

            const services1 = await BluetoothManager.readCharacteristicForDevice(dev.id, serviceUUID, characteristicUUID)
            console.log(services1.value)


            // const services = await dev.services();
            // const serviceUUID1 = services.map(service => service.uuid)[0]

            // const characteristics = await dev.characteristicsForService(serviceUUID1);
            // console.log(serviceUUID1, characteristics)

            // BluetoothManager.monitorCharacteristicForDevice(dev.id, serviceUUID, characteristicUUID, (err, char) => {
            //     if (err) {
            //         console.error(err)
            //     }

            //     console.log(char)
            // })

            // await BluetoothManager.writeCharacteristicWithoutResponseForDevice(
            //     dev.id,
            //     serviceUUID,
            //     characteristicUUID,
            //     "dGVzdA=="
            // )

        }, 1000);

        setTimeout(async () => {
            await dev.cancelConnection();
            console.log('disc');
        }, 5000);
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Start Scanning" onPress={startScan} />
            </View>
        </View>
    );
};


export default ScanScreen;
