import axios from "axios";

// TODO: add ${process.env.REACT_APP_API_URL} in the empty string once the api endpoints have been implemented.
export const BASE_URL = process.env.REACT_APP_API_URL
	? `${process.env.REACT_APP_API_URL}`
	: "";

export class LectureApi {
	constructor() {}

	public createLectureBySubject(id: number) {
		return axios({
			withCredentials: true,
			method: "post",
			url: `${BASE_URL}/lectures`,
            data: {
                subjectId: id
            }
		});
	}
}