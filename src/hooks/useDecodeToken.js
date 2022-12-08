import jwt_decode from 'jwt-decode';
export default function parseJwt (token) {
    if(token) {
        var decoded = jwt_decode(token);
        return decoded;
    }
    return null;
}