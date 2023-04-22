import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import { Buffer } from "buffer"

const ScanScreen = () => {
    const BluetoothManager = new BleManager();

    const startScan = async () => {
        console.log('start scan');
        let dev;
        BluetoothManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.error(error);
                return;
            }

            if (device?.name?.includes('HMSoft')) {
                // console.log(device)
                dev = device;
                BluetoothManager.stopDeviceScan();

            }
        });

        setTimeout(async () => {
            await BluetoothManager.connectToDevice(dev.id)
            const serviceUUID = '0000ffe0'//-0000-1000-8000-00805f9b34fb';
            const characteristicUUID = '0000ffe1'//-0000-1000-8000-00805f9b34fb';
            const services1 = await dev.discoverAllServicesAndCharacteristics();

            BluetoothManager.monitorCharacteristicForDevice(dev.id, serviceUUID, characteristicUUID, (err, char) => {
                if (err) {
                    console.error(err)
                }

                console.log(char)
            })

            await BluetoothManager.writeCharacteristicWithoutResponseForDevice(
                dev.id,
                serviceUUID,
                characteristicUUID,
                "dGVzdA=="
            )


            // const services = await dev.services();
            // const serviceUUID1 = services.map(service => service.uuid)[0]

            // const characteristics = await dev.characteristicsForService(serviceUUID1);
            // console.log(serviceUUID1, characteristics)
        }, 1000);

        setTimeout(async () => {
            await dev.cancelConnection();
            console.log('disc');
        }, 5000);
        setTimeout(async () => {
            let dev;
            BluetoothManager.startDeviceScan(null, null, (error, device) => {
                if (error) {
                    console.error(error);
                    return;
                }

                if (device?.name?.includes('HMSoft')) {
                    // console.log(device)
                    dev = device;
                    BluetoothManager.stopDeviceScan();

                }
            });
            console.log('con2')
            await BluetoothManager.connectToDevice(dev.id)


            // await dev.cancelConnection();
            // console.log('disc2');
            const res = await BluetoothManager.readCharacteristicForDevice(dev.id, '0000ffe0', '0000ffe1');
            await console.log(res.value);
        }, 10000)
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