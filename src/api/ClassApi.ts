import axios from "axios";

// TODO: add ${process.env.REACT_APP_API_URL} in the empty string once the api endpoints have been implemented.
export const BASE_URL = process.env.REACT_APP_API_URL
	? `${process.env.REACT_APP_API_URL}`
	: "";

export class ClassApi {
	public getClassAttendanceCode(id: number) {
		return axios({
			withCredentials: true,
			method: "get",
			url: `${BASE_URL}/class-codes/${id}`,
		});
	}

	public deleteClassAttendanceCode(id: number) {
		return axios({
			withCredentials: true,
			method: "delete",
			url: `${BASE_URL}/class-codes/${id}`,
		});
	}

	public getAttendClass(code: string) {
		return axios({
			withCredentials: true,
			method: "get",
			url: `${BASE_URL}/class-codes/attend/${code}`,
		});
	}
}