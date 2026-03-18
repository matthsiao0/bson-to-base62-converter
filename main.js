import { ObjectId } from 'bson';
import base62 from 'base-x';

const PYTHON_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const b62 = base62(PYTHON_ALPHABET);

function processB62ToBson(text) {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    const results = lines.map(str => {
        try {
            const decoded = b62.decode(str);
            const hex = Array.from(decoded)
                .map(b => b.toString(16).padStart(2, '0'))
                .join('')
                .padStart(24, '0');
            
            return new ObjectId(hex).toString(); 
        } catch (e) {
            return `Error: Invalid input "${str}"`;
        }
    });

    return results;
}
