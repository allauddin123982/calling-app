import {createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "2fcc1159d1fa40f69b417b97a537b460"
const token = "007eJxTYLhu8uWGR2rV83/xzfNn1Mq/ETLlz/Btuby/tH1doE1sgb0Cg1FacrKhoallimFaoolBmpllkomheZKleaKpsXmSiZnBzgfHUxsCGRnOHBNmZmSAQBCfhSE3MTOPgQEAle4gdg=="

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";





