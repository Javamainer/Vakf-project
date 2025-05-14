import Image from "next/image";

export default function Donate() {
    return (
        <div className="donate-wrapper"><Image className="donate" src="/donate.svg" width={300} height={150} alt="donate" /></div>
    );
}