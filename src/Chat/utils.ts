import { GeneralTrace, LaunchRequest, RequestType, TextRequest, IntentRequest } from '@voiceflow/general-types';
import axios from 'axios';

const versionID = 'development';
// const userID = '';
const APIKey = 'VF.DM.635f281c8cec7c0007b823aa.r1HDLJhkNNcOOsRM';

// eslint-disable-next-line import/prefer-default-export
export const interact = async (
  payload: TextRequest['payload'] | LaunchRequest['payload'] | IntentRequest['payload'],
  userID: string,
  type: string = 'text'
): Promise<GeneralTrace[]> => {
  const request: TextRequest | LaunchRequest | IntentRequest = { type: type as any, payload };

  const { data } = await axios.post(
    `https://general-runtime.voiceflow.com/state/${versionID}/user/${userID}/interact`,
    { request, config: { tts: true } },
    { headers: { Authorization: APIKey } }
  );

  return data;
};
