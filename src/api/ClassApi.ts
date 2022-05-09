import axios from "axios";

// TODO: add ${process.env.REACT_APP_API_URL} in the empty string once the api endpoints have been implemented.
export const BASE_URL = process.env.REACT_APP_API_URL
	? `${process.env.REACT_APP_API_URL}`
	: "";

export class ClassApi {
	accessToken?: string;

	constructor(accessToken: string) {
		this.accessToken = accessToken;
	}

	public getClassAttendanceCode(id: number) {
		return axios({
			headers: {
				Authorization: `Bearer ${this.accessToken}`,
				"X-MCU-Protocol-Version": "1",
			},
			method: "get",
			url: `${BASE_URL}/class-codes/${id}`,
		});
	}

	public deleteClassAttendanceCode(id: number) {
		return axios({
			headers: {
				Authorization: `Bearer ${this.accessToken}`,
				"X-MCU-Protocol-Version": "1",
			},
			method: "delete",
			url: `${BASE_URL}/class-codes/${id}`,
		});
	}

	public getAttendClass(code: string) {
		return axios({
			headers: {
				Authorization: `Bearer ${this.accessToken}`,
				"X-MCU-Protocol-Version": "1",
			},
			method: "get",
			url: `${BASE_URL}/class-codes/attend/${code}`,
		});
	}
}