const fs = require('fs');
const path = require('path');

const directoryPath = 'screenshots';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach((file, index) => {
        const oldPath = path.join(directoryPath, file);
        const extension = path.extname(file);
        const newName = `image${index}${extension}`;
        const newPath = path.join(directoryPath, newName);

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error(`Error renaming file ${oldPath} to ${newPath}:`, err);
                return;
            }

            console.log(`Renamed file ${oldPath} to ${newPath}`);
        });
    });
});
