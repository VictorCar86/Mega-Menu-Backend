import { SignJWT, jwtVerify, JWTPayload } from "jose";

const auth_password = new TextEncoder().encode(process.env.NEXT_PUBLIC_AUTH_PASSWORD);

export const signData = async (token: JWTPayload) => {
    return await new SignJWT(token)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(auth_password);
}

export const verifyJWT = async (token: JWTPayload) => {
    const jsonToken = JSON.stringify(token);
    return await jwtVerify(
        new TextEncoder().encode(jsonToken),
        auth_password,
        { algorithms: ['HS256'] }
    );
}