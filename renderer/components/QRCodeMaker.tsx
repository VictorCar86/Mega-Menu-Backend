import React, { useEffect } from "react";
import QRCode from "qrcode";

export default function QRCodeMaker({ content }: { content: string }) {
    const canvas = React.useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas.current) return;
        QRCode.toCanvas(
            canvas.current,
            content,
            (error) => error && console.error(error),
        );
    }, [canvas.current]);

    return <canvas className="my-6 mx-auto" ref={canvas}></canvas>;
}
