import { ObjectId } from 'bson';
import base62 from 'base-x';

const b62 = base62('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

document.getElementById('btn').onclick = () => {
    const str = document.getElementById('input').value;
    const bytes = b62.decode(str);

    console.log(bytes)

    const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');

    const paddedHex = hex.padStart(24, '0');
    const oid = new ObjectId(paddedHex);

    document.getElementById('output').innerText = oid.toString();
};
