import { ObjectId } from 'bson';
import base62 from 'base-x';

const b62 = base62('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

document.getElementById('btn').onclick = () => {
    const str = document.getElementById('input').value;
    const bytes = b62.decode(str);

    console.log(bytes)

    const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');

    const finalHex = ('6' + hex.padStart(24, '0').substring(1)).slice(0, 24);
    const oid = new ObjectId(finalHex);

    document.getElementById('output').innerText = oid.toString();
};
