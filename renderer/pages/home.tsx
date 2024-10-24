import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import QRCodeMaker from "../components/QRCodeMaker";
import { signData } from "../misc/crypt";
// import Image from 'next/image';

const json = {
    name: "Nextron",
    version: "1.0.0",
    description: "My application description",
};

export default function HomePage() {
    const [QRContent, setQRContent] = useState("");

    useEffect(() => {
        signData(json).then(setQRContent);
    }, []);

    return (
        <>
            <Head>
                <title>Home - Nextron (with-tailwindcss)</title>
            </Head>

            <section className="w-full">
                <h1 className="my-4 text-2xl text-center">Home</h1>
                {QRCodeMaker && <QRCodeMaker content={QRContent} />}
                <p className="text-center text-lg">QR Code</p>
            </section>

            <Link
                className="block w-60 p-3 my-3 mx-auto text-center rounded bg-blue-600"
                href="/next"
            >
                Go to next page
            </Link>
        </>
    );
}
