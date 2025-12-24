import React from "react";
import { IKContext } from "imagekitio-react";
// import { ImageKitProvider as IKProvider } from "imagekitio-react";
const urlEndpoint = "https://ik.imagekit.io/lemiciiq/LeMiCi";
// TODO: replace with your real public key
const publicKey = "YOUR_IMAGEKIT_PUBLIC_KEY";
// TODO: replace with your backend auth endpoint
const authenticationEndpoint = "http://localhost:5000/auth";

export default function ImageKitProvider({ children }) {
  return (
    <IKContext

      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticationEndpoint={authenticationEndpoint}
      
    >
      {children}
    </IKContext>
  );
}
