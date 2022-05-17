import axios from "axios";

// TODO: add ${process.env.REACT_APP_API_URL} in the empty string once the api endpoints have been implemented.
export const BASE_URL = process.env.REACT_APP_API_URL
  ? `${process.env.REACT_APP_API_URL}`
  : "";

export class SubjectApi {
	constructor() {}

	public apiGetSubjects(teacherId: number) {
    return axios({
      withCredentials: true,
      method: "get",
      url: `${BASE_URL}/subjects/by-teacher/${teacherId}`,
    });
  }
}
