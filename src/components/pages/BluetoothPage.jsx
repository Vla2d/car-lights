import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import { Buffer } from "buffer"

const ScanScreen = () => {
    const BluetoothManager = new BleManager();
    let dev;

    const startScan = async () => {
        console.log(Buffer.from('6').toString("base64"))

        console.log('start scanning');
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
            const services = await dev.discoverAllServicesAndCharacteristics();

            BluetoothManager.monitorCharacteristicForDevice(dev.id, serviceUUID, characteristicUUID, (err, char) => {
                if (err) {
                    //console.error(err)
                }

                if (char !== null) console.log(char)
            })

            await BluetoothManager.writeCharacteristicWithoutResponseForDevice(
                dev.id,
                serviceUUID,
                characteristicUUID,
                Buffer.from('2910').toString("base64")
            )
        }, 1000);

        setTimeout(async () => {
            const serviceUUID = '0000ffe0'//-0000-1000-8000-00805f9b34fb';
            const characteristicUUID = '0000ffe1'//-0000-1000-8000-00805f9b34fb';
            const services = await dev.discoverAllServicesAndCharacteristics();
            //console.log(services)

            const services1 = await BluetoothManager.readCharacteristicForDevice(dev.id, serviceUUID, characteristicUUID)
            console.log('new value is:', services1.value)

            //
            await BluetoothManager.writeCharacteristicWithoutResponseForDevice(
                dev.id,
                '0000ffe0',
                '0000ffe1',
                Buffer.from('7').toString("base64")
            )
        }, 3000);

        setTimeout(async () => {
            // await BluetoothManager.writeCharacteristicWithoutResponseForDevice(
            //     dev.id,
            //     '0000ffe0',
            //     '0000ffe1',
            //     Buffer.from('2910').toString("base64")
            // )
            await dev.cancelConnection();
            console.log('disconnected');
        }, 5000);
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Start Scanning" onPress={async () => await startScan()} />
            </View>
        </View>
    );
};


export default ScanScreen;

