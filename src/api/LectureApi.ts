import axios from "axios";

// TODO: add ${process.env.REACT_APP_API_URL} in the empty string once the api endpoints have been implemented.
export const BASE_URL = process.env.REACT_APP_API_URL
  ? `${process.env.REACT_APP_API_URL}`
  : "";

export class LectureApi {
  accessToken?: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  public createLectureBySubject(id: number) {
    return axios({
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "X-MCU-Protocol-Version": "1",
      },
      method: "post",
      url: `${BASE_URL}/lectures`,
      data: {
        subjectId: id,
      },
    });
  }
}
